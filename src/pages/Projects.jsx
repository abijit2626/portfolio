import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    // Placeholder data - In a real app, this might come from a JSON file or API
    const projects = [
        {
            id: 'keyboard-hook-detector',
            title: 'Keyboard Hook Behavioral Detector (Windows)',
            description: 'A Windows user-mode behavioral detection system in Python that identifies processes capable of installing keyboard hooks using WinAPI.',
            tags: ['Python', 'WinAPI', 'EDR Telemetry', 'Detection'],
        },
    ];

    return (
        <div className="space-y-12">
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <h1 className="text-3xl font-bold text-white font-mono">/projects</h1>
                    <div className="h-px flex-grow bg-slate-800"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>

                <div className="mt-12 p-8 border border-dashed border-slate-800 rounded-lg text-center">
                    <p className="text-slate-500 font-mono text-sm leading-relaxed">
            // This grid displays your technical work. <br />
            // To add a new project, follow the steps in INSTRUCTIONS.md
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Projects;
