import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
            <Navigation />
            <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-12">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
