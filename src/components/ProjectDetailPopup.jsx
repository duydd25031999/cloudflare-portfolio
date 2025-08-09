import React from "react";
import Typography from "@/components/Typography";
import IconWrapper from "@/components/IconWrapper";
import { X } from "lucide-react";
import Tag from "@/components/Tag.jsx";

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
                  max-h-[92vh] overflow-y-auto
                  rounded-xl border border-gray-400 dark:border-graydark-400
                  bg-gray-50 dark:bg-graydark-50
                  p-8
                  flex flex-col gap-5
                "
            >
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <Typography tag="h3" variant="heading-h3" weight="600" className="text-gray-900 dark:text-graydark-900">
                            {project.name}
                        </Typography>
                        <Typography tag="p" variant="body1" className="mt-2 uppercase tracking-wide text-gray-500 dark:text-graydark-500 flex flex-col sm:flex-row gap-1 sm:gap-3">
                            <span>{project.role}</span>
                            <span className="hidden sm:block">•</span>
                            <span>{project.period.from} — {project.period.to}</span>

                        </Typography>
                    </div>

                    <IconWrapper onClick={onClose} aria-label="Close">
                        <X className="text-gray-600 dark:text-graydark-600" />
                    </IconWrapper>
                </div>

                {project.tech?.length ? (
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <Tag key={t}>{t}</Tag>
                        ))}
                    </div>
                ) : null}

                <Typography tag="p" className="text-gray-700 dark:text-gray-300">
                    {project.summary}
                </Typography>

                {project.responsibilities?.length ? (
                    <section>
                        <Typography tag="h4" className="font-medium text-gray-900 dark:text-white">
                            Responsibilities
                        </Typography>
                        <ul className="mt-2 ml-5 list-disc space-y-1 text-gray-700 dark:text-gray-300">
                            {project.responsibilities.map((r, i) => <li key={`r-${i}`}>{r}</li>)}
                        </ul>
                    </section>
                ) : null}

                {project.achievements?.length ? (
                    <section>
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
