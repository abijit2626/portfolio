const About = () => {
    return (
        <div className="max-w-px-6 space-y-12">
            <section>
                <h1 className="text-3xl font-bold text-white mb-6 font-mono tracking-tight underline decoration-emerald-500 decoration-2 underline-offset-8">
                    System.Profile
                </h1>

                <div className="space-y-6 text-slate-300">
                    <div>
                        <h2 className="text-emerald-500 font-mono text-sm mb-2 uppercase tracking-widest">// Background</h2>
                        <p className="leading-relaxed">
                            I’m a college engineering student figuring things out as I go. I’m interested in cybersecurity because I like understanding how systems actually work, how they break, and how they can be protected. I learn best by building things, making mistakes, and improving over time, and I’m focused on growing both my skills and myself.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-emerald-500 font-mono text-sm mb-2 uppercase tracking-widest">// Why Cybersecurity?</h2>
                        <p className="leading-relaxed">
                            Honestly, it started with curiosity. I liked poking around systems, trying to understand how things actually work and where they fail. Over time, that turned into wanting to protect things that matter—data, people, and trust. Cybersecurity keeps me interested because it’s real-world, high-impact work, and there’s always something new to learn.
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg">
                        <h2 className="text-emerald-500 font-mono text-sm mb-3 uppercase tracking-widest">// Methodology: How I Learn</h2>
                        <p className="text-sm italic mb-4 text-slate-400">"The best way to understand a system is to build it, or break it."</p>
                        <ul className="space-y-3 font-mono text-sm">
                            <li className="flex gap-4">
                                <span className="text-emerald-900 select-none">01</span>
                                <span>Building small projects and actually implementing what I'm studying.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-emerald-900 select-none">02</span>
                                <span>Poking around systems to identify points of failure.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-emerald-900 select-none">03</span>
                                <span>Iterative improvement through trial and error.</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-emerald-500 font-mono text-sm mb-2 uppercase tracking-widest">// Focus Areas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 border border-slate-800 rounded">
                                <h3 className="text-slate-200 font-bold mb-1">Defense & Detection</h3>
                                <p className="text-sm text-slate-400">
                                    Focusing on malware behavior, common attack vectors, and developing basic detection techniques.
                                </p>
                            </div>
                            <div className="p-4 border border-slate-800 rounded">
                                <h3 className="text-slate-200 font-bold mb-1">Security Tooling</h3>
                                <p className="text-sm text-slate-400">
                                    Leveraging Python for scripting and building custom security tools to automate analysis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
