import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert } from 'lucide-react';

const ProjectCard = ({ id, title, description, tags }) => {
    return (
        <Link
            to={`/projects/${id}`}
            className="group block p-6 border border-slate-800 rounded-lg bg-slate-900/50 hover:border-emerald-500/50 transition-all hover:bg-slate-900"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-emerald-500/10 rounded border border-emerald-500/20">
                    <ShieldAlert className="w-5 h-5 text-emerald-500" />
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-emerald-500 transition-colors">{title}</h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-2">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-slate-800 text-slate-400 rounded border border-slate-700">
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
};

export default ProjectCard;
