import "./SectionHeading.css";

export default function SectionHeading({ eyebrow, title, subtitle, action }) {
    return (
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
                <p className="mb-1 text-[12px] font-bold uppercase tracking-[.19em] text-[#8b65dc]">
                    {eyebrow}
                </p>
                <h2 className="text-[28px] font-semibold tracking-[-.045em] text-[#201f26]">
                    {title}
                </h2>
                {subtitle && (
                    <p className="mt-1 text-sm text-[#84828c]">{subtitle}</p>
                )}
            </div>
            {action}
        </div>
    );
}
