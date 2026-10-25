import { useState } from "react";
import Header from "./components/Header/Header";
import ProfileRail from "./components/ProfileRail/ProfileRail";
import WorkSection from "./components/WorkSection/WorkSection";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import AddProjectModal from "./components/AddProjectModal/AddProjectModal";
import ProfileEditor from "./components/ProfileEditor/ProfileEditor";
import Footer from "./components/Footer/Footer";
import Icon from "./components/Icon/Icon";
import { initialProfile, initialProjects } from "./data/profile";

export default function App() {
    const [studentMode, setStudentMode] = useState(false);
    const [tab, setTab] = useState("Projects");
    const [filter, setFilter] = useState("All work");
    const [projects, setProjects] = useState(initialProjects);
    const [profile, setProfile] = useState(initialProfile);
    const [activeProject, setActiveProject] = useState(null);
    const [addOpen, setAddOpen] = useState(false);
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
    const addProject = (data) => {
        setProjects((items) => [
            {
                id: Date.now(),
                title: data.title,
                client: "Independent project",
                kind: "Personal project",
                period: "Just added",
                role: "Project lead",
                description: data.description,
                outcome: data.outcome || "In progress",
                outcomeLabel: data.outcome
                    ? "measurable impact"
                    : "building now",
                proof: "Student added",
                accent: "violet",
                image: "https://images.unsplash.com/photo-1455390582262-044c21d372e7?auto=format&fit=crop&w=1000&q=85",
                published: false,
                skills: ["Add your skills"],
            },
            ...items,
        ]);
        setFilter("All work");
        setAddOpen(false);
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
            <main className="mx-auto max-w-[1320px] px-4 pb-16 pt-5 sm:px-6 lg:px-10 lg:pt-6">
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
