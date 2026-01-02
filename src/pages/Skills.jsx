const Skills = () => {
    const skillGroups = [
        {
            category: 'Operating Systems',
            items: ['Windows', 'Linux'],
        },
        {
            category: 'Programming / Scripting',
            items: ['Python (Automation, Tooling, Scripting)'],
        },
        {
            category: 'Security Concepts',
            items: ['Malware Behavior', 'Attack Vectors', 'Detection Techniques', 'Defense Concepts'],
        },
        {
            category: 'Technical Focus',
            items: ['Building Security Tools', 'System Hardening'],
        },
    ];

    return (
        <div className="space-y-12">
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <h1 className="text-3xl font-bold text-white font-mono">/skills</h1>
                    <div className="h-px flex-grow bg-slate-800"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {skillGroups.map((group) => (
                        <div key={group.category} className="space-y-4">
                            <h2 className="text-emerald-500 font-mono text-sm uppercase tracking-widest border-b border-emerald-500/10 pb-2">
                                {group.category}
                            </h2>
                            <ul className="space-y-2">
                                {group.items.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-300">
                                        <span className="w-1 h-1 bg-emerald-500/50 rounded-full"></span>
                                        <span className="text-sm">
                                            {/* Placeholder: Edit these items directly in this file */}
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-6 border border-slate-800 rounded bg-slate-900/20 text-xs font-mono text-slate-500 leading-relaxed">
                    <p className="mb-2 uppercase text-slate-400">// Note on skills:</p>
                    <p>
                        I prioritize deep understanding over a long list of buzzwords.
                        If a skill is listed above, it means I have applied it in a lab,
                        a project, or a real-world scenario.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Skills;
