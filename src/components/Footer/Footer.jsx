import './Footer.css'

export default function Footer() {
  return <footer className="mt-14 flex flex-col gap-4 border-t border-[#e9e7ed] pt-6 text-[11px] text-[#918e98] sm:flex-row sm:items-center sm:justify-between"><span className="font-extrabold tracking-[-.03em] text-[#26232d]">LIT <span className="font-normal text-[#aaa6b0]">· Student portfolio</span></span><div className="flex flex-wrap gap-4"><a href="#about" className="hover:text-[#5e3ab1]">About LIT School</a><a href="mailto:hello@litschool.in" className="hover:text-[#5e3ab1]">Contact</a><span>© 2025 Disruptive Edu Pvt Ltd.</span></div></footer>
}
