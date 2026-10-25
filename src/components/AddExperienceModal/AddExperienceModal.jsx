import { useMemo, useState } from "react";
import Icon from "../Icon/Icon";
import "./AddExperienceModal.css";

const labelClass = "block text-[13px] font-semibold text-[#17161d]";
const inputClass =
    "mt-2 block h-[38px] w-full rounded-lg border border-[#d5dfeb] bg-white px-3 text-[14px] font-normal text-[#24222a] outline-none placeholder:text-[13px] placeholder:font-light placeholder:text-[#b5b5bb] focus:border-[#0755ff] focus:ring-2 focus:ring-[#0755ff]/10";

function ListField({ label, placeholder, icon, values, setValues }) {
    const update = (index, value) =>
        setValues((items) =>
            items.map((item, i) => (i === index ? value : item)),
        );

    return (
        <div>
            <p className={labelClass}>{label}</p>
            <div className="space-y-2">
                {values.map((value, index) => (
                    <div className="relative" key={`${label}-${index}`}>
                        <span className="absolute left-3 top-2 text-[#ff6b32]">
                            {icon}
                        </span>
                        <input
                            value={value}
                            onChange={(event) =>
                                update(index, event.target.value)
                            }
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    if (value.trim())
                                        setValues((items) => [...items, ""]);
                                }
                            }}
                            placeholder={placeholder}
                            className={`${inputClass} mt-2 pl-8 pr-10`}
                        />
                        <button
                            type="button"
                            onClick={() =>
                                value.trim() &&
                                setValues((items) => [...items, ""])
                            }
                            aria-label={`Add ${label}`}
                            className="absolute right-3 top-3 text-[#aaa7af] hover:text-[#0755ff]"
                        >
                            <Icon name="plus" size={15} />
                        </button>
                    </div>
                ))}
            </div>
            <button
                type="button"
                onClick={() => setValues((items) => [...items, ""])}
                className="mt-2 inline-flex items-center gap-1 rounded-full border border-[#e3e2e6] px-3 py-1.5 !text-[13px] font-medium text-[#4f4b55] hover:bg-[#f8f7fa]"
            >
                <Icon name="plus" size={12} /> Add item
            </button>
        </div>
    );
}

export default function AddExperienceModal({ onClose, onSave }) {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [employmentType, setEmploymentType] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    const [softSkills, setSoftSkills] = useState([""]);
    const [hardSkills, setHardSkills] = useState([""]);
    const [tools, setTools] = useState([""]);
    const wordCount = useMemo(
        () => (description.trim() ? description.trim().split(/\s+/).length : 0),
        [description],
    );

    const submit = (event) => {
        event.preventDefault();
        onSave(
            {
                id: Date.now(),
                role: title.trim(),
                company: company.trim(),
                employmentType,
                startDate,
                endDate,
                date:
                    startDate || endDate
                        ? `${startDate ? new Date(`${startDate}T00:00:00`).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Start"} – ${endDate ? new Date(`${endDate}T00:00:00`).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Present"}`
                        : "Current experience",
                description: description.trim(),
                softSkills: softSkills.filter((item) => item.trim()),
                hardSkills: hardSkills.filter((item) => item.trim()),
                tools: tools.filter((item) => item.trim()),
            },
            event.nativeEvent.submitter?.value === "live",
        );
    };

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#15141b]/80 p-3 sm:p-5"
            onMouseDown={(event) =>
                event.target === event.currentTarget && onClose()
            }
        >
            <form
                onSubmit={submit}
                className="add-experience-modal flex max-h-[95vh] w-full max-w-[680px] flex-col overflow-hidden rounded-[22px] bg-white shadow-2xl"
            >
                <header className="flex shrink-0 items-center justify-between px-5 pb-3 pt-5 sm:px-8 sm:pt-7">
                    <h2 className="text-[18px] font-semibold tracking-[-.03em] text-[#17161d]">
                        Add Experience
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="h-8 w-8 flex items-center justify-center rounded-full !text-[28px] leading-none text-[#77747e] hover:bg-[#f3f2f5]"
                    >
                        ×
                    </button>
                </header>
                <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 pb-5 sm:px-8">
                    <label className={labelClass}>
                        Title <span className="text-red-500">*</span>
                        <input
                            required
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder="Ex. Content Strategist"
                            className={inputClass}
                        />
                    </label>
                    <div className="grid gap-3 sm:grid-cols-2">
                        <label className={labelClass}>
                            Company or organization{" "}
                            <span className="text-red-500">*</span>
                            <input
                                required
                                value={company}
                                onChange={(event) =>
                                    setCompany(event.target.value)
                                }
                                placeholder="Enter Company name"
                                className={inputClass}
                            />
                        </label>
                        <label className={labelClass}>
                            Employment type
                            <select
                                value={employmentType}
                                onChange={(event) =>
                                    setEmploymentType(event.target.value)
                                }
                                className={`${inputClass} text-[#77747e]`}
                            >
                                <option value="">Select</option>
                                <option>Full-time</option>
                                <option>Part-time</option>
                                <option>Internship</option>
                                <option>Freelance</option>
                                <option>Contract</option>
                                <option>Self-employed</option>
                            </select>
                        </label>
                        <label className={labelClass}>
                            Start Date
                            <input
                                type="date"
                                value={startDate}
                                onChange={(event) =>
                                    setStartDate(event.target.value)
                                }
                                className={inputClass}
                            />
                        </label>
                        <label className={labelClass}>
                            End Date
                            <input
                                type="date"
                                value={endDate}
                                onChange={(event) =>
                                    setEndDate(event.target.value)
                                }
                                className={inputClass}
                            />
                        </label>
                    </div>
                    <label className={labelClass}>
                        Description <span className="text-red-500">*</span>
                        <span className="float-right text-[10px] font-normal text-[#aaa7af]">
                            write up to 200 words
                        </span>
                        <textarea
                            required
                            rows={3}
                            value={description}
                            onChange={(event) => {
                                const value = event.target.value;
                                if (
                                    value.trim().split(/\s+/).filter(Boolean)
                                        .length <= 200
                                )
                                    setDescription(value);
                            }}
                            placeholder="A brief description of your experience"
                            className={`${inputClass} h-auto min-h-[72px] resize-y py-2.5`}
                        />
                        <span className="sr-only">
                            {wordCount} of 200 words
                        </span>
                    </label>
                    <div className="border-t border-dashed border-[#dedde2] pt-4">
                        <ListField
                            label="Soft Skills"
                            placeholder="Eg: Creativity"
                            icon="✹"
                            values={softSkills}
                            setValues={setSoftSkills}
                        />
                    </div>
                    <ListField
                        label="Hard Skills"
                        placeholder="Eg: Website Design"
                        icon="✹"
                        values={hardSkills}
                        setValues={setHardSkills}
                    />
                    <ListField
                        label="Tools Used"
                        placeholder="Search tools"
                        icon="⌕"
                        values={tools}
                        setValues={setTools}
                    />
                </div>
                <footer className="flex shrink-0 flex-col-reverse gap-2 border-t border-[#e9e7ed] bg-white px-5 py-4 sm:flex-row sm:px-8">
                    <button
                        type="submit"
                        value="draft"
                        className="flex-1 rounded-full border border-[#dedde2] px-4 py-2.5 text-[13px] font-semibold text-[#625e69] hover:bg-[#f8f7fa]"
                    >
                        ◎ Save as Draft
                    </button>
                    <button
                        type="submit"
                        value="live"
                        className="flex-1 rounded-full bg-black px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-[#26232d]"
                    >
                        <span className="mr-1 text-[#00c77b]">↗</span> Save
                    </button>
                </footer>
            </form>
        </div>
    );
}
