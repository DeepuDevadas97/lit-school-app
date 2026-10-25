import Icon from "../Icon/Icon";
import curiosityLogo from "../../assets/images/curiosity.png";
import litFooterLogo from "../../assets/images/lit-footer-logo.png";
import "./Footer.css";

function ContactLink({ href, icon, children, color }) {
    return (
        <a
            href={href}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#dedde2] bg-white px-3.5 text-[14px] text-[#4b4851] transition hover:border-[#bcb8c3] font-medium"
        >
            <Icon name={icon} size={18} className={color} />
            {children}
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="lit-footer mt-14 border-t border-[#d8d8dc] pt-9">
            <div className="flex flex-col items-center justify-between gap-7 sm:flex-row sm:items-start sm:gap-8">
                <img
                    src={curiosityLogo}
                    alt="Curiosity over fear"
                    className="w-[200px] max-w-full object-contain sm:w-[240px]"
                />
                <div className="flex w-full flex-col items-center gap-2 sm:w-auto sm:items-end">
                    <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
                        <ContactLink
                            href="mailto:info@litschool.in"
                            icon="mail"
                            color="text-[#00b88a]"
                        >
                            info@litschool.in
                        </ContactLink>
                        <ContactLink
                            href="tel:+919844443755"
                            icon="phone"
                            color="text-[#ff7a26]"
                        >
                            +91 9844443755
                        </ContactLink>
                    </div>
                    <ContactLink
                        href="https://litschool.in"
                        icon="globe"
                        color="text-[#7028f5]"
                    >
                        litschool.in
                    </ContactLink>
                </div>
            </div>
            <div className="mt-8 flex flex-col items-center justify-between gap-5 sm:mt-[48px] sm:flex-row sm:items-end">
                <img
                    src={litFooterLogo}
                    alt="The LIT School"
                    className="w-[100px] object-contain sm:w-[120px]"
                />
                <p className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-center text-[14px] text-[#29272d] sm:justify-end sm:text-right">
                    <span>Learn, Innovate, Transform</span>
                    <span className="font-bold text-[#0755ff]">✦</span>
                    <span>© 2026 Disruptive Edu Pvt Ltd.</span>
                    <span className="font-bold text-[#0755ff]">✦</span>
                    <span>All Rights Reserved</span>
                </p>
            </div>
        </footer>
    );
}
