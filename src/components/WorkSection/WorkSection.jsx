import LearningBadges from "../LearningBadges/LearningBadges";
import ProjectCard from "../ProjectCard/ProjectCard";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import ProjectIcon from "../../assets/icons/ProjectIcon";
import ExperienceIcon from "../../assets/icons/Experience";
import SkillsIcon from "../../assets/icons/SkillsIcon";
import { projectFilters } from "../../data/profile";
import "./WorkSection.css";

export default function WorkSection({
    projects,
    studentMode,
    filter,
    setFilter,
    tab,
    setTab,
    onAdd,
    onOpen,
    onToggle,
    onMove,
    experiences,
    onAddExperience,
    skillGroups,
    onAddSkills,
}) {
    const visibleProjects = projects.filter(
        (project) =>
            (studentMode || project.published) &&
            (filter === "All work" || project.kind === filter),
    );
    return (
        <section id="work" className="min-w-0">
            <div className="mb-8">
                <LearningBadges />
            </div>
            <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                    <p className="mb-1 text-[12px] font-bold uppercase tracking-[.19em] text-[#8b65dc]">
                        Proof, not promises
                    </p>
                    <h2 className="text-[24px] sm:text-[28px] font-semibold tracking-[-.045em] text-[#201f26] leading-8">
                       What I've built and what I've learned
                    </h2>
                    <p className="mt-1.5 text-sm text-[#84828c]">
                        A look at my work, experience, and technical expertise.
                    </p>
                </div>
            </div>
            <div className="sticky top-0 z-30 mt-7 flex flex-wrap items-end justify-between gap-x-4 gap-y-2 border-b border-[#e9e7ed] bg-white pt-2">
                <div className="flex flex-wrap gap-x-5">
                    {[
                        { label: "Projects", Icon: ProjectIcon },
                        { label: "Experience", Icon: ExperienceIcon },
                        { label: "Skills", Icon: SkillsIcon },
                    ].map(({ label, Icon: TabIcon }) => (
                        <button
                            key={label}
                            onClick={() => setTab(label)}
                            className={`relative flex items-center gap-2 whitespace-nowrap pb-3 text-xs !font-medium transition ${tab === label ? "text-[#27242e]" : "text-[#9996a0] hover:text-[#5b5763]"}`}
                        >
                            <span className="[&_svg]:h-4 [&_svg]:w-4"><TabIcon /></span>
                            {label}
                            {tab === label && (
                                <span className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-[#27242e]" />
                            )}
                        </button>
                    ))}
                </div>
                <select
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)}
                    aria-label="Filter projects"
                    aria-hidden={tab !== "Projects"}
                    tabIndex={tab === "Projects" ? 0 : -1}
                    disabled={tab !== "Projects"}
                    className={`mb-2 ml-auto max-w-full rounded-lg border border-[#e8e5ec] bg-white px-2.5 py-1.5 text-[10px] text-[#625e69] outline-none max-sm:hidden ${tab !== "Projects" ? "invisible pointer-events-none" : ""}`}
                >
                    {projectFilters.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div className="pt-5">
                {tab === "Projects" && (
                    <>
                      <select
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)}
                    aria-label="Filter projects"
                    aria-hidden={tab !== "Projects"}
                    tabIndex={tab === "Projects" ? 0 : -1}
                    disabled={tab !== "Projects"}
                    className={`mb-5 ml-auto max-w-full rounded-lg border border-[#e8e5ec] bg-white px-2.5 py-1.5 text-[10px] text-[#625e69] outline-none sm:hidden ${tab !== "Projects" ? "invisible pointer-events-none" : ""}`}
                >
                    {projectFilters.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-[12px] text-[#85818d]">
                            <span className="min-w-0">
                                {visibleProjects.length} selected projects{" "}
                                <span className="mx-1 text-[#cac7d0]">·</span>{" "}
                                newest and strongest first
                            </span>
                            <button
                                className="shrink-0 font-semibold text-[#6d4ab0]"
                                onClick={() => setFilter("All work")}
                            >
                                Clear filters
                            </button>
                        </div>
                         {studentMode && (
                            <div className="my-5 flex min-h-[186px] flex-col items-center justify-center rounded-[16px] bg-[#f1dcff] px-5 py-7 text-center sm:min-h-[205px]">
                                <svg
                                    className="mb-3 h-8 w-8 text-[#8700f5]"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="m16 2 11 4v8c0 7.2-4.4 12.4-11 16-6.6-3.6-11-8.8-11-16V6l11-4Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="m16 7 2.2 5 5.4.5-4.1 3.6 1.2 5.3-4.7-2.7-4.7 2.7 1.2-5.3-4.1-3.6 5.4-.5L16 7Z"
                                        fill="white"
                                    />
                                </svg>
                                <h3 className="max-w-[390px] text-[18px] font-extrabold uppercase leading-[1.15] tracking-[-.02em] text-[#8500f5] sm:text-[21px] !capitalize">
                                    All your projects will
                                    <br className="hidden sm:block" /> reflect
                                    here
                                </h3>
                                <p className="mt-2 max-w-[480px] text-[12px] leading-[1.5] text-[#30283a]">
                                    All brand challenges for which you have been
                                    scored will reflect here along with any
                                    additional projects you may choose to add.
                                </p>
                                <button
                                    onClick={onAdd}
                                    className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#ded9e5] bg-white px-3.5 py-1.5 text-[10px] font-medium text-[#29252f] transition hover:border-[#9d56e9] hover:text-[#7d00e8]"
                                >
                                    <span className="grid h-4 w-4 place-items-center rounded-full border border-[#9b36f4] text-[12px] leading-none text-[#8c1be8]">
                                        +
                                    </span>
                                    Create New Project
                                </button>
                            </div>
                        )}
                        {visibleProjects.length ? (
                            <div className="grid gap-4 sm:grid-cols-2">
                                {visibleProjects.map((project, index) => (
                                    <ScrollReveal key={project.id} delay={Math.min(index * 70, 280)}>
                                        <ProjectCard
                                            project={project}
                                            index={index}
                                            total={visibleProjects.length}
                                            studentMode={studentMode}
                                            onOpen={onOpen}
                                            onToggle={onToggle}
                                            onMove={onMove}
                                        />
                                    </ScrollReveal>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-2xl border border-dashed border-[#ddd8e6] bg-white py-16 text-center">
                                <p className="text-sm font-semibold">
                                    No work in this view yet
                                </p>
                                <button
                                    onClick={() => setFilter("All work")}
                                    className="mt-2 text-xs font-semibold text-[#6d4ab0]"
                                >
                                    See all work
                                </button>
                            </div>
                        )}
                    </>
                )}
                {tab === "Experience" && (
                    <ExperienceSection
                        experiences={experiences}
                        studentMode={studentMode}
                        onAdd={onAddExperience}
                    />
                )}
                {tab === "Skills" && (
                    <SkillsSection
                        studentMode={studentMode}
                        groups={skillGroups}
                        onAddSkills={onAddSkills}
                    />
                )}
            </div>
        </section>
    );
}
