import { useState } from "react";
import "./ExperienceSection.css";

const mockExperiences = [
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
            className={`experience-entry my-1.5 ${expanded ? "experience-entry--expanded" : ""}`}
        >
            <div className="grid min-w-0 grid-cols-1 gap-3 px-4 py-5 sm:grid-cols-[124px_minmax(0,1fr)_24px] sm:gap-4 sm:px-[18px] sm:py-5">
                <p className="pt-0.5 text-[11px] font-medium leading-4 text-[#77747e]">
                    {item.date}
                </p>
                <div className="min-w-0">
                    <h3 className="max-w-[260px] text-[14px] font-semibold leading-[1.2] tracking-[-.02em] text-black">
                        {item.role}
                    </h3>
                    <p className="mt-1.5 text-[12px] text-[#77747e]">
                        {item.company}
                    </p>
                </div>
                <button
                    type="button"
                    onClick={onToggle}
                    aria-expanded={expanded}
                    aria-controls={`experience-details-${item.id}`}
                    aria-label={`${expanded ? "Collapse" : "Expand"} ${item.role}`}
                    className="absolute right-4 top-[15px] sm::top-0 grid h-6 w-6 place-items-center !text-[20px] font-normal leading-none text-black sm:static sm:col-start-4 sm:ml-auto sm:mt-[-2px]"
                >
                    {expanded ? "×" : "+"}
                </button>
            </div>
            <div
                id={`experience-details-${item.id}`}
                className={`experience-details ${expanded ? "experience-details--open" : ""}`}
                aria-hidden={!expanded}
            >
                <div className="experience-details-inner space-y-3.5 px-4 sm:pl-[158px] sm:pr-[58px]">
                    <p className="max-w-[440px] text-[12px] leading-[1.35] text-[#8c8791]">
                        {item.description}
                    </p>
                    <SkillGroup title="Soft skills" skills={item.softSkills} />
                    <SkillGroup title="Hard Skills" skills={item.hardSkills} />
                </div>
            </div>
        </article>
    );
}

export default function ExperienceSection({ experiences = mockExperiences, studentMode = false, onAdd }) {
    const [expandedId, setExpandedId] = useState("content-production-1");
    const visibleExperiences = studentMode
        ? experiences
        : experiences.filter((item) => item.published !== false);

    return (
        <div className="experience-list" aria-label="Work experience">
             {studentMode && (
                <div className="my-5 flex min-h-[186px] flex-col items-center justify-center rounded-[16px] bg-[#dfe8ff] px-5 py-7 text-center sm:min-h-[238px]">
                    <svg className="mb-3 h-8 w-8 text-[#0755ff]" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                        <path d="m16 2 11 4v8c0 7.2-4.4 12.4-11 16-6.6-3.6-11-8.8-11-16V6l11-4Z" fill="currentColor" />
                        <path d="m16 7 2.2 5 5.4.5-4.1 3.6 1.2 5.3-4.7-2.7-4.7 2.7 1.2-5.3-4.1-3.6 5.4-.5L16 7Z" fill="white" />
                    </svg>
                    <h3 className="text-[18px] font-extrabold uppercase leading-[1.15] tracking-[-.02em] text-[#0755ff] sm:text-[21px]">
                        Showcase your work<br /> experience
                    </h3>
                    <p className="mt-2 text-[11px] leading-[1.5] text-[#30283a]">
                        List your past industry experiences (outside of your curriculum)
                    </p>
                    <button
                        type="button"
                        onClick={onAdd}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#d7dff0] bg-white px-3.5 py-1.5 text-[10px] font-medium text-[#29252f] transition hover:border-[#0755ff] hover:text-[#0755ff]"
                    >
                        <span className="grid h-4 w-4 place-items-center rounded-full border border-[#0755ff] text-[12px] leading-none text-[#0755ff]">+</span>
                        Add an Experience
                    </button>
                </div>
            )}
            {visibleExperiences.map((item) => (
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
