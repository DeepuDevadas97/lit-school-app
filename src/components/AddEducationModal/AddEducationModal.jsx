import { useState } from "react";
import Icon from "../Icon/Icon";
import TrashIcon from "../../assets/icons/TrashIcon";
import LitLogo from "../../assets/images/LIT-LOGO.png";
import College2 from "../../assets/images/College2.png";
import "./AddEducationModal.css";

const labelClass = "block text-[12px] font-semibold text-[#17161d]";
const inputClass =
    "mt-1.5 block h-[34px] w-full rounded-lg border border-[#d5dfeb] bg-white px-2.5 text-[12px] font-normal text-[#24222a] outline-none placeholder:text-[11px] placeholder:font-light placeholder:text-[#b5b5bb] focus:border-[#0755ff] focus:ring-2 focus:ring-[#0755ff]/10";

function SchoolMark({ education }) {
    if (education.logo === "lit") {
        return (
            <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full border border-[#e1dfe5] bg-white p-1">
                <img
                    src={LitLogo}
                    alt=""
                    className="h-full w-full object-contain"
                />
            </span>
        );
    }
    if (education.logo === "vidya") {
        return (
            <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full border border-[#e1dfe5] bg-white p-1">
                <img
                    src={College2}
                    alt=""
                    className="h-full w-full object-contain"
                />
            </span>
        );
    }
    return (
        <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full border border-[#e1dfe5] bg-white">
            <span className="text-[9px] font-bold text-[#56419c]">
                {education.institution.slice(0, 2).toUpperCase()}
            </span>
        </span>
    );
}

export default function AddEducationModal({
    education,
    onClose,
    onSave,
    onDelete,
}) {
    const [degree, setDegree] = useState("");
    const [institution, setInstitution] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [certificateMode, setCertificateMode] = useState("link");
    const [certificateLink, setCertificateLink] = useState("");
    const [certificateFile, setCertificateFile] = useState(null);
    const [editingId, setEditingId] = useState(null);

    const reset = () => {
        setDegree("");
        setInstitution("");
        setStartDate("");
        setEndDate("");
        setCertificateLink("");
        setCertificateFile(null);
        setEditingId(null);
    };
    const edit = (item) => {
        setDegree(
            item.program && item.program !== item.degree
                ? `${item.degree} · ${item.program}`
                : item.degree || "",
        );
        setInstitution(item.institution || "");
        setStartDate(item.startDate || "");
        setEndDate(item.endDate || "");
        setCertificateLink(item.certificate || "");
        setCertificateFile(null);
        setEditingId(item.id);
    };
    const submit = (event) => {
        event.preventDefault();
        const certificate =
            certificateMode === "file"
                ? certificateFile?.name || ""
                : certificateLink.trim();
        const toPeriodLabel = (value) =>
            value
                ? new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                  })
                : "";
        const date = [toPeriodLabel(startDate), toPeriodLabel(endDate)]
            .filter(Boolean)
            .join(" – ");
        onSave(
            {
                id: editingId || Date.now(),
                degree: degree.trim(),
                institution: institution.trim(),
                program: "",
                startDate,
                endDate,
                date: date || "Dates not specified",
                logo: editingId
                    ? education.find((item) => item.id === editingId)?.logo ||
                      "initials"
                    : "initials",
                certificate,
            },
            event.nativeEvent.submitter?.value === "live",
        );
        reset();
    };

    return (
        <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[#15141b]/80 p-3 sm:p-5"
            onMouseDown={(event) =>
                event.target === event.currentTarget && onClose()
            }
        >
            <form
                onSubmit={submit}
                className="education-modal flex max-h-[90vh] w-full max-w-[620px] flex-col overflow-hidden rounded-[22px] bg-white shadow-2xl"
            >
                <div className="shrink-0 px-5 pb-3 pt-5 sm:px-7">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[16px] font-semibold text-[#17161d]">
                            Add Education
                        </h2>
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close"
                            className="flex h-8 w-8 items-center justify-center rounded-full !text-[28px] leading-none text-[#77747e] hover:bg-[#f3f2f5]"
                        >
                            ×
                        </button>
                    </div>
                </div>
                <div className="min-h-0 flex-1 space-y-2.5 overflow-y-auto px-5 pb-4 sm:px-7">
                    <label className={labelClass}>
                        Degree/Certification{" "}
                        <span className="text-red-500">*</span>
                        <input
                            required
                            value={degree}
                            onChange={(event) => setDegree(event.target.value)}
                            placeholder="Enter Title"
                            className={inputClass}
                        />
                    </label>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        <label className={`${labelClass} sm:col-span-2`}>
                            Institute/Organisation{" "}
                            <span className="text-red-500">*</span>
                            <input
                                required
                                value={institution}
                                onChange={(event) =>
                                    setInstitution(event.target.value)
                                }
                                placeholder="Enter organisation name"
                                className={inputClass}
                            />
                        </label>
                        <label className={labelClass}>
                            Start Date
                            <input
                                type="date"
                                value={startDate}
                                onChange={(event) => setStartDate(event.target.value)}
                                className={inputClass}
                            />
                        </label>
                        <label className={labelClass}>
                            End Date
                            <input
                                type="date"
                                value={endDate}
                                onChange={(event) => setEndDate(event.target.value)}
                                className={inputClass}
                            />
                        </label>
                    </div>
                    <div>
                        <p className={labelClass}>Certificate Link or upload</p>
                        <div className="relative mt-1.5">
                            <Icon
                                name={
                                    certificateMode === "link" ? "link" : "plus"
                                }
                                size={13}
                                className="absolute left-2.5 top-[11px] text-[#3478ff]"
                            />
                            {certificateMode === "link" ? (
                                <input
                                    type="url"
                                    value={certificateLink}
                                    onChange={(event) =>
                                        setCertificateLink(event.target.value)
                                    }
                                    placeholder="Enter URL"
                                    className={`${inputClass} mt-0 pl-8`}
                                />
                            ) : (
                                <input
                                    type="file"
                                    accept="image/*,.pdf"
                                    onChange={(event) =>
                                        setCertificateFile(
                                            event.target.files?.[0] || null,
                                        )
                                    }
                                    className={`${inputClass} mt-0 px-2 py-1 text-[10px] file:mr-2 file:rounded file:border-0 file:bg-[#f1eff5] file:px-2 file:py-1`}
                                />
                            )}
                        </div>
                        <div className="mt-1.5 flex gap-1.5">
                            <button
                                type="button"
                                onClick={() => setCertificateMode("link")}
                                className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1 !text-[10px] font-semibold text-white ${certificateMode === "link" ? "bg-[#0755ff]" : "bg-black"}`}
                            >
                                <Icon name="link" size={11} />
                                Link
                            </button>
                            <button
                                type="button"
                                onClick={() => setCertificateMode("file")}
                                className={`rounded-full px-3.5 py-1 !text-[10px] font-semibold text-white ${certificateMode === "file" ? "bg-black" : "bg-[#0755ff]"}`}
                            >
                                ↑ File
                            </button>
                        </div>
                    </div>
                    <div className="border-t border-[#e9e7ed] pt-2.5">
                        <div className="mb-2 flex items-center justify-between">
                            <h3 className="text-[13px] font-semibold text-[#17161d]">
                                Your Education
                            </h3>
                            {editingId && (
                                <button
                                    type="button"
                                    onClick={reset}
                                    className="text-[10px] font-medium text-[#0755ff]"
                                >
                                    Cancel edit
                                </button>
                            )}
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {education.map((item) => (
                                <article
                                    key={item.id}
                                    className="min-w-0 rounded-[9px] border border-[#e1dfe5] p-2"
                                >
                                    <div className="flex min-w-0 items-center gap-2">
                                        <SchoolMark education={item} />
                                        <div className="min-w-0">
                                            <h4 className="truncate text-[11px] font-semibold text-[#33303a]">
                                                {item.institution}
                                            </h4>
                                            <p className="text-[9px] text-[#77747e] mt-1">
                                                {item.degree}
                                                {item.program &&
                                                item.program !== item.degree
                                                    ? ` · ${item.program}`
                                                    : ""}
                                            </p>
                                            <p className="text-[9px] text-[#898590]">
                                                {item.date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex gap-1">
                                        <button
                                            type="button"
                                            onClick={() => onDelete(item.id)}
                                            className="flex flex-1 items-center justify-center gap-1 rounded-full border border-[#ffcccc] px-1.5 py-1 !text-[12px] font-medium text-[#e23c3c] hover:bg-[#fff5f5]"
                                        >
                                            <TrashIcon /> Delete
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => edit(item)}
                                            className="flex flex-1 items-center justify-center gap-1 rounded-full border border-[#dedde2] px-1.5 py-1 !text-[12px] font-medium text-[#55515b] hover:bg-[#f7f6f8]"
                                        >
                                            <Icon name="edit" size={10} /> Edit
                                        </button>
                                    </div>
                                </article>
                            ))}
                            {education.length === 0 && (
                                <p className="col-span-full rounded-lg bg-[#f7f6f8] p-3 text-[10px] text-[#77747e]">
                                    Add education details using the form above.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex shrink-0 flex-col-reverse gap-1.5 border-t border-[#e9e7ed] px-5 py-2.5 sm:flex-row sm:px-7">
                    <button
                        type="submit"
                        value="draft"
                        className="flex-1 rounded-full border border-[#dedde2] px-3 py-2 text-[10px] font-medium text-[#625e69] hover:bg-[#f8f7fa]"
                    >
                        ◎ Save as Draft
                    </button>
                    <button
                        type="submit"
                        value="live"
                        className="flex-1 rounded-full bg-black px-3 py-2 text-[10px] font-medium text-white hover:bg-[#26232d]"
                    >
                        <span className="mr-1 text-[#00c77b]">↗</span> Save
                    </button>
                </div>
            </form>
        </div>
    );
}
