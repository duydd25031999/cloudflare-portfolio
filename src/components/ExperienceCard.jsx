import Typography from '@/components/Typography';
import React from "react";
import Image from "@/components/Image.jsx";

export default function ExperienceCard({ from, to, title, description, img }) {
    return (
        <article
            className="
                bg-white
                dark:bg-graydark-100
                p-8
                rounded-xl
                shadow-2xl
                transition-transform
                hover:-translate-y-1
                hover:shadow-sm
                duration-200
                flex flex-col gap-4 lg:gap-12
                lg:flex-row lg:justify-between lg:items-start
                w-auto lg:w-4xl
            "
        >
            {/* Left: Image */}
            <div className="w-auto lg:w-48">
                <Image src={img} original={true} alt={title} />
            </div>

            {/* Right: Content */}
            <div className="flex-1 flex flex-col lg:flex-row-reverse justify-between items-start gap-4 lg:gap-12">
                <Typography tag="p" variant="body2" className="text-gray-700 dark:text-graydark-700">
                    {from} - {to}
                </Typography>
                <div className="max-w-sm">
                    <Typography tag="h2" variant="subtitle" weight={600} className="text-gray-900 dark:text-graydark-900 mb-4">
                        {title}
                    </Typography>

                    <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 space-y-1">
                        {description.map((desc, index) => (
                            <Typography
                                tag="li"
                                variant="body2"
                                className="text-gray-600 dark:text-graydark-600"
                                key={index}
                            >{desc}</Typography>
                        ))}
                    </ul>
                </div>
            </div>



        </article>
    );
}
