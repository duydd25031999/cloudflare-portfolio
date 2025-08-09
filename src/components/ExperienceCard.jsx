import React from "react";
import Typography from "@/components/Typography";
import ProjectCard from "@/components/ProjectCard.jsx";
import Image from "@/components/Image.jsx";

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} name
 * @property {string} summary
 * @property {string[]} tech
 * @property {{demo?: string, github?: string}} [links]
 */

/**
 * @typedef {Object} ExperienceCardProps
 * @property {string} company
 * @property {string|null} role
 * @property {string} from
 * @property {string} to
 * @property {string[]} [responsibilities]
 * @property {string[]} [achievements]
 * @property {Project[]} [projects]
 * @property {string} [logo] // optional logo url
 */

export default function ExperienceCard({
                                           company,
                                           role,
                                           from,
                                           to,
                                           responsibilities = [],
                                           achievements = [],
                                           projects = [],
                                           logo,
                                            onSelectProject
                                       }) {
    const handleClickProject = (project) => {
        onSelectProject(project);
    }
    return (
        <article
            className="
                rounded-xl bg-white border-4 border-white
                hover:border-gray-900 dark:hover:border-sky-500
                p-6 lg:p-8 shadow-xl transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-2xl
                w-full
              "
        >
            {/* Header */}
            <header className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-start w-full">
                    <Typography tag="h1" variant="heading-h2" className="text-gray-900 ">
                        {company}
                        {role ? (
                            <span className="ml-3 italic text-gray-500">- {role}</span>
                        ) : null}
                    </Typography>

                    {
                        from && (
                            <Typography
                                tag="p"
                                variant="subtitle"
                                className="mt-1 text-xs uppercase tracking-wide text-gray-400"
                            >
                                {from} - {to}
                            </Typography>
                        )
                    }

                </div>

                {logo ? (
                    <Image
                        src={logo}
                        alt={`${company} logo`}
                        className="w-32 h-auto"
                    />
                ) : null}
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-3 mt-6">
                {/* Responsibilities */}
                {responsibilities.length > 0 && (
                    <section>
                        <Typography tag="h2" variant="body1" weight="600" className="text-gray-900">
                            Responsibilities
                        </Typography>
                        <ul className="mt-2 ml-5 list-disc space-y-2 text-gray-700 ">
                            {responsibilities.map((item, i) => (
                                <li key={`resp-${i}`}>
                                    <Typography tag="p" variant="body2" weight="400" className="text-gray-600">
                                        {item}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Achievements */}
                {achievements.length > 0 && (
                    <section>
                        <Typography tag="h2" variant="body1" weight="600" className="text-gray-900">
                            Achievements & Skills gained
                        </Typography>
                        <ul className="mt-2 ml-5 list-disc space-y-2 text-gray-700 ">
                            {achievements.map((item, i) => (
                                <li key={`ach-${i}`}>
                                    <Typography tag="p" variant="body2" weight="400" className="text-gray-600">
                                        {item}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>


            {/* Projects */}
            {projects.length > 0 && (
                <section className="mt-6">
                    <Typography tag="h2" variant="body1" weight="600" className="text-gray-900">
                        Projects
                    </Typography>

                    <ul className="mt-3 grid gap-3 lg:grid-cols-2">
                        {projects.map((p) => (
                            <ProjectCard key={p.id} project={p} onClick={() => handleClickProject(p)} />
                        ))}
                    </ul>
                </section>
            )}
        </article>
    );
}
