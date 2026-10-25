import "./SkillsSection.css";

export default function SkillsSection({
    studentMode = false,
    groups = [],
    onAddSkills,
}) {
    return (
        <div>
            {studentMode && (
                <div className="my-5 flex min-h-[280px] flex-col items-center justify-center rounded-[18px] bg-[#e0f5ef] px-5 py-5 text-center sm:min-h-[238px]">
                    <svg
                        className="mb-3 h-8 w-8 text-[#00a982]"
                        viewBox="0 0 40 40"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="m20 2 14 5v10c0 9.2-5.6 15.8-14 21-8.4-5.2-14-11.8-14-21V7l14-5Z"
                            fill="currentColor"
                        />
                        <path
                            d="m20 9 2.5 5.5 6 .6-4.5 4 1.3 5.9-5.3-3-5.3 3 1.3-5.9-4.5-4 6-.6L20 9Z"
                            fill="white"
                        />
                        <path
                            d="m30.5 2 .8 2.1 2.2.2-1.7 1.4.5 2.2-1.8-1.1-1.8 1.1.5-2.2-1.7-1.4 2.2-.2.8-2.1Z"
                            fill="#0755ff"
                        />
                    </svg>
                    <h3 className="max-w-[440px] text-[21px] font-extrabold uppercase leading-[1.16] tracking-[-.025em] text-[#00a982] sm:text-[21px]">
                        Your skill bank will reflect
                        <br className="hidden sm:block" /> here
                    </h3>
                    <p className="mt-4 max-w-[500px] text-[12px] leading-[1.55] text-[#17161d]">
                        Skills pertaining to brand challenges for which you have
                        been scored will reflect here along with the specific
                        skill sets you choose to add.
                    </p>
                    <button
                        type="button"
                        onClick={onAddSkills}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#d7e5e0] bg-white px-3.5 py-2 text-[11px] font-medium text-[#29252f] transition hover:border-[#00a982] hover:text-[#008c6d]"
                    >
                        <span className="grid h-4 w-4 place-items-center rounded-full border border-[#00a982] text-[12px] leading-none text-[#00a982]">
                            +
                        </span>
                        Add Skills
                    </button>
                </div>
            )}

            <div className="space-y-7 py-1 sm:space-y-8">
                {groups.map(({ category, skills }) => (
                    <section key={category}>
                        <h3 className="mb-3 text-[14px] font-medium text-[#393642]">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={`${category}-${skill}-${index}`}
                                    className="rounded-md bg-[#f2f2f3] px-3 py-1.5 text-[12px] font-normal leading-[1.4] text-[#34313b] sm:text-[11px]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
