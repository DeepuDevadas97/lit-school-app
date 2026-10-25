import './SkillsSection.css'

const groups = [['Content & story','Storytelling','Content strategy','Video editing','Interviewing'],['Growth & audience','Audience research','Social analytics','Campaign planning'],['Creative practice','Creative direction','Brand analysis','Web design']]
export default function SkillsSection() {
  return <div className="grid gap-3 sm:grid-cols-2">{groups.map(([group,...skills])=><div key={group} className="rounded-2xl border border-[#ebe9ef] bg-white p-5"><h3 className="text-sm font-semibold">{group}</h3><div className="mt-4 space-y-2.5">{skills.map((skill,i)=><div key={skill} className="flex items-center justify-between"><span className="text-xs text-[#56535e]">{skill}</span><span className="flex items-center gap-1.5 text-[10px] text-[#87838f]"><span className="h-1.5 w-1.5 rounded-full bg-[#53a876]"/>{i<2?'Endorsed':'In 1 project'}</span></div>)}</div></div>)}</div>
}
