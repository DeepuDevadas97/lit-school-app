import Icon from "../Icon/Icon";
import bannerImage from "../../assets/images/Banner-img.png";
import litLogo from "../../assets/images/LIT-LOGO.png";
import humanImage from "../../assets/images/human-anim.png";
import "./Header.css";

export default function Header({ studentMode, setStudentMode }) {
    return (
        <header className="relative overflow-hidden bg-[#160b2b] h-[250px] sm:h-[230px]">
            <img
                src={bannerImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover object-[42%_center] sm:object-center"
            />
            <img
                src={humanImage}
                alt=""
                aria-hidden="true"
                className="header-human-entrance absolute bottom-[-7%] left-[-5%] sm:left-0 xl:left-[15%] h-[78%] w-auto max-w-[52%] object-contain object-bottom sm:bottom-[-8%] sm:h-[105%] sm:max-w-[34%]"
            />
            <div className="relative mx-auto flex h-full max-w-[1320px] flex-col justify-between px-4 py-5 sm:px-8 sm:py-7 lg:px-10">
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <span className="hidden text-[10px] text-white/65 sm:inline">
                            {studentMode ? "Student preview" : "Recruiter view"}
                        </span>
                        <button
                            onClick={() => setStudentMode(!studentMode)}
                            className={`flex h-8 items-center gap-1.5 rounded-full px-3 !text-[12px] font-semibold backdrop-blur ${studentMode ? "bg-white text-[#39206b]" : "border border-white/30 bg-white/10 text-white hover:bg-white/20"}`}
                        >
                            <Icon
                                name={studentMode ? "edit" : "eye"}
                                size={13}
                            />
                            {studentMode ? "Edit profile" : "View as student"}
                        </button>
                    </div>
                    <img
                        src={litLogo}
                        alt="The LIT School"
                        className="relative z-10 w-[112px] object-contain sm:w-[142px]"
                    />
                </div>
                <div className="relative z-10 ml-auto max-w-[200px] max-w-[410px] text-right text-white sm:max-w-[500px]">
                    <h2 className="text-[14px] font-light text-white/90 sm:text-[22px] mb-2 sm:mb-1">
                        Building the next generation of
                    </h2>
                    <h1 className="text-[18px] font-semibold leading-tight tracking-[-.02em] sm:text-[24px]">
                        creators, marketers and entrepreneurs
                    </h1>
                </div>
            </div>
        </header>
    );
}
