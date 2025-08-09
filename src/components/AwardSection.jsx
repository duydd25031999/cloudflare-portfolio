import SectionLayout from "@/components/SectionLayout";
import Typography from "@/components/Typography";
import Link from "@/components/Link";
import React from "react";

// Type (optional, for TS change .jsx -> .tsx)
/// type AwardItem = {
///   org: string;
///   role?: string | null;
///   period: string;
///   bullets: React.ReactNode[]; // fully custom JSX nodes
/// };

const data /*: AwardItem[] */ = [
    {
        org: "CMC Global",
        role: "Web Developer",
        period: "June 2022 – Present",
        bullets: [
            <Link alt="psm-1" variant="normal" href="https://www.credly.com/badges/52bca311-aeda-472f-86f5-304f3b25a160/public_url">
                PSM I certificate
            </Link>,
            <Link alt="rising-star" variant="normal"  href="https://www.linkedin.com/posts/doducduy-vietnam_award-recognition-frontenddeveloper-activity-7351645448543092739-Rman?utm_source=share&utm_medium=member_desktop&rcm=ACoAACsY18wB5BRvC37FGsMmsi-LKAlRy7A9xHA">
                Rising Star in Q1 2024
            </Link>,
        ],
    },
    {
        org: "Seal Commerce",
        role: "Front-end Developer",
        period: "May 2021 – May 2022",
        bullets: [
            <span key="spotlight">
                <strong>Monthly Team Spotlight</strong> in March 2022, September 2021.
            </span>,
        ],
    },
    {
        org: "FPT University",
        role: "Student",
        period: "September 2017 – June 2021",
        bullets: [
            <span key="major">
                <strong>Major:</strong> Software Engineering
            </span>,
            <span key="pmp">
                <Link href="https://coursera.org/share/1775cd2f56477e9233b2d37f062da11e" variant="normal">
                    Project Management Principles and Practices
                </Link> Coursera certificate.
            </span>,
            <span key="gda">
                <Link href="https://coursera.org/share/cbfaad2498e18dd3d35a5881bc2626b0" variant="normal">
                    Google Data Analytics
                </Link> Coursera certificate.
            </span>,
            <span key="gpa">GPA: 7.7 / 10.</span>,
            <span key="scholarship">
                Received a <strong>scholarship of 70% of tuition fee</strong> in the entrance exam of FPT University.
            </span>,
        ],
    },
];

export default function AwardSection() {
    return (
        <SectionLayout
            id="education-award"
            title="Education & Award"
            subtitle="Here are the things I have achieved during my time studying and working on software."
        >
            {/* Timeline wrapper: left line on mobile, center line on lg */}
            <ul className="
              relative
              before:content-[''] before:absolute before:inset-y-0 before:left-4 before:w-px
              before:bg-gray-200 dark:before:bg-gray-800
              lg:before:left-1/2 lg:before:-translate-x-1/2
            ">
                {data.map((item, idx) => {
                    const isLeft = idx % 2 === 0; // only matters on lg

                    return (
                        <li
                            key={`${item.org}-${idx}`}
                            className={`
                                relative pl-10 py-6
                                lg:w-1/2 lg:pl-0
                                flex
                                ${isLeft ? "lg:pr-16 lg:mr-auto lg:justify-end" : "lg:pl-16 lg:ml-auto"}
                            `}
                        >
                            {/* Timeline dot */}
                            <span
                                aria-hidden="true"
                                className={`
                                   absolute left-2.5 top-6 h-3 w-3 rounded-full
                                  bg-gray-900 dark:bg-white
                                  ring-4 ring-white dark:ring-gray-950
                                  ${isLeft ? 'lg:-right-1.5 lg:left-auto' : 'lg:-left-1.5'}
                                `}

                            />

                            {/* Card */}
                            <article
                                className="
                                  rounded-xl border border-gray-100 dark:border-gray-800
                                  bg-gray-50 dark:bg-graydark-50
                                  p-4 shadow-sm transition-all duration-200
                                  hover:-translate-y-0.5 hover:shadow-md
                                "
                            >
                                {/* Org — Role */}
                                <div className="flex flex-wrap items-baseline justify-start gap-x-2">
                                    <Typography tag="h2" variant="subtitle" weight={600} className=" text-gray-800 dark:text-graydark-800">
                                        {item.org}
                                    </Typography>
                                    {item.role && (
                                        <Typography tag="span" variant="body3" className="text-gray-500 dark:text-graydark-500">
                                            - {item.role}
                                        </Typography>
                                    )}
                                </div>

                                {/* Period */}
                                <Typography
                                    tag="p"
                                    variant="body3"
                                    className="uppercase text-gray-500 dark:text-graydark-500 mt-2"
                                >
                                    {item.period}
                                </Typography>

                                {/* Bullets (accept JSX nodes) */}
                                <ul className="mt-6 ml-5 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                                    {item.bullets.map((node, i) => (
                                        <li key={i}>{node}</li>
                                    ))}
                                </ul>
                            </article>
                        </li>
                    );
                })}
            </ul>
        </SectionLayout>
    );
}
