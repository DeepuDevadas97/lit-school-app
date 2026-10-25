import "./LearningBadges.css";

const badges = [
    ["SMM", "#10ad77"],
    ["CA", "#ffe24a"],
    ["BB", "#7827ed"],
    ["RR", "#1173ef"],
    ["WW", "#ff5b13"],
    ["SST", "#e643c0"],
];
export default function LearningBadges() {
    return (
        <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
                {badges.map(([label, color]) => (
                    <span
                        key={label}
                        className="grid h-12 w-12 place-items-center rounded-[12px] text-[14px] font-extrabold text-white shadow-sm"
                        style={{
                            backgroundColor: color,
                            clipPath:
                                "polygon(50% 0%,92% 23%,92% 77%,50% 100%,8% 77%,8% 23%)",
                        }}
                    >
                        {label}
                    </span>
                ))}
            </div>
            <span className="hidden text-[14px] font-medium text-[#8a8690] sm:inline">
                6 learning epics earned
            </span>
        </div>
    );
}
