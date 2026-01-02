import { Link, useLocation } from 'react-router-dom';
import { Terminal } from 'lucide-react';

const Navigation = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Writeups', path: '/writeups' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <Terminal className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
                    <span className="font-mono font-bold text-slate-200">ROOT@PORTFOLIO:~#</span>
                </Link>
                <div className="flex gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`text-sm font-medium transition-colors hover:text-emerald-500 ${location.pathname === item.path ? 'text-emerald-500' : 'text-slate-400'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
