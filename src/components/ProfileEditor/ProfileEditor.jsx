import { useState } from "react";
import "./ProfileEditor.css";

const inputClass = "mt-2 block w-full rounded-xl border border-[#e5e2eb] bg-white px-3 py-3 text-sm font-normal text-[#2b2931] outline-none placeholder:text-[#aaa7af] focus:border-[#8b65dc] focus:ring-2 focus:ring-[#8b65dc]/10";
const labelClass = "block text-xs font-semibold text-[#393642]";

export default function ProfileEditor({ profile, onClose, onSave }) {
    const [form, setForm] = useState(profile);
    const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

    const submit = (event) => {
        event.preventDefault();
        onSave(form);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#17131f]/55 p-4 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
            <form onSubmit={submit} className="flex max-h-[92vh] w-full max-w-[620px] flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl">
                <div className="shrink-0 px-6 pb-4 pt-6 sm:px-10 sm:pt-8">
                    <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#8b65dc]">Profile settings</p>
                    <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#28252e]">Make your intro yours</h2>
                </div>
                <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-6 pb-5 sm:px-10">
                    <label className={labelClass}>
                        Name
                        <input value={form.name || ""} onChange={(event) => update("name", event.target.value)} className={inputClass} />
                    </label>
                    <label className={labelClass}>
                        Headline
                        <input value={form.headline || ""} onChange={(event) => update("headline", event.target.value)} className={inputClass} />
                    </label>
                    <label className={labelClass}>
                        About you
                        <textarea value={form.bio || ""} onChange={(event) => update("bio", event.target.value)} rows="3" className={inputClass} />
                    </label>
                    <label className={labelClass}>
                        Location
                        <input value={form.location || ""} onChange={(event) => update("location", event.target.value)} placeholder="City, Country" className={inputClass} />
                    </label>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <label className={labelClass}>
                            LinkedIn URL
                            <input type="url" value={form.linkedin || ""} onChange={(event) => update("linkedin", event.target.value)} placeholder="https://linkedin.com/in/..." className={inputClass} />
                        </label>
                        <label className={labelClass}>
                            Instagram URL
                            <input type="url" value={form.instagram || ""} onChange={(event) => update("instagram", event.target.value)} placeholder="https://instagram.com/..." className={inputClass} />
                        </label>
                    </div>
                    <label className={labelClass}>
                        Website URL
                        <input type="url" value={form.website || ""} onChange={(event) => update("website", event.target.value)} placeholder="https://yourwebsite.com" className={inputClass} />
                    </label>
                    <div className="rounded-2xl border border-[#e9e5ef] p-4">
                        <label className="flex cursor-pointer items-center justify-between gap-4">
                            <span>
                                <span className="block text-sm font-semibold text-[#393642]">Open to work</span>
                                <span className="mt-0.5 block text-[11px] text-[#85818d]">Let recruiters know you’re open to opportunities.</span>
                            </span>
                            <span className="relative inline-flex shrink-0 items-center">
                                <input type="checkbox" checked={Boolean(form.openToWork)} onChange={(event) => update("openToWork", event.target.checked)} className="peer sr-only" />
                                <span className="h-6 w-11 rounded-full bg-[#d8d5dd] transition peer-checked:bg-[#00a982] peer-focus-visible:ring-2 peer-focus-visible:ring-[#00a982]/40" />
                                <span className="pointer-events-none absolute left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition peer-checked:translate-x-5" />
                            </span>
                        </label>
                        {form.openToWork && (
                            <label className={`${labelClass} mt-4`}>
                                Roles you’re interested in
                                <input value={form.openToWorkRoles || ""} onChange={(event) => update("openToWorkRoles", event.target.value)} placeholder="e.g. Content Strategist, Social Media Manager" className={inputClass} />
                            </label>
                        )}
                    </div>
                </div>
                <div className="flex shrink-0 justify-end gap-2 border-t border-[#f0edf3] px-6 py-4 sm:px-10">
                    <button type="button" onClick={onClose} className="rounded-full px-4 py-2.5 text-sm font-medium text-[#625e69] hover:bg-[#f7f6f8]">Cancel</button>
                    <button className="rounded-full bg-[#6c35e8] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#5b2dc6]">Save changes</button>
                </div>
            </form>
        </div>
    );
}
