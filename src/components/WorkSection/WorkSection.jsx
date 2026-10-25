import Icon from "../Icon/Icon";
import SectionHeading from "../SectionHeading/SectionHeading";
import LearningBadges from "../LearningBadges/LearningBadges";
import ProjectCard from "../ProjectCard/ProjectCard";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import SkillsSection from "../SkillsSection/SkillsSection";
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
                    <h2 className="text-[24px] sm:text-[28px] font-semibold tracking-[-.045em] text-[#201f26]">
                        Work that shows how I think
                    </h2>
                    <p className="mt-1 text-sm text-[#84828c]">
                        A few projects that make my strengths easier to see.
                    </p>
                </div>
                {studentMode && (
                    <button
                        onClick={onAdd}
                        className="flex items-center gap-1.5 rounded-full bg-[#201b2c] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#3d3152]"
                    >
                        <Icon name="plus" size={15} /> Add proof
                    </button>
                )}
            </div>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-x-4 gap-y-2 border-b border-[#e9e7ed]">
                <div className="flex flex-wrap gap-x-5">
                    {["Projects", "Experience", "Skills"].map((item) => (
                        <button
                            key={item}
                            onClick={() => setTab(item)}
                            className={`relative whitespace-nowrap pb-3 text-xs !font-medium transition ${tab === item ? "text-[#27242e]" : "text-[#9996a0] hover:text-[#5b5763]"}`}
                        >
                            {item}
                            {tab === item && (
                                <span className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-[#27242e]" />
                            )}
                        </button>
                    ))}
                </div>
                {tab === "Projects" && (
                    <select
                        value={filter}
                        onChange={(event) => setFilter(event.target.value)}
                        className="mb-2 ml-auto max-w-full rounded-lg border border-[#e8e5ec] bg-white px-2.5 py-1.5 text-[10px] text-[#625e69] outline-none"
                    >
                        {projectFilters.map((item) => (
                            <option key={item}>{item}</option>
                        ))}
                    </select>
                )}
            </div>
            <div className="pt-5">
                {tab === "Projects" && (
                    <>
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-[11px] text-[#85818d]">
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
                        {visibleProjects.length ? (
                            <div className="grid gap-4 sm:grid-cols-2">
                                {visibleProjects.map((project, index) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        index={index}
                                        total={visibleProjects.length}
                                        studentMode={studentMode}
                                        onOpen={onOpen}
                                        onToggle={onToggle}
                                        onMove={onMove}
                                    />
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
                {tab === "Experience" && <ExperienceSection />}
                {tab === "Skills" && <SkillsSection />}
            </div>
        </section>
    );
}
