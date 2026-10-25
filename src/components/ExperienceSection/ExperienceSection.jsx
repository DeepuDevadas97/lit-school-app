import './ExperienceSection.css'

const roles = [
  { role:'Content & Community Intern', company:'Oben Electric', date:'Feb 2025 — May 2025', description:'Helped plan and produce social content around product launches. Worked with the team to review performance and shape the next week’s calendar.', verified:true },
  { role:'Creator & Marketer', company:'Independent', date:'2023 — Present', description:'Built a personal content channel from the ground up, learning production, publishing, and audience development by doing.', verified:false },
]
export default function ExperienceSection() {
  return <div className="space-y-3">{roles.map(item=><article key={item.role} className="rounded-2xl border border-[#ebe9ef] bg-white p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="font-semibold">{item.role}</h3><p className="mt-1 text-sm text-[#777580]">{item.company} <span className="mx-1 text-[#d2cfd8]">·</span> {item.date}</p></div>{item.verified&&<span className="rounded-full bg-[#f1ebff] px-2.5 py-1 text-[10px] font-semibold text-[#6b45b4]">✓ LIT verified</span>}</div><p className="mt-4 max-w-2xl text-sm leading-6 text-[#777580]">{item.description}</p><div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full bg-[#f5f3f7] px-2.5 py-1 text-[10px] text-[#686470]">Content production</span><span className="rounded-full bg-[#f5f3f7] px-2.5 py-1 text-[10px] text-[#686470]">Social strategy</span></div></article>)}</div>
}
