import Typography from '@/components/Typography';

export default function ExperienceCard({ from, to, title, description, img }) {
    return (
        <article
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md duration-200 flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-start"
        >
            {/* Left: Image */}
            <div className="flex-shrink-0 mb-2 lg:mb-0 lg:mr-6">
                <img src={img} alt={title} className="w-20 h-auto object-contain" />
            </div>

            {/* Right: Content */}
            <div className="flex-1 space-y-2">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <Typography tag="p" className="text-gray-500 dark:text-gray-400 text-sm">
                        {from} - {to}
                    </Typography>
                </div>

                <Typography tag="h3" className="font-semibold text-gray-900 dark:text-white">
                    {title}
                </Typography>

                <ul className="list-disc ml-4 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    {description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
