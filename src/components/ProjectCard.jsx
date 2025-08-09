import React from "react";
import Typography from "@/components/Typography";
import Tag from "@/components/Tag.jsx";

export default function ProjectCard({ project, onClick }) {
    return (
        <li
            className="
                w-full min-h-full text-left rounded-lg border
                border-gray-100
                bg-gray-50/60  p-4 shadow-sm
                transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-gray-300
                cursor-pointer
              "
            onClick={onClick}
        >
            <Typography tag="h4" variant="body1" weight={600} className="text-gray-900">
                {project.name}
            </Typography>

            <Typography tag="p" variant="body3" className="mt-1 uppercase tracking-wide text-gray-500 dark:text-graydark-500 flex flex-col sm:flex-row gap-1 sm:gap-3">
                <span>{project.role}</span>
                <span className="hidden sm:block">•</span>
                <span>{project.period.from} — {project.period.to}</span>

            </Typography>

            <Typography tag="p" className="mt-2 text-sm text-gray-600">
                {project.summary}
            </Typography>

            {project.tech?.length ? (
                <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                    ))}
                </div>
            ) : null}
        </li>
    );
}
