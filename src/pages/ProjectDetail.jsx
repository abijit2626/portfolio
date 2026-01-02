import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Shield } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();

    return (
        <div className="space-y-10 animate-in slide-in-from-bottom-4 duration-500">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-mono text-emerald-500 hover:underline mb-4">
                <ArrowLeft className="w-4 h-4" />
                BACK_TO_PROJECTS
            </Link>

            <header className="space-y-4">
                <h1 className="text-4xl font-bold text-white tracking-tight">
                    Keyboard Hook Behavioral Detector (Windows)
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-500/50" /> Defense-Focused</span>
                    <span>•</span>
                    <span>Status: Prototype</span>
                </div>
            </header>

            <div className="prose prose-invert max-w-none space-y-12">
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-emerald-500 font-mono uppercase tracking-widest border-b border-slate-800 pb-2">Problem</h2>
                    <p className="text-slate-300">
                        Identifying processes that maliciously monitor keystrokes often relies on known signatures of keyloggers. However, many legitimate applications use keyboard hooks, making it difficult to distinguish intent. This project addresses the need for a behavioral-based detection system that evaluates the risk of a process based on its execution context and capabilities.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-emerald-500 font-mono uppercase tracking-widest border-b border-slate-800 pb-2">Threat Model / Assumptions</h2>
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded font-mono text-sm space-y-3">
                        <div className="text-slate-400">// STRIDE / Threat Modeling Considerations:</div>
                        <ul className="list-disc list-inside space-y-1 text-slate-300">
                            <li>Threat Actor: External attackers or malicious insiders attempting credential theft.</li>
                            <li>Attack Vector: User-mode keylogging via `SetWindowsHookEx`.</li>
                            <li>Assumptions: The detection system runs with sufficient privileges to query process modules and handles via WinAPI.</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-emerald-500 font-mono uppercase tracking-widest border-b border-slate-800 pb-2">Technical Details</h2>
                    <p className="text-slate-300">
                        Built as a Windows user-mode detection system using Python and the `ctypes` library to interface with WinAPI (`psapi.dll`, `kernel32.dll`). The system scans running processes to identify those capable of installing keyboard hooks by analyzing their loaded modules and execution context.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 bg-slate-800/20 border border-slate-800 rounded italic text-sm text-slate-400">
                            // Detail: Implemented contextual risk scoring and allowlisting based on digital signatures to reduce false positives.
                        </div>
                        <div className="p-4 bg-slate-800/20 border border-slate-800 rounded italic text-sm text-slate-400">
                            // Detail: Added temporal analysis to correlate behavior across scans with gated persistence-based risk amplification and decay.
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-emerald-500 font-mono uppercase tracking-widest border-b border-slate-800 pb-2">What I Learned</h2>
                    <ul className="list-disc list-inside space-y-2 text-slate-300">
                        <li>Interfacing with Windows Internals and WinAPI using Python.</li>
                        <li>Applying EDR-like telemetry approaches (risk amplification/decay) to behavioral analysis.</li>
                        <li>Managing the balance between detection sensitivity and false positive rates through allowlisting.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-emerald-500 font-mono uppercase tracking-widest border-b border-slate-800 pb-2">Limitations</h2>
                    <p className="text-slate-300 italic">
                        As a user-mode tool, it lacks visibility into kernel-level hooking or advanced rootkits. Future iterations would benefit from integration with ETW (Event Tracing for Windows) for more granular process activity tracking.
                    </p>
                </section>

                <div className="pt-8 border-t border-slate-800 flex justify-between items-center">
                    <a
                        href="https://github.com/abijit2626"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/10 border border-emerald-500/30 text-emerald-500 rounded hover:bg-emerald-600/20 transition-all font-mono text-sm"
                    >
                        <ExternalLink className="w-4 h-4" />
                        VIEW_SOURCE_ON_GITHUB
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
