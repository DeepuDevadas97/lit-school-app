import { useState } from "react";
import "./ExperienceSection.css";

const experiences = [
    {
        id: "content-production-1",
        role: "Content Production and Storytelling",
        company: "Oben Electric",
        date: "Feb 2021 – Oct 2021",
        description:
            "Joined to contribute to brand content through video editing while understanding how visuals and storytelling influence audience engagement.",
        softSkills: [
            "Video Editing",
            "Adobe Premiere Pro",
            "Basic Storytelling",
            "Creativity",
            "Communication",
            "Communication",
            "Communication",
            "Leadership",
            "Collaboration",
        ],
        hardSkills: [
            "Video Editing",
            "Adobe Premiere Pro",
            "Basic Storytelling",
            "Creativity",
            "Communication",
            "Communication",
            "Communication",
            "Leadership",
            "Collaboration",
        ],
    },
    {
        id: "content-production-2",
        role: "Content Production and Storytelling",
        company: "Oben Electric",
        date: "Feb 2021 – Oct 2021",
        description:
            "Joined to contribute to brand content through video editing while understanding how visuals and storytelling influence audience engagement.",
        softSkills: [
            "Video Editing",
            "Adobe Premiere Pro",
            "Basic Storytelling",
            "Creativity",
            "Communication",
            "Communication",
            "Communication",
            "Leadership",
            "Collaboration",
        ],
        hardSkills: [
            "Video Editing",
            "Adobe Premiere Pro",
            "Basic Storytelling",
            "Creativity",
            "Communication",
            "Communication",
            "Communication",
            "Leadership",
            "Collaboration",
        ],
    },
    {
        id: "content-production-3",
        role: "Content Production and Storytelling",
        company: "Oben Electric",
        date: "Feb 2021 – Oct 2021",
        description:
            "Joined to contribute to brand content through video editing while understanding how visuals and storytelling influence audience engagement.",
        softSkills: ["Video Editing", "Storytelling", "Communication"],
        hardSkills: ["Adobe Premiere Pro", "Video Editing", "Content Strategy"],
    },
    {
        id: "content-production-4",
        role: "Content Production and Storytelling",
        company: "Oben Electric",
        date: "Feb 2021 – Oct 2021",
        description:
            "Joined to contribute to brand content through video editing while understanding how visuals and storytelling influence audience engagement.",
        softSkills: ["Video Editing", "Storytelling", "Communication"],
        hardSkills: ["Adobe Premiere Pro", "Video Editing", "Content Strategy"],
    },
];

function SkillGroup({ title, skills }) {
    const visibleSkills = skills.slice(0, 7);
    const remaining = skills.length - visibleSkills.length;

    return (
        <div>
            <h4 className="mb-1.5 text-[10px] font-medium text-[#27242e]">
                {title}
            </h4>
            <div className="flex flex-wrap gap-1.5">
                {visibleSkills.map((skill, index) => (
                    <span
                        key={`${skill}-${index}`}
                        className="rounded-full bg-white px-2.5 py-1 text-[10px] leading-[1.4] text-[#24222a]"
                    >
                        {skill}
                    </span>
                ))}
                {remaining > 0 && (
                    <span className="grid min-h-6 min-w-6 place-items-center rounded-full bg-[#aaa4ae] px-1.5 text-[10px] text-white">
                        +{remaining}
                    </span>
                )}
            </div>
        </div>
    );
}

function ExperienceRow({ item, expanded, onToggle }) {
    return (
        <article
            className={`experience-entry ${expanded ? "experience-entry--expanded" : ""}`}
        >
            <div className="grid min-w-0 grid-cols-1 gap-3 px-4 py-5 sm:grid-cols-[124px_minmax(0,1fr)_24px] sm:gap-4 sm:px-[18px] sm:py-5">
                <p className="pt-0.5 text-[9px] leading-4 text-[#77747e]">
                    {item.date}
                </p>
                <div className="min-w-0">
                    <h3 className="max-w-[260px] text-[14px] font-semibold leading-[1.2] tracking-[-.02em] text-black">
                        {item.role}
                    </h3>
                    <p className="mt-1.5 text-[12px] text-[#77747e]">
                        {item.company}
                    </p>
                    {expanded && (
                        <p className="mt-3 max-w-[270px] text-[9px] leading-[1.35] text-[#8c8791] sm:mt-4">
                            {item.description}
                        </p>
                    )}
                </div>
                <button
                    type="button"
                    onClick={onToggle}
                    aria-expanded={expanded}
                    aria-label={`${expanded ? "Collapse" : "Expand"} ${item.role}`}
                    className="absolute right-4 top-4 grid h-6 w-6 place-items-center text-[22px] font-normal leading-none text-black sm:static sm:col-start-4 sm:ml-auto sm:mt-[-2px]"
                >
                    {expanded ? "×" : "+"}
                </button>
            </div>
            {expanded && (
                <div className="space-y-3.5 px-4 pb-5 sm:pl-[158px] sm:pr-[58px] sm:pt-0 sm:pb-5">
                    <SkillGroup title="Soft skills" skills={item.softSkills} />
                    <SkillGroup title="Hard Skills" skills={item.hardSkills} />
                </div>
            )}
        </article>
    );
}

export default function ExperienceSection() {
    const [expandedId, setExpandedId] = useState("content-production-2");

    return (
        <div className="experience-list" aria-label="Work experience">
            {experiences.map((item) => (
                <ExperienceRow
                    key={item.id}
                    item={item}
                    expanded={expandedId === item.id}
                    onToggle={() =>
                        setExpandedId((current) =>
                            current === item.id ? null : item.id,
                        )
                    }
                />
            ))}
        </div>
    );
}
