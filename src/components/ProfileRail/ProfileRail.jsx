import GpsIcon from "../../assets/icons/GpsIcon";
import UserStar from "../../assets/icons/UserStar";
import Icon from "../Icon/Icon";
import "./ProfileRail.css";
import Person1 from "../../assets/images/person1.png";
import College1 from "../../assets/images/College1.png";
import College2 from "../../assets/images/College2.png";
import EmailIcon from "../../assets/icons/EmailIcon";
import LitLogo from "../../assets/images/LIT-LOGO.png";

export default function ProfileRail({
    profile,
    studentMode,
    onEdit,
    achievements = [],
    onAddAchievement,
    education = [],
    onAddEducation,
}) {
    const visibleAchievements = studentMode
        ? achievements
        : achievements.filter((achievement) => achievement.published);
    const visibleEducation = studentMode
        ? education
        : education.filter((item) => item.published);
    return (
        <aside className="space-y-5 lg:sticky lg:top-5">
            <section
                id="about"
                className="rounded-2xl bg-white lg:bg-transparent"
            >
                <div className="flex items-center gap-3 lg:block lg:mt-6">
                    <img
                        className="h-[76px] w-[76px] shrink-0 rounded-full border-4 border-white object-cover object-top shadow-[0_3px_14px_rgba(0,0,0,.14)] lg:-mt-10 lg:mb-4 lg:h-[96px] lg:w-[96px]"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85"
                        alt={profile.name}
                    />
                    <div className="min-w-0">
                        <h1 className="text-[22px] font-semibold tracking-[-.04em] text-[#17161d]">
                            {profile.name}
                        </h1>
                        <div className="mt-0.5 sm:mt-3 text-sm leading-5 text-[#777580] flex items-center gap-1.5">
                            <UserStar />
                            {profile.headline}
                        </div>
                    </div>
                </div>
                <div className="mt-4 sm:mt-2 text-sm text-[#696672] flex items-center gap-1.5">
                    <GpsIcon />
                    {profile.location || "Add your location"}
                </div>
                {profile.openToWork && (
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#e9f7f1] px-2.5 py-1 text-[11px] font-semibold text-[#16835d]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#16a36f]" />
                        Open to work
                    </div>
                )}
                <div className="mt-4 grid grid-cols-[44px_44px_minmax(0,1fr)] gap-2">
                    <a
                        href={profile.linkedin || undefined}
                        aria-label="LinkedIn profile"
                        title="LinkedIn"
                        className={`grid h-11 w-11 place-items-center rounded-full bg-[#0878c9] text-white transition hover:brightness-95 ${profile.linkedin ? "" : "pointer-events-none opacity-40"}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-[21px] font-extrabold leading-none tracking-[-.06em]">
                            in
                        </span>
                    </a>
                    <a
                        href={profile.instagram || undefined}
                        aria-label="Instagram profile"
                        title="Instagram"
                        className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-tr from-[#ffb83f] via-[#f32b76] to-[#773cf0] text-white transition hover:brightness-95 ${profile.instagram ? "" : "pointer-events-none opacity-40"}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                        >
                            <rect x="3" y="3" width="18" height="18" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle
                                cx="18"
                                cy="6"
                                r="1"
                                fill="currentColor"
                                stroke="none"
                            />
                        </svg>
                    </a>
                    <a
                        href={profile.website || undefined}
                        target={profile.website ? "_blank" : undefined}
                        rel={profile.website ? "noreferrer" : undefined}
                        className={`flex h-11 min-w-0 items-center justify-center gap-2 rounded-full border border-[#d9d7dd] bg-white px-3 text-sm text-[#17161d] transition hover:border-[#b5a0dc] ${profile.website ? "" : "pointer-events-none opacity-40"}`}
                    >
                        <Icon
                            name="globe"
                            size={18}
                            className="text-[#7028f5]"
                        />{" "}
                        Website
                    </a>
                    <a
                        href="mailto:srihith@litstudent.in"
                        className="col-span-3 flex h-11 items-center justify-center gap-2 rounded-full border border-[#d9d7dd] bg-white px-3 text-sm font-medium text-[#17161d] transition hover:border-[#b5a0dc]"
                    >
                        <EmailIcon /> Drop a Message!
                    </a>
                </div>
                {studentMode && (
                    <button
                        onClick={onEdit}
                        className="mt-2 flex h-11 w-full items-center justify-center gap-1.5 rounded-full border border-[#e2d9f3] bg-white text-xs font-semibold text-[#6139ae] hover:bg-[#f8f5ff]"
                    >
                        <Icon name="edit" size={14} /> Edit profile
                    </button>
                )}
                <div className="mt-5 hidden border-t border-[#e9e7ed] pt-4 lg:block">
                    <p className="text-[12px] font-bold uppercase tracking-[.17em] text-[#8d53ff]">
                        About Srihith
                    </p>
                    <p className="mt-2 text-sm leading-[1.7] text-[#716e79]">
                        {profile.bio}
                    </p>
                </div>
            </section>
            <section className="rounded-2xl border border-[#ebe9ef] bg-white p-4 lg:rounded-none lg:border-0 lg:border-t lg:bg-transparent lg:px-0 lg:pt-4">
                <h2 className="mb-3 text-[12px] font-bold uppercase tracking-[.17em] text-[#8d53ff]">
                    Recommendations
                </h2>
                <div className="rounded-xl bg-[#f5f4f6] p-3">
                    <p className="text-[12px] leading-[1.55] text-[#605d67]">
                        “Srihith brings clarity to complex ideas, takes
                        ownership from start to finish, and makes work that
                        connects with people.”
                    </p>
                    <div className="mt-3 border-t border-[#e4e2e7] pt-2.5">
                        <div className="text-[12px] font-bold text-[#48454f] flex items-center gap-1.5">
                            <img
                                src={Person1}
                                alt="CHIRAG"
                                className="w-6 h-6 rounded-full"
                            ></img>
                            CHIRAG KUSHWAHA
                        </div>
                        <p className="mt-1 text-[12px] text-[#85818c]">
                            Creative Director · Industry Evaluator
                        </p>
                        <span className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-[#6b48a9]">
                            <Icon name="check" size={11} /> Storytelling
                            endorsed
                        </span>
                    </div>
                </div>
                <div className="mt-5 border-t border-[#e9e7ed] pt-4">
                    <div className="mb-3 flex items-center justify-between gap-2">
                        <h2 className="text-[12px] font-bold uppercase tracking-[.17em] text-[#ec5bcf]">
                            Achievements
                        </h2>
                        {studentMode && (
                            <button
                                onClick={onAddAchievement}
                                className="rounded-full border border-[#eadff0] px-2.5 py-1 !text-[14px] font-semibold text-[#8a48b4] hover:bg-[#fff8ff]"
                            >
                                + Add
                            </button>
                        )}
                    </div>
                    <div className="space-y-3">
                        {visibleAchievements
                            .slice(0, studentMode ? 3 : 2)
                            .map((achievement) => (
                                <div
                                    key={achievement.id}
                                    className="flex items-start gap-2.5 border-b border-dashed border-[#e5e2e8] pb-3 last:border-0 last:pb-0"
                                >
                                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#fff3d2] text-lg text-[#ed9e23]">
                                        ✹
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-[12px] font-medium leading-[1.35] text-[#55515c]">
                                            {achievement.title}
                                        </p>
                                        <p className="mt-0.5 text-[10px] leading-[1.4] text-[#898590]">
                                            {achievement.issuer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        {visibleAchievements.length === 0 && (
                            <p className="rounded-lg bg-[#f5f4f6] p-3 text-[11px] text-[#898590]">
                                Your achievements will appear here.
                            </p>
                        )}
                    </div>
                    {visibleAchievements.length > (studentMode ? 3 : 2) && (
                        <button className="mt-3 !text-[12px] font-medium text-[#5c5962] underline">
                            View all achievements
                        </button>
                    )}
                </div>
                <div className="mt-5 border-t border-[#e9e7ed] pt-4">
                    <div className="mb-3 flex items-center justify-between gap-2">
                        <h2 className="text-[12px] font-bold uppercase tracking-[.17em] text-[#3776ff]">Education</h2>
                        {studentMode && (
                            <button onClick={onAddEducation} className="rounded-full border border-[#dfe7ff] px-2.5 py-1 !text-[14px] font-semibold text-[#3776ff] hover:bg-[#f5f8ff]">+ Add</button>
                        )}
                    </div>
                    <div className="space-y-3">
                        {visibleEducation.slice(0, studentMode ? 4 : 3).map((item) => (
                            <div key={item.id} className="flex gap-2.5 border-b border-dashed border-gray-300 pb-3 last:border-0 last:pb-0">
                                <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full border border-[#e8e5ec] bg-white p-1">
                                    {item.logo === "lit" ? (
                                        <img src={LitLogo} alt="LIT School" className="h-full w-full object-contain" />
                                    ) : item.logo === "college" ? (
                                        <img src={College1} alt="JNTUH" className="h-full w-full object-cover" />
                                    ) : item.logo === "vidya" ? (
                                        <img src={College2} alt="Vidya Niketan" className="h-full w-full object-contain" />
                                    ) : (
                                        <span className="text-[9px] font-bold text-[#5c41a0]">{item.institution.slice(0, 2).toUpperCase()}</span>
                                    )}
                                </span>
                                <div className="min-w-0">
                                    <p className="text-[12px] font-semibold leading-[1.35] text-[#4e4b55]">{item.institution}</p>
                                    <p className="mt-0.5 text-[10px] leading-[1.4] text-[#86828d]">{item.degree}{item.program && item.program !== item.degree ? ` · ${item.program}` : ""}</p>
                                    <p className="text-[10px] text-[#98949e]">{item.date}</p>
                                </div>
                            </div>
                        ))}
                        {visibleEducation.length === 0 && <p className="rounded-lg bg-[#f5f4f6] p-3 text-[11px] text-[#898590]">Your education will appear here.</p>}
                    </div>
                </div>
            </section>
        </aside>
    );
}
