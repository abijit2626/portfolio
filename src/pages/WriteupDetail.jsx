import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, FileText } from 'lucide-react';

const WriteupDetail = () => {
    const { id } = useParams();

    return (
        <div className="space-y-10 animate-in slide-in-from-bottom-4 duration-500">
            <Link to="/writeups" className="inline-flex items-center gap-2 text-sm font-mono text-emerald-500 hover:underline mb-4">
                <ArrowLeft className="w-4 h-4" />
                BACK_TO_WRITEUPS
            </Link>

            <header className="space-y-6">
                <h1 className="text-4xl font-bold text-white tracking-tight leading-tight">
                    {/* Writeup Title Placeholder */}
                    Post Title: {id}
                </h1>

                <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-mono">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 2024-XX-XX</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> [X] min read</span>
                    <span className="flex items-center gap-2 text-emerald-500/80"><FileText className="w-4 h-4" /> Category: [Research / Lab / CTF]</span>
                </div>
            </header>

            <div className="prose prose-invert max-w-none space-y-12">
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-emerald-500 font-mono uppercase tracking-widest border-b border-slate-800 pb-2">Context / Motivation</h2>
                    <p className="text-slate-300">
                        {/* Why did you write this? What research gap are you filling? */}
                        "Explain what motivated you to research this topic or perform this specific lab experiment."
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-emerald-500 font-mono uppercase tracking-widest border-b border-slate-800 pb-2">Technical Explanation</h2>
                    <div className="space-y-6">
                        <p className="text-slate-300">
                            {/* This is the meat of the post. Break it down into logical steps. */}
                            "Break down the technical concepts here. Use sub-headings for different stages of your analysis/experiment."
                        </p>

                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                            <p className="text-xs font-mono text-slate-500 mb-4">// Placeholder for an example, log snippet, or code block</p>
                            <code className="text-sm text-emerald-400 block whitespace-pre">
                                {/* Provide example code or logs here */}
                                [ Your technical examples here ]
                            </code>
                        </div>

                        <p className="text-slate-300 italic">
                            {/* Optional: Reference diagrams or external research. */}
                            [Suggestion: Insert a diagram or a screenshot link here if relevant to the technical explanation.]
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-emerald-500 font-mono uppercase tracking-widest border-b border-slate-800 pb-2">Key Takeaways</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="list-inside list-disc space-y-2 text-slate-300">
                            <li>[Conclusion 1]</li>
                            <li>[Conclusion 2]</li>
                        </ul>
                        <ul className="list-inside list-disc space-y-2 text-slate-300">
                            <li>[Conclusion 3]</li>
                            <li>[Conclusion 4]</li>
                        </ul>
                    </div>
                </section>

                <section className="pt-12 border-t border-slate-800">
                    <div className="flex items-center gap-4 p-6 bg-slate-900/30 rounded border border-slate-800/50 italic text-slate-400 text-sm">
                        <span className="font-mono text-emerald-500">NOTE:</span>
                        "This writeup is a living document. It reflects my understanding as of the date published. Critical feedback is always welcome via the contact page."
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WriteupDetail;
