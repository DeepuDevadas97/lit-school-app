import { useState } from "react";
import Icon from "../Icon/Icon";
import "./AddAchievementModal.css";
import TrashIcon from "../../assets/icons/TrashIcon";

const labelClass = "block text-[12px] font-semibold text-[#17161d]";
const inputClass =
    "mt-1.5 block h-[34px] w-full rounded-lg border border-[#d5dfeb] bg-white px-2.5 text-[12px] font-normal text-[#24222a] outline-none placeholder:text-[11px] placeholder:font-light placeholder:text-[#b5b5bb] focus:border-[#0755ff] focus:ring-2 focus:ring-[#0755ff]/10";

function Medal() {
    return (
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#fff3d2] text-[15px] text-[#ed9e23]">
            ✹
        </span>
    );
}

export default function AddAchievementModal({
    achievements,
    onClose,
    onSave,
    onDelete,
}) {
    const [title, setTitle] = useState("");
    const [issuer, setIssuer] = useState("");
    const [date, setDate] = useState("");
    const [certificateMode, setCertificateMode] = useState("link");
    const [certificateLink, setCertificateLink] = useState("");
    const [certificateFile, setCertificateFile] = useState(null);
    const [editingId, setEditingId] = useState(null);

    const resetForm = () => {
        setTitle("");
        setIssuer("");
        setDate("");
        setCertificateLink("");
        setCertificateFile(null);
        setEditingId(null);
    };

    const editAchievement = (achievement) => {
        setTitle(achievement.title);
        setIssuer(achievement.issuer);
        setDate(achievement.date || "");
        setCertificateLink(achievement.certificate || "");
        setCertificateFile(null);
        setEditingId(achievement.id);
    };

    const submit = (event) => {
        event.preventDefault();
        const certificate =
            certificateMode === "file"
                ? certificateFile?.name || ""
                : certificateLink.trim();
        onSave(
            {
                id: editingId || Date.now(),
                title: title.trim(),
                issuer: issuer.trim(),
                date,
                certificate,
            },
            event.nativeEvent.submitter?.value === "live",
        );
        resetForm();
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
                className="achievement-modal flex max-h-[88vh] w-full max-w-[600px] flex-col overflow-hidden rounded-[20px] bg-white shadow-2xl"
            >
                <div className="flex shrink-0 items-center justify-between px-5 pb-2 pt-5 sm:px-7">
                    <h2 className="text-[16px] font-semibold text-[#17161d]">
                        Add Achievements
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="h-8 w-8 flex justify-center items-center rounded-full !text-[28px] leading-none text-[#77747e] hover:bg-[#f3f2f5]"
                    >
                        ×
                    </button>
                </div>
                <div className="min-h-0 flex-1 space-y-2.5 overflow-y-auto px-5 pb-4 sm:px-7">
                    <label className={labelClass}>
                        Achievement Title{" "}
                        <span className="text-red-500">*</span>
                        <input
                            required
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder="Enter Title"
                            className={inputClass}
                        />
                    </label>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-[1fr_0.9fr]">
                        <label className={labelClass}>
                            Issuer/Organization{" "}
                            <span className="text-red-500">*</span>
                            <input
                                required
                                value={issuer}
                                onChange={(event) =>
                                    setIssuer(event.target.value)
                                }
                                placeholder="Enter organisation name"
                                className={inputClass}
                            />
                        </label>
                        <label className={labelClass}>
                            Date
                            <input
                                type="date"
                                value={date}
                                onChange={(event) =>
                                    setDate(event.target.value)
                                }
                                className={inputClass}
                            />
                        </label>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <p className={labelClass}>
                                Certificate Link or upload
                            </p>
                        </div>
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
                                    className={`${inputClass} mt-0 pl-8 pr-3`}
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
                                className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1 !text-[10px] font-semibold ${certificateMode === "link" ? "bg-[#0755ff] text-white" : "bg-black text-white"}`}
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
                                Your Achievements
                            </h3>
                            {editingId && (
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="text-[10px] font-medium text-[#0755ff]"
                                >
                                    Cancel edit
                                </button>
                            )}
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                            {achievements.map((achievement) => (
                                <article
                                    key={achievement.id}
                                    className="min-w-0 rounded-[9px] border border-[#e1dfe5] p-2"
                                >
                                    <Medal />
                                    <h4 className="mt-1.5 line-clamp-2 text-[11px] font-medium leading-[1.5] text-[#33303a] min-h-[24px]">
                                        {achievement.title}
                                    </h4>
                                    <p className="mt-1 line-clamp-1 text-[9px] text-[#77747e]">
                                        {achievement.issuer}
                                    </p>
                                    <div className="mt-2.5 flex gap-1">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onDelete(achievement.id)
                                            }
                                            className="flex flex-1 items-center justify-center gap-1 rounded-full border border-[#ffcccc] px-1.5 py-1 !text-[12px] font-medium text-[#e23c3c] hover:bg-[#fff5f5]"
                                        >
                                            <span className="pb-1"><TrashIcon/></span> Delete
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                editAchievement(achievement)
                                            }
                                            className="flex flex-1 items-center justify-center gap-1 rounded-full border border-[#dedde2] px-1.5 py-1 !text-[12px] font-medium text-[#55515b] hover:bg-[#f7f6f8]"
                                        >
                                            <Icon name="edit" size={12} /> Edit
                                        </button>
                                    </div>
                                </article>
                            ))}
                            {achievements.length === 0 && (
                                <p className="col-span-full rounded-lg bg-[#f7f6f8] p-3 text-[10px] text-[#77747e]">
                                    Add an achievement using the form above.
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
