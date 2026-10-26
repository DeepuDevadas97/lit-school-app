export const initialProjects = [
    {
        id: 1,
        title: "Built a content engine from zero",
        client: "Independent · Instagram",
        kind: "Creator growth",
        period: "Jan — Apr 2025",
        role: "Strategy · Production · Analytics",
        description:
            "Turned a personal interest in streetwear into a repeatable short-form content system. Tested formats, built a publishing rhythm, and used audience signals to shape each next post.",
        outcome: "4.2k",
        outcomeLabel: "engaged followers",
        proof: "Audience analytics",
        accent: "violet",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85",
        featured: true,
        published: true,
        skills: ["Content strategy", "Audience research", "Video editing"],
    },
    {
        id: 2,
        title: "Campaign film for a new launch",
        client: "Philips India · LIT Challenge",
        kind: "Brand challenge",
        period: "Mar 2025",
        role: "Creative direction · Editor",
        description:
            "Translated a product brief into a 30-second social film, balancing a clear product story with a native, creator-first visual style.",
        outcome: "Top 10%",
        outcomeLabel: "challenge ranking",
        proof: "LIT verified · 2 evaluators",
        accent: "blue",
        image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=85",
        published: true,
        skills: ["Storytelling", "Premiere Pro", "Creative direction"],
    },
    {
        id: 3,
        title: "Namma Creator Carnival",
        client: "LIT School · Event sprint",
        kind: "Digital experience",
        period: "Feb 2025",
        role: "Web design · Growth",
        description:
            "Designed and shipped an event landing page in a two-day sprint, bringing the programme, ticket information, and creator lineup into one place.",
        outcome: "500+",
        outcomeLabel: "registrations in 48h",
        proof: "Live project · Team feedback",
        accent: "orange",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
        published: true,
        skills: ["Web design", "Conversion", "Project management"],
    },
    {
        id: 4,
        title: "Behind the Bill",
        client: "Independent · Research",
        kind: "Editorial series",
        period: "Nov 2024",
        role: "Research · Interview · Edit",
        description:
            "A documentary-style series exploring the tiny decisions behind why people choose certain brands. Built the concept, interview guide, and first episode.",
        outcome: "3 episodes",
        outcomeLabel: "published",
        proof: "View showreel",
        accent: "pink",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=85",
        published: false,
        skills: ["Documentary", "Interviewing", "Brand analysis"],
    },
];


export const initialProfile = {
    name: "Srihith Joshi",
    headline: "Creator & brand storyteller",
    bio: "I turn ideas into stories people want to spend time with. I’m strongest at finding the angle, making the thing, and learning from how people respond.",
    location: "Bengaluru, India",
    linkedin: "https://linkedin.com/in/srihith-joshi",
    instagram: "https://instagram.com/srihithjoshi",
    website: "https://srihithjoshi.work",
    openToWork: false,
    openToWorkRoles: "Content Strategist, Brand Creator",
};

export const initialExperiences = [
    {
        id: "content-production-1",
        role: "Content Production and Storytelling",
        company: "Oben Electric",
        date: "Feb 2021 – Oct 2021",
        description:
            "Joined to contribute to brand content through video editing while understanding how visuals and storytelling influence audience engagement.",
        softSkills: ["Video Editing", "Adobe Premiere Pro", "Basic Storytelling", "Creativity", "Communication", "Communication", "Communication", "Leadership", "Collaboration"],
        hardSkills: ["Video Editing", "Adobe Premiere Pro", "Basic Storytelling", "Creativity", "Communication", "Communication", "Communication", "Leadership", "Collaboration"],
        tools: ["Premiere Pro", "Instagram"],
        published: true,
    },
    {
        id: "content-production-2",
        role: "Content Production and Storytelling",
        company: "Oben Electric",
        date: "Feb 2021 – Oct 2021",
        description:
            "Joined to contribute to brand content through video editing while understanding how visuals and storytelling influence audience engagement.",
        softSkills: ["Video Editing", "Adobe Premiere Pro", "Basic Storytelling", "Creativity", "Communication", "Communication", "Communication", "Leadership", "Collaboration"],
        hardSkills: ["Video Editing", "Adobe Premiere Pro", "Basic Storytelling", "Creativity", "Communication", "Communication", "Communication", "Leadership", "Collaboration"],
        tools: ["Premiere Pro", "Instagram"],
        published: true,
    },
    {
        id: "content-production-3",
        role: "Creator & Marketer",
        company: "Independent",
        date: "2023 – Present",
        description:
            "Built a personal content channel from the ground up, learning production, publishing, and audience development by doing.",
        softSkills: ["Storytelling", "Communication", "Creative thinking"],
        hardSkills: ["Content strategy", "Video editing", "Analytics"],
        tools: ["Instagram", "Premiere Pro"],
        published: true,
    },
];

export const initialSkillGroups = [
    { category: "Content Creation", skills: ["Content Creation", "Adaptability", "Adobe Premiere Pro", "AI Tools for Content", "Audience Empathy", "Copywriting", "Creative Thinking", "Documentary Filmmaking", "Content Strategy"] },
    { category: "E Commerce", skills: ["Conversion Rate Optimization", "Dropshipping"] },
    { category: "Digital Marketing", skills: ["AI Tools for Social Media", "AIDA Framework", "Algorithm Decoding", "Audience Insight", "Campaign Management", "Campaign Planning", "Content Marketing Funnels", "Social Media Analytics", "Documentary Filmmaking", "Social Media Strategy", "STP Framework"] },
    { category: "Social Media", skills: ["Affiliate Marketing", "AI Content Tools", "Audience Psychology", "Content Calendar", "Content Repurposing", "Creative Problem Solving", "Creator Mindset", "Leadership", "Networking", "Niche Clarity", "Strategic Thinking", "YouTube Mastery"] },
    { category: "Web Development", skills: ["Figma (UI/UX Design)", "Form & Funnel Building", "Landing Page Design", "Project Management", "Responsive Design", "Webflow Development", "Website Analytics", "Website Funnels"] },
];

export const initialAchievements = [
    { id: "achievement-1", title: "State level merit throwball player", issuer: "Telangana Throwball Association", date: "2024-05-01", certificate: "", published: true },
    { id: "achievement-2", title: "Organized a national level technical fest as co-coordinator", issuer: "JNTUH College of Engineering", date: "2023-11-01", certificate: "", published: true },
    { id: "achievement-3", title: "State Level Recognition Telugu Mahasabha Speech Competition", issuer: "Telugu Mahasabha", date: "2022-08-01", certificate: "", published: true },
];

export const projectFilters = [
    "All work",
    "Creator growth",
    "Brand challenge",
    "Digital experience",
    "Editorial series",
    "Personal project",
];
