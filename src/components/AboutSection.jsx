import React from 'react'
import Typography from '@/components/Typography'
import SectionLayout from "@/components/SectionLayout.jsx";

const AboutSection = () => {
    return (
        <SectionLayout id="about" title="About Me">
            <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-16">
                {/* Left - Image */}
                <div className="relative w-full max-w-[320px] lg:max-w-[400px] mb-8 lg:mb-0">
                    <div className="absolute top-4 left-4 w-full h-full bg-muted rounded-[12px]"></div>
                    <img
                        src="/images/profile.jpg"
                        alt="About portrait"
                        className="relative w-full rounded-[12px] object-cover"
                    />
                </div>

                {/* Right - Text content */}
                <div className="max-w-2xl">
                    <Typography tag="h2" className="text-xl lg:text-2xl font-semibold mb-6">
                        Curious about me? Here you have it:
                    </Typography>

                    <Typography tag="p" className="mb-4">
                        I'm a passionate,{' '}
                        <a href="#" className="underline text-primary">
                            self-proclaimed designer
                        </a>{' '}
                        who specializes in full stack development (React.js & Node.js). I am very enthusiastic
                        about bringing the technical and visual aspects of digital products to life. User
                        experience, pixel perfect design, and writing clear, readable, highly performant code
                        matters to me.
                    </Typography>

                    <Typography tag="p" className="mb-4">
                        I began my journey as a web developer in 2015, and since then, I've continued to grow
                        and evolve as a developer, taking on new challenges and learning the latest technologies
                        along the way. Now, in my early thirties, 7 years after starting my web development
                        journey, I'm building cutting-edge web applications using modern technologies such as
                        Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                    </Typography>

                    <Typography tag="p" className="mb-4">
                        I am very much a progressive thinker and enjoy working on products end to end, from
                        ideation all the way to development.
                    </Typography>

                    <Typography tag="p" className="mb-4">
                        When I'm not in full-on developer mode, you can find me hovering around on twitter or on
                        indie hacker, witnessing the journey of early startups or enjoying some free time. You
                        can follow me on{' '}
                        <a href="#" className="underline text-primary">
                            Twitter
                        </a>{' '}
                        where I share tech-related bites and build in public, or you can follow me on{' '}
                        <a href="#" className="underline text-primary">
                            GitHub
                        </a>
                        .
                    </Typography>

                    <Typography tag="p" className="mb-2 font-semibold">Finally, some quick bits about me.</Typography>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 list-disc list-inside text-sm mb-4">
                        <li>B.E. in Computer Engineering</li>
                        <li>Avid learner</li>
                        <li>Full time freelancer</li>
                        <li>Aspiring indie hacker</li>
                    </ul>

                    <Typography tag="p">
                        One last thing, I'm available for freelance work, so feel free to reach out and say
                        hello! I promise I don't bite 😉
                    </Typography>
                </div>
            </div>
        </SectionLayout>
    )
}

export default AboutSection
