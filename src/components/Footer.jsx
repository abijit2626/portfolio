const Footer = () => {
    return (
        <footer className="border-t border-slate-800 py-8 px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                <div className="font-mono">
                    © {new Date().getFullYear()} • Abijit Arun Nair
                </div>
                <div className="flex gap-4">
                    <span className="text-emerald-500 capitalize">status: operational</span>
                    <span className="border-l border-slate-800 pl-4 italic">human_authored: true</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
