import GpsIcon from "../../assets/icons/GpsIcon";
import UserStar from "../../assets/icons/UserStar";
import Icon from "../Icon/Icon";
import "./ProfileRail.css";
import Person1 from "../../assets/images/Person1.png";
import College1 from "../../assets/images/College1.png";
import College2 from "../../assets/images/College2.png";
import EmailIcon from "../../assets/icons/EmailIcon";

export default function ProfileRail({ profile, studentMode, onEdit, achievements = [], onAddAchievement }) {
    const visibleAchievements = studentMode
        ? achievements
        : achievements.filter((achievement) => achievement.published);
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
                    Bengaluru, India
                </div>
                {/* <div className="mt-1 text-sm text-[#696672]">
                    <span className="mr-2 text-[#eb5ac5]">⌖</span>Open to work ·
                    Content roles
                </div> */}
                <div className="mt-4 grid grid-cols-[44px_44px_minmax(0,1fr)] gap-2">
                    <a
                        href="https://linkedin.com"
                        aria-label="LinkedIn profile"
                        title="LinkedIn"
                        className="grid h-11 w-11 place-items-center rounded-full bg-[#0878c9] text-white transition hover:brightness-95"
                    >
                        <span className="text-[21px] font-extrabold leading-none tracking-[-.06em]">
                            in
                        </span>
                    </a>
                    <a
                        href="https://instagram.com"
                        aria-label="Instagram profile"
                        title="Instagram"
                        className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-tr from-[#ffb83f] via-[#f32b76] to-[#773cf0] text-white transition hover:brightness-95"
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
                        href="https://srihithjoshi.work"
                        className="flex h-11 min-w-0 items-center justify-center gap-2 rounded-full border border-[#d9d7dd] bg-white px-3 text-sm text-[#17161d] transition hover:border-[#b5a0dc]"
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
                        className="mt-3 flex h-9 w-full items-center justify-center gap-1.5 rounded-full border border-[#e2d9f3] bg-white text-xs font-semibold text-[#6139ae] hover:bg-[#f8f5ff]"
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
                        <h2 className="text-[12px] font-bold uppercase tracking-[.17em] text-[#ec5bcf]">Achievements</h2>
                        {studentMode && (
                            <button onClick={onAddAchievement} className="rounded-full border border-[#eadff0] px-2.5 py-1 !text-[14px] font-semibold text-[#8a48b4] hover:bg-[#fff8ff]">
                                + Add
                            </button>
                        )}
                    </div>
                    <div className="space-y-3">
                        {visibleAchievements.slice(0, studentMode ? 3 : 2).map((achievement) => (
                            <div key={achievement.id} className="flex items-start gap-2.5 border-b border-dashed border-[#e5e2e8] pb-3 last:border-0 last:pb-0">
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#fff3d2] text-lg text-[#ed9e23]">✹</span>
                                <div className="min-w-0">
                                    <p className="text-[12px] font-medium leading-[1.35] text-[#55515c]">{achievement.title}</p>
                                    <p className="mt-0.5 text-[10px] leading-[1.4] text-[#898590]">{achievement.issuer}</p>
                                </div>
                            </div>
                        ))}
                        {visibleAchievements.length === 0 && <p className="rounded-lg bg-[#f5f4f6] p-3 text-[11px] text-[#898590]">Your achievements will appear here.</p>}
                    </div>
                    {visibleAchievements.length > (studentMode ? 3 : 2) && (
                        <button className="mt-3 !text-[12px] font-medium text-[#5c5962] underline">View all achievements</button>
                    )}
                </div>
                <div className="mt-5 border-t border-[#e9e7ed] pt-4">
                    <h2 className="mb-3 text-[12px] font-bold uppercase tracking-[.17em] text-[#3776ff]">
                        Education
                    </h2>
                    <div className="flex gap-2.5 border-b border-dashed border-gray-300 pb-4 mb-4">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-b border-[#e8e5ec] bg-white text-[10px] font-bold text-[#5c41a0] overflow-hidden">
                            <img
                                src={College1}
                                alt="Jithu"
                                className="w-full h-full"
                            ></img>
                        </span>
                        <div>
                            <p className="text-[14px] font-semibold text-[#4e4b55]">
                                JNTUH College of Engineering
                            </p>
                            <p className="mt-0.5 text-[12px] text-[#86828d]">
                                Graduation · Mechanical Engineering
                            </p>
                            <p className="text-[12px] text-[#98949e]">
                                Jun 2020 — Jun 2024
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2.5 pb-4">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#e8e5ec] bg-white text-[10px] font-bold text-[#5c41a0] overflow-hidden">
                            <img
                                src={College2}
                                alt="Vidya"
                                className="w-full h-full"
                            ></img>
                        </span>
                        <div>
                            <p className="text-[14px] font-semibold text-[#4e4b55]">
                                Vidya Niketan
                            </p>
                            <p className="mt-0.5 text-[12px] text-[#86828d]">
                                ISC Commerce
                            </p>
                            <p className="text-[12px] text-[#98949e]">
                                Jun 2018 – Jun 2020
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
    );
}
