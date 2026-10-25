import { useState } from "react";
import Header from "./components/Header/Header";
import ProfileRail from "./components/ProfileRail/ProfileRail";
import WorkSection from "./components/WorkSection/WorkSection";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import AddProjectModal from "./components/AddProjectModal/AddProjectModal";
import AddExperienceModal from "./components/AddExperienceModal/AddExperienceModal";
import AddSkillsModal from "./components/AddSkillsModal/AddSkillsModal";
import ProfileEditor from "./components/ProfileEditor/ProfileEditor";
import Footer from "./components/Footer/Footer";
import Icon from "./components/Icon/Icon";
import { initialExperiences, initialProfile, initialProjects, initialSkillGroups } from "./data/profile";

export default function App() {
    const [studentMode, setStudentMode] = useState(false);
    const [tab, setTab] = useState("Projects");
    const [filter, setFilter] = useState("All work");
    const [projects, setProjects] = useState(initialProjects);
    const [experiences, setExperiences] = useState(initialExperiences);
    const [skillGroups, setSkillGroups] = useState(() =>
        initialSkillGroups.map((group) => ({
            ...group,
            skills: group.skills.map((name) => ({ name, level: "expert" })),
        })),
    );
    const [profile, setProfile] = useState(initialProfile);
    const [activeProject, setActiveProject] = useState(null);
    const [addOpen, setAddOpen] = useState(false);
    const [addExperienceOpen, setAddExperienceOpen] = useState(false);
    const [addSkillsOpen, setAddSkillsOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const togglePublish = (id) =>
        setProjects((items) =>
            items.map((project) =>
                project.id === id
                    ? { ...project, published: !project.published }
                    : project,
            ),
        );
    const moveProject = (id, direction) =>
        setProjects((items) => {
            const index = items.findIndex((project) => project.id === id);
            const next = index + direction;
            if (next < 0 || next >= items.length) return items;
            const reordered = [...items];
            [reordered[index], reordered[next]] = [
                reordered[next],
                reordered[index],
            ];
            return reordered;
        });
    const addProject = (data, publishLive) => {
        setProjects((items) => [
            {
                id: Date.now(),
                title: data.title,
                client: data.organization || "Independent project",
                kind: "Personal project",
                period:
                    data.startDate || data.endDate
                        ? `${data.startDate || "Start"} — ${data.endDate || "Present"}`
                        : "Just added",
                role: "Project lead",
                description: data.description,
                breakdown: data.breakdown,
                outcome: data.outcome || "In progress",
                outcomeLabel: data.outcome
                    ? "measurable impact"
                    : "building now",
                proof: data.attachments.length
                    ? "Supporting evidence added"
                    : "Student added",
                accent: "violet",
                image: data.bannerImage,
                published: publishLive,
                skills: data.skills.length ? data.skills : ["Add your skills"],
                organization: data.organization,
                attachments: data.attachments,
                briefItems: data.briefItems,
                impactItems: data.impactItems,
                tools: data.tools,
            },
            ...items,
        ]);
        setFilter("All work");
        setAddOpen(false);
    };
    const addExperience = (data, publishLive) => {
        setExperiences((items) => [
            { ...data, published: publishLive },
            ...items,
        ]);
        setAddExperienceOpen(false);
    };
    const addSkills = (category, newSkills, level) => {
        const newSkillItems = newSkills.map((name) => ({ name, level }));
        setSkillGroups((groups) => {
            const existing = groups.find((group) => group.category === category);
            if (!existing) return [...groups, { category, skills: newSkillItems }];
            return groups.map((group) =>
                group.category !== category
                    ? group
                    : {
                          ...group,
                          skills: [
                              ...group.skills.map((skill) =>
                                  typeof skill === "string"
                                      ? { name: skill, level: "expert" }
                                      : skill,
                              ),
                              ...newSkillItems.filter(
                                  (newSkill) =>
                                      !group.skills.some(
                                          (oldSkill) =>
                                              (typeof oldSkill === "string" ? oldSkill : oldSkill.name).toLowerCase() === newSkill.name.toLowerCase(),
                                      ),
                              ),
                          ],
                      },
            );
        });
        setAddSkillsOpen(false);
    };
    const shareProfile = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
        } catch {
            /* Clipboard may be unavailable in a local preview. */
        }
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
    };

    return (
        <div id="top" className="min-h-screen bg-white text-[#25232b]">
            <Header studentMode={studentMode} setStudentMode={setStudentMode} />
            <main className="mx-auto max-w-[1320px] px-4 pb-10 pt-5 sm:px-6 lg:px-10 lg:pt-6">
                <div className="mb-5 flex min-w-0 items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2 overflow-hidden text-[12px] text-[#898691] font-semibold">
                        <span>Talent</span>
                        <span className="text-[#c7c4cd]">/</span>
                        <span className="truncate text-[#47444e]">
                            {profile.name}
                        </span>
                    </div>
                    <button
                        onClick={shareProfile}
                        className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#e6e3ea] bg-white px-3 py-2 !text-[14px] font-semibold text-[#5b5762] hover:border-[#c9b5ef] hover:text-[#673fc1]"
                    >
                        <Icon name={copied ? "check" : "link"} size={14} />
                        {copied ? "Link copied" : "Share profile"}
                    </button>
                </div>
                <div className="grid items-start gap-7 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)] xl:gap-8">
                    <ProfileRail
                        profile={profile}
                        studentMode={studentMode}
                        onEdit={() => setEditOpen(true)}
                    />
                    <WorkSection
                        projects={projects}
                        studentMode={studentMode}
                        filter={filter}
                        setFilter={setFilter}
                        tab={tab}
                        setTab={setTab}
                        onAdd={() => setAddOpen(true)}
                        onOpen={setActiveProject}
                        onToggle={togglePublish}
                        onMove={moveProject}
                        experiences={experiences}
                        onAddExperience={() => setAddExperienceOpen(true)}
                        skillGroups={skillGroups}
                        onAddSkills={() => setAddSkillsOpen(true)}
                    />
                </div>
                <Footer />
            </main>
            <ProjectModal
                project={activeProject}
                onClose={() => setActiveProject(null)}
            />
            {addOpen && (
                <AddProjectModal
                    onClose={() => setAddOpen(false)}
                    onAdd={addProject}
                />
            )}
            {addExperienceOpen && (
                <AddExperienceModal
                    onClose={() => setAddExperienceOpen(false)}
                    onSave={addExperience}
                />
            )}
            {addSkillsOpen && (
                <AddSkillsModal
                    onClose={() => setAddSkillsOpen(false)}
                    onSave={addSkills}
                />
            )}
            {editOpen && (
                <ProfileEditor
                    profile={profile}
                    onClose={() => setEditOpen(false)}
                    onSave={(updated) => {
                        setProfile(updated);
                        setEditOpen(false);
                    }}
                />
            )}
        </div>
    );
}
