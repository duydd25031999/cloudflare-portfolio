import React from "react";
import Typography from "@/components/Typography";

export default function ProjectCard({ project }) {
    return (
        <button
            type="button"
            className="
        w-full text-left rounded-lg border border-gray-100 dark:border-gray-800
        bg-gray-50/60 dark:bg-gray-900/40 p-4 shadow-sm
        transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600
      "
        >
            <Typography tag="h5" className="font-semibold text-gray-900 dark:text-white">
                {project.name}
            </Typography>

            <Typography tag="p" className="mt-0.5 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {project.role} • {project.period.from} — {project.period.to}
            </Typography>

            <Typography tag="p" className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {project.summary}
            </Typography>

            {project.tech?.length ? (
                <div className="mt-2 hidden sm:flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                        <span
                            key={`${project.id}-${t}`}
                            className="rounded-full border border-gray-200 dark:border-gray-700 px-2.5 py-0.5 text-xs text-gray-600 dark:text-gray-300"
                        >
              {t}
            </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">+{project.tech.length - 3} more</span>
                    )}
                </div>
            ) : null}
        </button>
    );
}
