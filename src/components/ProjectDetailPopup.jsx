import React from "react";
import Typography from "@/components/Typography";
import IconWrapper from "@/components/IconWrapper";
import { X } from "lucide-react";

export default function ProjectDetailPopup({ project, open, onClose }) {
    if (!open || !project) return null;

    return (
        <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />
            {/* Panel */}
            <div
                role="dialog"
                aria-modal="true"
                className="
          absolute left-1/2 top-1/2 w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2
          rounded-xl border border-gray-100 dark:border-gray-800
          bg-white dark:bg-gray-950 p-6 shadow-xl
        "
            >
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <Typography tag="h3" className="font-semibold text-gray-900 dark:text-white">
                            {project.name}
                        </Typography>
                        <Typography tag="p" className="mt-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                            {project.role} • {project.period.from} — {project.period.to}
                            {project.client && `  •  ${project.client}`}
                        </Typography>
                    </div>

                    <IconWrapper className="cursor-pointer" onClick={onClose} aria-label="Close">
                        <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </IconWrapper>
                </div>

                <Typography tag="p" className="mt-4 text-gray-700 dark:text-gray-300">
                    {project.summary}
                </Typography>

                {project.responsibilities?.length ? (
                    <section className="mt-5">
                        <Typography tag="h4" className="font-medium text-gray-900 dark:text-white">
                            Responsibilities
                        </Typography>
                        <ul className="mt-2 ml-5 list-disc space-y-1 text-gray-700 dark:text-gray-300">
                            {project.responsibilities.map((r, i) => <li key={`r-${i}`}>{r}</li>)}
                        </ul>
                    </section>
                ) : null}

                {project.achievements?.length ? (
                    <section className="mt-5">
                        <Typography tag="h4" className="font-medium text-gray-900 dark:text-white">
                            Achievements
                        </Typography>
                        <ul className="mt-2 ml-5 list-disc space-y-1 text-gray-700 dark:text-gray-300">
                            {project.achievements.map((a, i) => <li key={`a-${i}`}>{a}</li>)}
                        </ul>
                    </section>
                ) : null}
            </div>
        </div>
    );
}
