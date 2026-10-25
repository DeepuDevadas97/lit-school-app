import Icon from "../Icon/Icon";
import "./ProjectCard.css";

const accents = {
    violet: "from-[#4c247b] to-[#161128]",
    blue: "from-[#0e4dc6] to-[#173a8d]",
    orange: "from-[#ec783b] to-[#f3b55b]",
    pink: "from-[#a33177] to-[#342060]",
};
export default function ProjectCard({
    project,
    index,
    total,
    studentMode,
    onOpen,
    onToggle,
    onMove,
}) {
    return (
        <article
            className={`group overflow-hidden rounded-[20px] border border-[#ebe9ef] bg-white transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(38,29,58,.1)] ${!project.published ? "opacity-55" : ""}`}
        >
            <button
                onClick={() => onOpen(project)}
                className="block w-full text-left"
            >
                <div
                    className={`relative h-[190px] overflow-hidden bg-gradient-to-br sm:h-[215px] ${accents[project.accent] || accents.violet}`}
                >
                    <img
                        className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.04]"
                        src={project.image}
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-black/35 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur">
                            {project.kind}
                        </span>
                        {project.proof.toLowerCase().includes("verified") && (
                            <span className="flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-[#51349b]">
                                <Icon name="check" size={12} /> LIT verified
                            </span>
                        )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <span className="text-xs font-medium text-white/90">
                            {project.client}
                        </span>
                        {project.featured && (
                            <span className="rounded-full bg-[#e9dcff] px-2.5 py-1 text-[10px] font-bold text-[#572cb0]">
                                FEATURED PROOF
                            </span>
                        )}
                    </div>
                </div>
                <div className="p-4 sm:p-5">
                    <div className="mb-2 flex items-start justify-between gap-3">
                        <h3 className="text-[16px] font-semibold leading-snug tracking-[-.025em] text-[#222127]">
                            {project.title}
                        </h3>
                        <span className="mt-1 shrink-0 text-[#a09da8] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#6c35e8]">
                            <Icon name="arrow" size={17} />
                        </span>
                    </div>
                    <p className="line-clamp-2 text-[13px] leading-[1.65] text-[#777580]">
                        {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-start justify-between gap-3 border-t border-[#f0eef3] pt-3">
                        <div>
                            <p className="text-[12px] font-medium uppercase tracking-[.12em] text-[#9b98a3]">
                                Outcome
                            </p>
                            <p className="mt-0.5 text-sm font-semibold text-[#25232b]">
                                {project.outcome}{" "}
                                <span className="font-normal text-[#777580]">
                                    {project.outcomeLabel}
                                </span>
                            </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#6d5a99]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#8f65db]" />
                            {project.proof}
                        </span>
                    </div>
                </div>
            </button>
            {studentMode && (
                <div className="flex items-center justify-between border-t border-[#eeeaf4] bg-[#fbfaff] px-4 py-2.5">
                    <span className="text-[12px] font-medium text-[#77727f]">
                        {project.published
                            ? "Visible to recruiters"
                            : "Hidden from recruiters"}
                    </span>
                    <div className="flex items-center gap-1">
                        <button
                            disabled={index === 0}
                            onClick={() => onMove(project.id, -1)}
                            title="Move earlier"
                            className="rounded-lg px-2 py-1 text-xs text-[#686474] hover:bg-white disabled:opacity-30"
                        >
                            ↑
                        </button>
                        <button
                            disabled={index === total - 1}
                            onClick={() => onMove(project.id, 1)}
                            title="Move later"
                            className="rounded-lg px-2 py-1 text-xs text-[#686474] hover:bg-white disabled:opacity-30"
                        >
                            ↓
                        </button>
                        <button
                            onClick={() => onToggle(project.id)}
                            className={`rounded-full px-2.5 py-1 !text-[14px] font-semibold ${project.published ? "bg-[#e9f6ee] text-[#237446]" : "bg-[#efedf2] text-[#686474]"}`}
                        >
                            {project.published ? "Published" : "Publish"}
                        </button>
                    </div>
                </div>
            )}
        </article>
    );
}
