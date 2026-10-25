import GpsIcon from "../../assets/icons/GpsIcon";
import UserStar from "../../assets/icons/UserStar";
import Icon from "../Icon/Icon";
import "./ProfileRail.css";

export default function ProfileRail({ profile, studentMode, onEdit }) {
    return (
        <aside className="space-y-5 lg:sticky lg:top-5">
            <section
                id="about"
                className="rounded-2xl bg-white lg:bg-transparent"
            >
                <div className="flex items-center gap-3 lg:block lg:mt-6">
                    <img
                        className="h-[76px] w-[76px] shrink-0 rounded-full border-4 border-white object-cover shadow-[0_3px_14px_rgba(0,0,0,.14)] lg:-mt-10 lg:mb-4 lg:h-[96px] lg:w-[96px]"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85"
                        alt={profile.name}
                    />
                    <div className="min-w-0">
                        <h1 className="text-[22px] font-semibold tracking-[-.04em] text-[#17161d]">
                            {profile.name}
                        </h1>
                        <div className="mt-0.5 sm:mt-3 text-sm leading-5 text-[#777580] flex items-center gap-1.5">
                            <UserStar/>
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
                <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-1">
                    <a
                        href="https://linkedin.com"
                        className="flex h-9 items-center gap-2 rounded-full border border-[#e6e3e9] bg-white px-3 text-xs text-[#4c4953]"
                    >
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-[#0878c9] font-bold text-white">
                            in
                        </span>
                        LinkedIn
                    </a>
                    <a
                        href="https://srihithjoshi.work"
                        className="flex h-9 items-center gap-2 rounded-full border border-[#e6e3e9] bg-white px-3 text-xs text-[#4c4953]"
                    >
                        <Icon name="link" size={14} /> Website
                    </a>
                    <a
                        href="mailto:srihith@litstudent.in"
                        className="col-span-2 flex h-9 items-center justify-center gap-2 rounded-full border border-[#e6e3e9] bg-white px-3 text-xs font-medium text-[#4c4953] lg:col-span-1"
                    >
                        <Icon
                            name="mail"
                            size={14}
                            className="text-[#18a982]"
                        />{" "}
                        Drop a message
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
                        <p className="text-[12px] font-bold text-[#48454f]">
                            CHIRAG KUSHWAHA
                        </p>
                        <p className="mt-0.5 text-[12px] text-[#85818c]">
                            Creative Director · Industry Evaluator
                        </p>
                        <span className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-[#6b48a9]">
                            <Icon name="check" size={11} /> Storytelling
                            endorsed
                        </span>
                    </div>
                </div>
                <div className="mt-5 border-t border-[#e9e7ed] pt-4">
                    <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[.17em] text-[#ec5bcf]">
                        Achievements
                    </h2>
                    <div className="flex items-center gap-2.5">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#fff3d2] text-lg text-[#ed9e23]">
                            ✹
                        </span>
                        <div>
                            <p className="text-[10px] font-medium leading-[1.4] text-[#55515c]">
                                State Level Recognition
                            </p>
                            <p className="mt-0.5 text-[9px] text-[#898590]">
                                Telugu Mahasabha Speech Competition
                            </p>
                        </div>
                    </div>
                    <button className="mt-3 text-[9px] font-medium text-[#5c5962] underline">
                        View all achievements
                    </button>
                </div>
                <div className="mt-5 border-t border-[#e9e7ed] pt-4">
                    <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[.17em] text-[#3776ff]">
                        Education
                    </h2>
                    <div className="flex gap-2.5">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#e8e5ec] bg-white text-[10px] font-bold text-[#5c41a0]">
                            J
                        </span>
                        <div>
                            <p className="text-[10px] font-semibold text-[#4e4b55]">
                                JNTUH College of Engineering
                            </p>
                            <p className="mt-0.5 text-[9px] text-[#86828d]">
                                Graduation · Mechanical Engineering
                            </p>
                            <p className="text-[9px] text-[#98949e]">
                                Jun 2020 — Jun 2024
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
    );
}
