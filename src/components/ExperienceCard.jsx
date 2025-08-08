import React from "react";
import Typography from "@/components/Typography";
import ProjectCard from "@/components/ProjectCard.jsx";

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
        rounded-xl border border-gray-100 dark:border-gray-800
        bg-gray-50 dark:bg-graydark-50
        p-6 lg:p-8 shadow-xl transition-all duration-200
        hover:-translate-y-0.5 hover:shadow-2xl
      "
        >
            {/* Header */}
            <header className="flex items-start justify-between gap-4">
                <div>
                    <Typography tag="h1" variant="heading-h2" className="text-gray-900 dark:text-graydark-900">
                        {company}
                        {role ? (
                            <span className="ml-1 italic text-gray-500 dark:text-graydark-500">— {role}</span>
                        ) : null}
                    </Typography>

                    <Typography
                        tag="p"
                        variant="subtitle"
                        className="mt-1 text-xs uppercase tracking-wide text-gray-400 dark:text-graydark-400"
                    >
                        {from} — {to}
                    </Typography>
                </div>

                {logo ? (
                    <img
                        src={logo}
                        alt={`${company} logo`}
                        className="h-10 w-10 shrink-0 rounded-md object-contain"
                    />
                ) : null}
            </header>

            {/* Responsibilities */}
            {responsibilities.length > 0 && (
                <section className="mt-4">
                    <Typography tag="h2" variant="body1" weight="600" className="text-gray-900 dark:text-graydark-900">
                        Responsibilities
                    </Typography>
                    <ul className="mt-2 ml-5 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        {responsibilities.map((item, i) => (
                            <li key={`resp-${i}`}>
                                <Typography tag="p" variant="body2" weight="400" className="text-gray-600 dark:text-graydark-600">
                                    {item}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Achievements */}
            {achievements.length > 0 && (
                <section className="mt-5">
                    <Typography tag="h2" variant="body1" weight="600" className="text-gray-900 dark:text-graydark-900">
                        Achievements & skills gained
                    </Typography>
                    <ul className="mt-2 ml-5 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        {achievements.map((item, i) => (
                            <li key={`ach-${i}`}>
                                <Typography tag="p" variant="body2" weight="400" className="text-gray-600 dark:text-graydark-600">
                                    {item}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Projects */}
            {projects.length > 0 && (
                <section className="mt-6">
                    <Typography tag="h2" variant="body1" weight="600" className="text-gray-900 dark:text-graydark-900">
                        Projects
                    </Typography>

                    <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                        {projects.map((p) => (
                            <li
                                key={p.id}
                                onClick={() => handleClickProject(p)}
                            >
                                <ProjectCard project={p} />
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </article>
    );
}
