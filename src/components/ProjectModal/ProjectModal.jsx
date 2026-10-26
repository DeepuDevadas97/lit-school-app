import Icon from "../Icon/Icon";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#17131f]/55 p-4 backdrop-blur-sm"
            onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="project-modal-scroll max-h-[90vh] w-full max-w-[760px] overflow-auto rounded-[24px] bg-white shadow-2xl">
                <div className="relative h-[230px] sm:h-[300px]">
                    <img
                        src={project.image}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 flex h-9 w-9 justify-center items-center rounded-full bg-black/35 !text-[28px] text-white"
                        aria-label="Close details"
                    >
                        ×
                    </button>
                    <div className="absolute bottom-5 left-6 right-6">
                        <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur">
                            {project.client}
                        </span>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                            {project.title}
                        </h2>
                    </div>
                </div>
                <div className="grid gap-8 p-6 sm:grid-cols-[1fr_220px] sm:p-8">
                    <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#8d68d8]">
                            The brief
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#5f5c67]">
                            {project.description} The goal was to make the work
                            useful to its audience while creating a clear point
                            of view that could be tested and improved.
                        </p>
                        <p className="mt-6 text-[10px] font-bold uppercase tracking-[.17em] text-[#8d68d8]">
                            My contribution
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#5f5c67]">
                            Owned {project.role.toLowerCase()}. Worked from
                            early research and concept through production, then
                            reviewed audience response to identify what to
                            improve next.
                        </p>
                        <p className="mt-6 text-[10px] font-bold uppercase tracking-[.17em] text-[#8d68d8]">
                            Skills in action
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.skills.map((s) => (
                                <span
                                    key={s}
                                    className="rounded-full bg-[#f4f2f7] px-3 py-1.5 text-[11px] font-medium text-[#5d5966]"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="min-w-0">
                        <div className="min-w-0 rounded-2xl bg-[#f6f3fb] p-4">
                            <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#8b8498]">
                                Result
                            </p>
                            <p className="mt-2 min-w-0 break-words text-[16px] font-semibold tracking-tight text-[#292431] line-clamp-9">
                                {project.outcome}
                            </p>
                            <p className="text-xs text-[#77717f]">
                                {project.outcomeLabel}
                            </p>
                            <div className="mt-4 border-t border-[#e7e0f0] pt-3 text-[11px] font-medium text-[#63469a]">
                                {project.proof}
                            </div>
                        </div>
                        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[.14em] text-[#96929d]">
                            Project timeline
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-[#57545f]">
                            <Icon name="clock" size={14} />
                            {project.period}
                        </p>
                        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[.14em] text-[#96929d]">
                            My role
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#57545f]">
                            {project.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
