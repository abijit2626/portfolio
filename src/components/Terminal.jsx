const TerminalUI = ({ children, title = "terminal" }) => {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">{title}</span>
            </div>
            <div className="p-4 font-mono text-sm leading-relaxed text-slate-300">
                {children}
            </div>
        </div>
    );
};

export default TerminalUI;
