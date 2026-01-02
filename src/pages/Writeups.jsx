import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock } from 'lucide-react';

const Writeups = () => {
    // Placeholder data for writeups
    const posts = [
        {
            id: 'example-writeup-1',
            title: '[Writeup Title Placeholder 1]',
            date: '2024-XX-XX',
            readTime: '5 min read',
            excerpt: 'A short summary of what this research post covers. E.g., "Analyzing the behavior of PowerShell obfuscation in local environments."',
        },
        {
            id: 'example-writeup-2',
            title: '[Writeup Title Placeholder 2]',
            date: '2024-XX-XX',
            readTime: '10 min read',
            excerpt: 'Another research post or lab writeup summary here.',
        },
    ];

    return (
        <div className="space-y-12">
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <h1 className="text-3xl font-bold text-white font-mono">/writeups_and_research</h1>
                    <div className="h-px flex-grow bg-slate-800"></div>
                </div>

                <div className="space-y-8">
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/writeups/${post.id}`}
                            className="group block border-l-2 border-slate-800 hover:border-emerald-500 pl-6 py-2 transition-all"
                        >
                            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mb-2">
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                            </div>
                            <h2 className="text-xl font-bold text-slate-200 group-hover:text-emerald-500 transition-colors mb-2">
                                {post.title}
                            </h2>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                                {post.excerpt}
                            </p>
                        </Link>
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-20 border border-dashed border-slate-800 rounded-lg">
                        <BookOpen className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                        <p className="font-mono text-slate-500">No writeups found. Initialize research.sh...</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Writeups;
