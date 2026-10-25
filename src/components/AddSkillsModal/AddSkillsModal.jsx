import { useState } from "react";
import "./AddSkillsModal.css";

const categories = [
    "Content Creation",
    "E Commerce",
    "Digital Marketing",
    "Social Media",
    "Web Development",
];

export default function AddSkillsModal({ onClose, onSave }) {
    const [category, setCategory] = useState(categories[0]);
    const [level, setLevel] = useState("expert");
    const [skillsText, setSkillsText] = useState("");

    const submit = (event) => {
        event.preventDefault();
        const skills = skillsText
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean);
        if (skills.length) onSave(category, skills, level);
    };

    return (
        <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[#15141b]/65 p-4"
            onMouseDown={(event) =>
                event.target === event.currentTarget && onClose()
            }
        >
            <form
                onSubmit={submit}
                className="add-skills-modal w-full max-w-[440px] rounded-[22px] bg-white p-6 shadow-2xl sm:p-8"
            >
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#00a982]">
                            Your skill bank
                        </p>
                        <h2 className="mt-1 text-[20px] font-semibold tracking-[-.03em] text-[#17161d]">
                            Add skills
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="h-8 w-8 flex items-center justify-center rounded-full !text-[28px] leading-none text-[#77747e] hover:bg-[#f3f2f5]"
                    >
                        ×
                    </button>
                </div>
                <label className="block text-[13px] font-semibold text-[#46434d]">
                    Skill category
                    <select
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        className="mt-2 block h-10 w-full rounded-lg border border-[#d5dfeb] bg-white px-3 text-[13px] font-normal outline-none focus:border-[#00a982]"
                    >
                        {categories.map((item) => (
                            <option key={item}>{item}</option>
                        ))}
                    </select>
                </label>
                <label className="mt-5 block text-[13px] font-semibold text-[#46434d]">
                    Proficiency level
                    <select
                        value={level}
                        onChange={(event) => setLevel(event.target.value)}
                        className="mt-2 block h-10 w-full rounded-lg border border-[#d5dfeb] bg-white px-3 text-[13px] font-normal capitalize outline-none focus:border-[#00a982]"
                    >
                        <option value="expert">Expert</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="beginner">Beginner</option>
                    </select>
                </label>
                <label className="mt-5 block text-[13px] font-semibold text-[#46434d]">
                    Skills
                    <textarea
                        required
                        rows={3}
                        value={skillsText}
                        onChange={(event) => setSkillsText(event.target.value)}
                        placeholder="Enter one or more skills, separated by commas"
                        className="mt-2 block w-full resize-y rounded-lg border border-[#d5dfeb] px-3 py-2.5 text-[13px] font-normal outline-none placeholder:font-light placeholder:text-[#aaa7af] focus:border-[#00a982]"
                    />
                </label>
                <p className="mt-2 text-[11px] text-[#85818d]">
                    Example: Content strategy, Audience research
                </p>
                <div className="mt-7 flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full px-4 py-2 text-[12px] font-medium text-[#625e69] hover:bg-[#f5f4f7]"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-full bg-[#00a982] px-5 py-2 text-[12px] font-semibold text-white hover:bg-[#008f70]"
                    >
                        Add skills
                    </button>
                </div>
            </form>
        </div>
    );
}
