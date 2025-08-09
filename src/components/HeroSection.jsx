import React from "react";
import Typography from "@/components/Typography"; // Adjust the import path as needed
import {Mail, MapPin, Phone, Github, Facebook, Linkedin} from "lucide-react";
import SectionLayout from "@/components/SectionLayout.jsx";
import IconWrapper from "@/components/IconWrapper.jsx";
import Image from "@/components/Image";
import FileDownloadWrapper from "@/components/FileDownloadWrapper.jsx"; // example icons

const HeroSection = () => {
    return (
        <SectionLayout
            id="hero"
        >
            <div
                className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
            >
                {/* Left Content */}
                <div className="flex flex-col gap-12 text-left max-w-3xl">
                    {/* Heading */}
                    <div>
                        <Typography tag="h1" variant="heading-h1" className="text-gray-900 dark:text-graydark-900 mb-2">
                            Hi, I’m Duy 👋
                        </Typography>

                        {/* Description */}
                        <Typography tag="p" variant="body2" className="text-gray-600 dark:text-graydark-600">
                            My full name is Do Duc Duy. I’m a driven Front-end Developer with over 5 years of experience in ReactJS and VueJS. I’m seeking to leverage my expertise in modern web technologies to build scalable and user-centric applications across domains like E-commerce, Cloud, and AI.
                        </Typography>
                    </div>


                    {/* Location and Availability */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 text-gray-800 dark:text-graydark-800">
                            <MapPin className="w-6 h-6" />
                            <Typography tag="p">Hai Phong, Viet Nam</Typography>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 flex justify-center items-center">
                                <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                            </div>
                            <Typography tag="p" className="text-gray-800 dark:text-graydark-800">Available for new projects, new jobs, new opportunities</Typography>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-1">
                        <IconWrapper link="mailto:doducduy.vietnam@gmail.com">
                            <Mail/>
                        </IconWrapper>
                        <IconWrapper link="tel:+84947948155">
                            <Phone/>
                        </IconWrapper>
                        <IconWrapper link="https://www.linkedin.com/in/doducduy-vietnam/">
                            <Linkedin />
                        </IconWrapper>
                        <IconWrapper link="https://www.facebook.com/ducduy99hp">
                            <Facebook />
                        </IconWrapper>
                        <IconWrapper link="https://github.com/duydd25031999">
                            <Github/>
                        </IconWrapper>
                    </div>
                </div>

                {/* Right Image */}
                <FileDownloadWrapper
                    href="/CV_DoDucDuy_FrontendDeveloper.pdf"
                    download="CV_DoDucDuy_FrontendDeveloper.pdf"
                    force
                >
                    <div className="relative shrink-0 w-[252px] h-[332px] lg:w-[252px] lg:h-[362px] transition-transform hover:-translate-y-1 duration-200">
                        <div className="absolute right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0 w-[252px] h-[312px] lg:w-[232px] lg:h-[342px] bottom-0 bg-gray-200 dark:bg-graydark-200"></div>
                        <div className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 top-0 z-20 bg-white dark:bg-gray-950 p-1.5">
                            <Image
                                src="/Hero.jpg" // Replace with your actual image path
                                alt="Duy's introduction"
                                className="min-w-[200px] w-[200px] h-[300px] lg:w-[220px] lg:h-[330px]"
                            />
                        </div>

                    </div>
                </FileDownloadWrapper>
            </div>

        </SectionLayout>
    );
};

export default HeroSection;
