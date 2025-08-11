import React from 'react';
import Typography from '@/components/Typography';
import SectionLayout from '@/components/SectionLayout';
import {STACK_SKILLS} from "@/utils/component.config.js";
import Image from "@/components/Image.jsx";

export default function StackSection() {
    const getLevelIcon = (skill) => {
        if (skill.level === 'proficient') {
            return (
                <div
                    className="
                        absolute -top-4 -right-4
                        text-2xl
                        rotate-[30deg]
                    "
                >👑</div>
            )
        }

        if (skill.level === 'knowledgeable') {
            return (
                <div
                    className="
                        absolute -top-1 -right-1
                        text-2xl
                    "
                >🏅</div>
            )
        }

        return ''
    }
    return (
        <SectionLayout
            id="stack"
            title="Skills"
            subtitle="The skills, tools and technologies I am really good at:"
            className="bg-gray-50 dark:bg-graydark-50"
        >
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 justify-between gap-7">
                {STACK_SKILLS.map((skill) => (
                    <li
                        key={skill.name}
                        className="flex justify-center"
                    >
                        <div
                            className="
                                flex flex-col justify-center items-center text-center
                                gap-2 w-28 h-28 md:w-32 md:h-32 bg-white
                                rounded-2xl p-4
                                shadow-md
                                hover:animate-tada
                                relative
                            "
                        >
                            {
                                getLevelIcon(skill)
                            }
                            <Image
                                src={skill.src}
                                alt={skill.name}
                                original={true}
                            />
                            <Typography
                                tag="p"
                                variant="body1"
                                className="text-gray-600"
                            >
                                {skill.name}
                            </Typography>
                        </div>
                    </li>
                ))}
            </ul>
        </SectionLayout>
    );
}
