import React from 'react'
import Typography from '@/components/Typography'
import SectionLayout from "@/components/SectionLayout.jsx";
import Image from "@/components/Image.jsx";
import FileDownloadWrapper from "@/components/FileDownloadWrapper.jsx";

const AboutSection = () => {
    return (
        <SectionLayout id="about" title="About Me" className="bg-gray-50 dark:bg-graydark-50">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
                {/* Left - Image */}
                <FileDownloadWrapper
                    href="/CV_DoDucDuy_FrontendDeveloper.pdf"
                    download="CV_DoDucDuy_FrontendDeveloper.pdf"
                    force
                >
                    <div className="relative shrink-0 w-[322px] h-[392px] lg:w-[462px] lg:h-[602px] transition-transform hover:-translate-y-1 duration-200">
                        <div className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-[322px] h-[372px] lg:w-[432px] lg:h-[572px] bottom-0 bg-gray-200 dark:bg-graydark-200"></div>
                        <div className="absolute right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0 top-0 z-20 p-1.5 bg-gray-50 w-auto">
                            <Image
                                src="/About.png" // Replace with your actual image path
                                alt="Duy's About Me"
                                className="min-w-[270px] w-[270px] h-[360px] lg:w-[420px] lg:h-[560px]"
                            />
                        </div>

                    </div>
                </FileDownloadWrapper>

                {/* Right - Text content */}
                <div className="max-w-2xl">
                    <Typography tag="h2" variant="heading-h3" weight={600} className="text-gray-900 dark:text-graydark-900 mb-6">
                        Curious about me? Here you have it:
                    </Typography>

                    <div className="flex flex-col gap-4">
                        <Typography tag="p" variant="body2" className="text-gray-600 dark:text-graydark-600">
                            I'm a passionate developer specializing in Front-end development, mainly with ReactJS, VueJS, TypeScript, RESTful APIs, and Tailwind CSS, and I also enjoy working with back-end tools like NodeJS, Laravel, MySQL, and MongoDB when needed.
                        </Typography>

                        <Typography tag="p" variant="body2" className="text-gray-600 dark:text-graydark-600">
                            My work spans across domains including E-commerce, Cloud Management, CRM, and AI Assistants. I’ve not only developed features but also delivered end-to-end solutions, handling client requests, estimating timelines, managing budgets, and resolving user issues. I’ve led front-end teams of 3–5 members, conducted technical interviews, and contributed to presale activities by providing architectural guidance and front-end strategy.
                        </Typography>

                        <Typography tag="p"  variant="body2" className="text-gray-600 dark:text-graydark-600">
                            I began my journey as a developer in 2019, and since then, I've grown from implementing designs to leading feature teams, participating in presale planning, and delivering high-impact solutions for enterprise clients like Samsung and Panasonic. I enjoy working in fast-paced environments where technical clarity, teamwork, and user value are all top priorities.
                        </Typography>

                        <Typography tag="p"  variant="body2" className="text-gray-600 dark:text-graydark-600">
                            I’m passionate about clean code, thoughtful UI, and building applications that scale and serve real business needs.
                        </Typography>

                        <Typography tag="p" variant="body2" className="text-gray-600 dark:text-graydark-600">
                            Finally, some quick bits about me.
                        </Typography>

                        <ul className="grid grid-cols-2 gap-2.5 list-disc list-inside">
                            <Typography tag="li" variant="body2" className="text-gray-600 dark:text-graydark-600">B.E. in Software Engineering</Typography>
                            <Typography tag="li" variant="body2" className="text-gray-600 dark:text-graydark-600">End-to-end product thinking</Typography>
                            <Typography tag="li" variant="body2" className="text-gray-600 dark:text-graydark-600">Presale contributor</Typography>
                            <Typography tag="li" variant="body2" className="text-gray-600 dark:text-graydark-600">Detail-oriented but flexible</Typography>
                        </ul>

                        <Typography tag="p" variant="body2" className="text-gray-600 dark:text-graydark-600">
                            One last thing, I'm available for new jobs, new opportunities, so feel free to reach out and say
                            hello! I promise I don't bite 😉
                        </Typography>
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}

export default AboutSection
