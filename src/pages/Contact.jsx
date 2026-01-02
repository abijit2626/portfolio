import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
    const socialLinks = [
        {
            name: 'Email',
            value: 'abijit2626@gmail.com',
            href: 'mailto:abijit2626@gmail.com',
            icon: Mail,
        },
        {
            name: 'GitHub',
            value: 'github.com/abijit2626',
            href: 'https://github.com/abijit2626',
            icon: Github,
        },
        {
            name: 'LinkedIn',
            value: 'linkedin.com/in/abijit-arun-nair-b63886303',
            href: 'https://www.linkedin.com/in/abijit-arun-nair-b63886303',
            icon: Linkedin,
        },
    ];

    return (
        <div className="space-y-12 max-w-2xl mx-auto py-12">
            <section className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-white font-mono uppercase tracking-tighter">Establishing_Connection...</h1>
                <p className="text-slate-400">
                    {/* Feel free to invite people to reach out. */}
                    I am always open to discussing threat detection, malware research, or entry-level security roles.
                </p>
            </section>

            <div className="space-y-4">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-6 border border-slate-800 rounded-lg bg-slate-900/50 hover:border-emerald-500/50 transition-all hover:bg-slate-900 group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-800 rounded text-slate-400 group-hover:text-emerald-500 transition-colors">
                                <link.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-mono text-slate-500 uppercase mb-1">{link.name}</div>
                                <div className="text-slate-200 font-medium">{link.value}</div>
                            </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-700 group-hover:text-emerald-500 transition-all" />
                    </a>
                ))}
            </div>

            <div className="pt-8 text-center text-xs font-mono text-slate-600">
                [ EOF_CONTACT ]
            </div>
        </div>
    );
};

export default Contact;
