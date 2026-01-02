import Terminal from '../components/Terminal';

const Home = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <section className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-6">
                    I'm Abijit Arun Nair
                    <span className="block text-emerald-500 mt-2">Security Researcher & Detection Engineer</span>
                </h1>

                <div className="prose prose-invert border-l-2 border-emerald-500/20 pl-6 italic text-slate-400">
                    "Detection is about understanding behavior, not just looking for signatures."
                </div>
            </section>

            <Terminal title="about_me.sh">
                <div className="space-y-4">
                    <p className="text-emerald-500">$ cat intro.txt</p>
                    <div className="pl-4 border-l border-slate-700">
                        I’m a college engineering student focused on understanding how systems actually work, how they break, and how they can be protected. I learn best by building things, making mistakes, and improving over time.
                    </div>

                    <p className="text-emerald-500">$ ls ./focus_areas</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pl-4">
                        <span className="text-slate-400 font-mono">Windows</span>
                        <span className="text-slate-400 font-mono">Network</span>
                        <span className="text-slate-400 font-mono">Linux</span>
                    </div>
                </div>
            </Terminal>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-800">
                <div>
                    <h2 className="text-sm font-mono text-emerald-500 mb-2 underline decoration-emerald-500/30 underline-offset-4 uppercase tracking-wider">Current Activity</h2>
                    <p className="text-slate-400 text-sm">
                        Researching: Monitoring the behavior of credential access patterns.
                    </p>
                </div>
                <div>
                    <h2 className="text-sm font-mono text-emerald-500 mb-2 underline decoration-emerald-500/30 underline-offset-4 uppercase tracking-wider">Availability</h2>
                    <p className="text-slate-400 text-sm">
                        Status: Open for internships.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
