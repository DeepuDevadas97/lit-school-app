import { useMemo, useState } from "react";
import Icon from "../Icon/Icon";
import "./AddProjectModal.css";

const inputClass =
    "mt-1.5 w-full rounded-lg border border-[#d5dfeb] bg-white px-3 py-2.5 text-sm text-[#24222a] outline-none placeholder:text-[#b5b5bb] focus:border-[#7c61ff] focus:ring-2 focus:ring-[#7c61ff]/10 h-[38px]";
const labelClass = "block text-[11px] font-semibold text-[#46434d]";

function RepeatableFields({
    title,
    placeholder,
    values,
    setValues,
    requiredFirst = false,
    icon,
}) {
    const update = (index, value) =>
        setValues((items) =>
            items.map((item, i) => (i === index ? value : item)),
        );
    return (
        <div className="space-y-2.5">
            <p className={labelClass}>{title}</p>
            {values.map((value, index) => (
                <div
                    key={`${index}-${String(title)}`}
                    className="flex items-start gap-2"
                >
                    <div className="relative min-w-0 flex-1">
                        <span className="absolute left-3 top-3 text-[#5280f7]">
                            {icon}
                        </span>
                        <input
                            required={requiredFirst && index === 0}
                            value={value}
                            onChange={(e) => update(index, e.target.value)}
                            placeholder={placeholder}
                            className={`${inputClass} mt-0 pl-9`}
                        />
                    </div>
                    {values.length > 1 && (
                        <button
                            type="button"
                            onClick={() =>
                                setValues((items) =>
                                    items.filter((_, i) => i !== index),
                                )
                            }
                            aria-label={`Remove ${title} item`}
                            className="mt-2 rounded-full px-2 text-lg text-[#918e98]"
                        >
                            ×
                        </button>
                    )}
                </div>
            ))}
            <button
                type="button"
                onClick={() => setValues((items) => [...items, ""])}
                className="flex items-center gap-1 rounded-full border border-[#e3e2e6] px-3 py-1.5 !text-[13px] font-medium text-[#4f4b55] hover:bg-[#f8f7fa]"
            >
                <Icon name="plus" size={12} /> Add item
            </button>
        </div>
    );
}

export default function AddProjectModal({ onClose, onAdd }) {
    const [title, setTitle] = useState("");
    const [organization, setOrganization] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [bannerPreview, setBannerPreview] = useState("");
    const [attachmentMode, setAttachmentMode] = useState("link");
    const [linkValue, setLinkValue] = useState("");
    const [attachmentFile, setAttachmentFile] = useState(null);
    const [attachments, setAttachments] = useState([]);
    const [description, setDescription] = useState("");
    const [breakdown, setBreakdown] = useState("");
    const [briefItems, setBriefItems] = useState([""]);
    const [impactItems, setImpactItems] = useState([""]);
    const [tools, setTools] = useState([""]);
    const [skills, setSkills] = useState([""]);
    const wordCount = useMemo(
        () => (description.trim() ? description.trim().split(/\s+/).length : 0),
        [description],
    );
    const addAttachment = () => {
        const item =
            attachmentMode === "link"
                ? { type: "link", value: linkValue.trim() }
                : { type: "file", value: attachmentFile?.name || "" };
        if (!item.value || attachments.length >= 3) return;
        setAttachments((items) => [...items, item]);
        setLinkValue("");
        setAttachmentFile(null);
    };
    const submit = (e) => {
        e.preventDefault();
        const finalAttachments = [...attachments];
        if (
            attachmentMode === "link" &&
            linkValue.trim() &&
            finalAttachments.length < 3
        )
            finalAttachments.push({ type: "link", value: linkValue.trim() });
        if (
            attachmentMode === "file" &&
            attachmentFile &&
            finalAttachments.length < 3
        )
            finalAttachments.push({ type: "file", value: attachmentFile.name });
        onAdd(
            {
                title,
                organization,
                startDate,
                endDate,
                bannerImage: bannerPreview,
                attachments: finalAttachments,
                description,
                breakdown,
                briefItems: briefItems.filter((item) => item.trim()),
                impactItems: impactItems.filter((item) => item.trim()),
                tools: tools.filter((item) => item.trim()),
                skills: skills.filter((item) => item.trim()),
                outcome:
                    impactItems.find((item) => item.trim()) || "In progress",
            },
            e.nativeEvent.submitter?.value === "live",
        );
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#15141b]/80 p-3 sm:p-5"
            onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
            <form
                onSubmit={submit}
                className="add-proof-modal flex max-h-[94vh] w-full max-w-[520px] flex-col overflow-hidden rounded-[22px] bg-white shadow-2xl"
            >
                <div className="flex shrink-0 items-center justify-between px-5 pb-3 pt-5 sm:px-7 sm:pt-6">
                    <h2 className="text-[18px] font-semibold tracking-[-.03em] text-[#17161d]">
                        Add Proof of Work
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="h-8 w-8 flex items-center justify-center rounded-full !text-[28px] text-[#77747e] hover:bg-[#f3f2f5]"
                    >
                        ×
                    </button>
                </div>
                <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 pb-5 sm:px-7">
                    <label className="relative flex aspect-[3/1] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[16px] border border-dashed border-[#cfd1d7] bg-white text-center hover:bg-[#faf9fc]">
                        {bannerPreview ? (
                            <img
                                src={bannerPreview}
                                alt="Project banner preview"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        ) : (
                            <>
                                <span className="text-xs font-semibold text-[#55515b]">
                                    Upload Banner Image{" "}
                                    <span className="text-red-500">*</span>
                                </span>
                                <span className="mt-1 text-[11px] text-[#6d6973]">
                                    3:1 ratio
                                </span>
                                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#e4e3e7] px-3 py-1.5 text-[10px] font-medium text-[#4f4b54]">
                                    <span className="text-[#ff6b3d]">▧</span>{" "}
                                    Select from library
                                </span>
                            </>
                        )}
                        <input
                            required
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file)
                                    setBannerPreview(URL.createObjectURL(file));
                            }}
                        />
                    </label>
                    <label className={labelClass}>
                        Project Title <span className="text-red-500">*</span>
                        <input
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter Project Name"
                            className={inputClass}
                        />
                    </label>
                    <label className={labelClass}>
                        Organization/Brand{" "}
                        <span className="font-normal text-[#77747e]">
                            (if applicable; omit for mock projects)
                        </span>
                        <input
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            placeholder="Enter organization or brand"
                            className={inputClass}
                        />
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        <label className={labelClass}>
                            Start Date
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className={inputClass}
                            />
                        </label>
                        <label className={labelClass}>
                            End Date
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className={inputClass}
                            />
                        </label>
                    </div>
                    <div className="border-t border-dashed border-[#dedde2] pt-4">
                        <div className="flex items-center justify-between">
                            <label className={labelClass}>
                                Project Link or Files{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <span className="text-[9px] text-[#aaa7af]">
                                Add up to 3 links/files
                            </span>
                        </div>
                        <div className="mt-2 flex gap-2 items-center">
                            <div className="relative min-w-0 flex-1">
                                <Icon
                                    name={
                                        attachmentMode === "link"
                                            ? "link"
                                            : "plus"
                                    }
                                    size={14}
                                    className="absolute left-3 top-3 text-[#3478ff]"
                                />
                                {attachmentMode === "link" ? (
                                    <input
                                        required={!attachments.length}
                                        type="url"
                                        value={linkValue}
                                        onChange={(e) =>
                                            setLinkValue(e.target.value)
                                        }
                                        placeholder="Enter URL"
                                        className={`${inputClass} mt-0 pl-9 pr-9`}
                                    />
                                ) : (
                                    <input
                                        required={!attachments.length}
                                        type="file"
                                        onChange={(e) =>
                                            setAttachmentFile(
                                                e.target.files?.[0] || null,
                                            )
                                        }
                                        className={`${inputClass} mt-0 px-2 py-1.5 text-[10px] file:mr-2 file:rounded file:border-0 file:bg-[#f1eff5] file:px-2 file:py-1`}
                                    />
                                )}
                            </div>
                            <button
                                type="button"
                                disabled={
                                    attachments.length >= 3 ||
                                    !(attachmentMode === "link"
                                        ? linkValue.trim()
                                        : attachmentFile)
                                }
                                onClick={addAttachment}
                                aria-label="Add link or file"
                                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#e2e0e6] text-[#8f8b96] disabled:opacity-40"
                            >
                                <Icon name="plus" size={15} />
                            </button>
                        </div>
                        <div className="mt-2 flex gap-1.5">
                            <button
                                type="button"
                                onClick={() => setAttachmentMode("link")}
                                className={`rounded-full px-4 py-1 !text-[13px] font-semibold flex items-center ${attachmentMode === "link" ? "bg-[#0755ff] text-white" : "bg-black text-white"}`}
                            >
                                <Icon
                                    name="link"
                                    size={12}
                                    className="mr-1 inline"
                                />
                                Link
                            </button>
                            <button
                                type="button"
                                onClick={() => setAttachmentMode("file")}
                                className={`rounded-full px-4 py-1 !text-[13px] font-semibold flex items-center ${attachmentMode === "file" ? "bg-black text-white" : "bg-[#0755ff] text-white"}`}
                            >
                                <span className="mb-1 mr-2">↑</span> File
                            </button>
                        </div>
                        {attachments.length > 0 && (
                            <div className="mt-2 space-y-1">
                                {attachments.map((item, i) => (
                                    <div
                                        key={`${item.value}-${i}`}
                                        className="flex items-center justify-between rounded-lg bg-[#f6f5f8] px-3 py-2 text-[10px] text-[#625e69]"
                                    >
                                        <span className="truncate">
                                            {item.value}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setAttachments((items) =>
                                                    items.filter(
                                                        (_, index) =>
                                                            index !== i,
                                                    ),
                                                )
                                            }
                                            aria-label="Remove attachment"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <label className={labelClass}>
                        Project Description{" "}
                        <span className="text-red-500">*</span>
                        <span className="float-right font-normal text-[#aaa7af]">
                            {wordCount}/200 words
                        </span>
                        <textarea
                            required
                            value={description}
                            onChange={(e) => {
                                const next = e.target.value;
                                if (
                                    next.trim().split(/\s+/).filter(Boolean)
                                        .length <= 200
                                )
                                    setDescription(next);
                            }}
                            rows="3"
                            placeholder="A brief description of your project"
                            className={`${inputClass} resize-y`}
                        />
                    </label>
                    <label className={labelClass}>
                        Project Breakdown
                        <textarea
                            value={breakdown}
                            onChange={(e) => setBreakdown(e.target.value)}
                            rows="4"
                            placeholder="Describe your project in detail"
                            className={`${inputClass} resize-y`}
                        />
                    </label>
                    <div className="border-t border-dashed border-[#dedde2] pt-4">
                        <RepeatableFields
                            title={
                                <>
                                    Project Brief/Objective{" "}
                                    <span className="text-red-500">*</span>
                                </>
                            }
                            placeholder="Eg: Build an official event website for Bangalore Creator Fest..."
                            values={briefItems}
                            setValues={setBriefItems}
                            requiredFirst
                            icon="◎"
                        />
                    </div>
                    <RepeatableFields
                        title={
                            <>
                                Project Impact{" "}
                                <span className="text-red-500">*</span>
                            </>
                        }
                        placeholder="Eg: Drove 500 paid registrations within 2 days."
                        values={impactItems}
                        setValues={setImpactItems}
                        requiredFirst
                        icon="✹"
                    />
                    <RepeatableFields
                        title="Tools Used"
                        placeholder="Search tools"
                        values={tools}
                        setValues={setTools}
                        icon="⌕"
                    />
                    <RepeatableFields
                        title="Skills Nurtured"
                        placeholder="Eg: Website Design"
                        values={skills}
                        setValues={setSkills}
                        icon="✹"
                    />
                </div>
                <div className="flex shrink-0 flex-col-reverse gap-2 border-t border-[#e9e7ed] bg-white px-5 py-4 sm:flex-row sm:px-7">
                    <button
                        type="submit"
                        value="draft"
                        className="flex-1 rounded-full border border-[#dedde2] px-4 py-2.5 !text-sm font-semibold text-[#625e69] hover:bg-[#f8f7fa]"
                    >
                        ◎ Save as Draft
                    </button>
                    <button
                        type="submit"
                        value="live"
                        className="flex-1 rounded-full bg-black px-4 py-2.5 !text-sm font-semibold text-white hover:bg-[#26232d]"
                    >
                        <span className="mr-1 text-[#00c77b]">↗</span> Take
                        Project Live
                    </button>
                </div>
            </form>
        </div>
    );
}
