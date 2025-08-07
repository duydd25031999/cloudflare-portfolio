import React from 'react'
import Typography from '@/components/Typography'
import SectionLayout from "@/components/SectionLayout.jsx";
import Image from "@/components/Image.jsx";
import Link from "@/components/Link.jsx";

const AboutSection = () => {
    return (
        <SectionLayout id="about" title="About Me" className="bg-gray-50 dark:bg-graydark-50">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
                {/* Left - Image */}
                <div className="relative shrink-0 w-[320px] h-[380px] lg:w-[440px] lg:h-[520px] transition-transform hover:-translate-y-1 duration-200">
                    <div className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-[320px] h-[360px] lg:w-[400px] lg:h-[480px] bottom-0 bg-gray-200 dark:bg-graydark-200"></div>
                    <Image
                        src="/About.png" // Replace with your actual image path
                        alt="Sagar's image"
                        className="absolute right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0 top-0 z-20 w-[280px] h-[360px] lg:w-[400px] lg:h-[480px]"
                    />
                </div>

                {/* Right - Text content */}
                <div className="max-w-2xl">
                    <Typography tag="h2" variant="heading-h3" weight={600} className="text-gray-900 dark:text-graydark-900 mb-6">
                        Curious about me? Here you have it:
                    </Typography>

                    <div className="flex flex-col gap-4">
                        <Typography tag="p" variant="body2" className="text-gray-600 dark:text-graydark-600">
                            I'm a passionate,{' '}
                            <Link href="#" variant="normal">
                                self-proclaimed designer
                            </Link>{' '}
                            who specializes in full stack development (React.js & Node.js). I am very enthusiastic
                            about bringing the technical and visual aspects of digital products to life. User
                            experience, pixel perfect design, and writing clear, readable, highly performant code
                            matters to me.
                        </Typography>

                        <Typography tag="p" variant="body2" className="text-gray-600 dark:text-graydark-600">
                            I began my journey as a web developer in 2015, and since then, I've continued to grow
                            and evolve as a developer, taking on new challenges and learning the latest technologies
                            along the way. Now, in my early thirties, 7 years after starting my web development
                            journey, I'm building cutting-edge web applications using modern technologies such as
                            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                        </Typography>

                        <Typography tag="p"  variant="body2" className="text-gray-600 dark:text-graydark-600">
                            I am very much a progressive thinker and enjoy working on products end to end, from
                            ideation all the way to development.
                        </Typography>

                        <Typography tag="p"  variant="body2" className="text-gray-600 dark:text-graydark-600">
                            When I'm not in full-on developer mode, you can find me hovering around on twitter or on
                            indie hacker, witnessing the journey of early startups or enjoying some free time. You
                            can follow me on{' '}
                            <Link href="#" variant="normal">
                                Twitter
                            </Link>{' '}
                            where I share tech-related bites and build in public, or you can follow me on{' '}
                            <Link href="#" variant="normal">
                                GitHub
                            </Link>
                            .
                        </Typography>

                        <Typography tag="p" variant="body2" className="text-gray-600 dark:text-graydark-600">
                            Finally, some quick bits about me.
                        </Typography>

                        <ul className="grid grid-cols-2 gap-2.5 list-disc list-inside">
                            <Typography tag="li" variant="body2" className="text-gray-600 dark:text-graydark-600">B.E. in Computer Engineering</Typography>
                            <Typography tag="li" variant="body2" className="text-gray-600 dark:text-graydark-600">Avid learner</Typography>
                            <Typography tag="li" variant="body2" className="text-gray-600 dark:text-graydark-600">Full time freelancer</Typography>
                            <Typography tag="li" variant="body2" className="text-gray-600 dark:text-graydark-600">Aspiring indie hacker</Typography>
                        </ul>

                        <Typography tag="p" variant="body2" className="text-gray-600 dark:text-graydark-600">
                            One last thing, I'm available for freelance work, so feel free to reach out and say
                            hello! I promise I don't bite 😉
                        </Typography>
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}

export default AboutSection
