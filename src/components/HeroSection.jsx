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
                className="flex flex-row items-center justify-center gap-12 border w-[1200px] h-[630px]"
            >
                {/* Left Content */}
                <div className="flex flex-col gap-12 text-left max-w-sm">
                    {/* Heading */}
                    <div>
                        <Typography tag="h1" variant="heading-h1" className="text-gray-900 dark:text-graydark-900 mb-2 flex gap-2">
                            <span>Do Duc Duy</span>
                        </Typography>
                        <Typography tag="h1" variant="subtitle" className="text-gray-900 dark:text-graydark-900 mb-2 flex gap-2">
                            <span>Front-end Developer (VueJS & ReactJS)</span>
                        </Typography>

                        {/* Description */}
                        <Typography tag="p" variant="body2" className="text-gray-600 dark:text-graydark-600">
                            A driven Front-end Developer with over 5 years of experience in ReactJS and VueJS. I’m seeking to leverage my expertise in modern web technologies to build scalable and user-centric applications across domains like E-commerce, Cloud, and AI.
                        </Typography>
                    </div>


                    {/* Location and Availability */}
                    <div className="hidden flex-col gap-2">
                        <div className="flex items-center gap-3 text-gray-800 dark:text-graydark-800">
                            <MapPin className="w-6 h-6" />
                            <Typography tag="p">Hai Phong, Viet Nam</Typography>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 flex justify-center items-center">
                                <div className="relative w-3 h-3 rounded-full bg-[#10B981]">
                                    <div className="w-3 h-3 rounded-full bg-[#10B981] absolute top-0 left-0 animate-ping" />
                                </div>
                            </div>
                            <Typography tag="p" className="text-gray-800 dark:text-graydark-800">Available for new opportunities</Typography>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="hidden gap-1">
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
                    <div className="relative shrink-0 w-[252px] h-[332px] lg:w-[252px] lg:h-[362px] cursor-zoom-in">
                        {/*<div className="absolute right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0 w-[252px] h-[312px] lg:w-[232px] lg:h-[342px] bottom-0 bg-gray-200 dark:bg-graydark-200"></div>*/}
                        <div className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 top-0 z-20 bg-white dark:bg-gray-950 p-1.5 shadow-2xl">
                            <Image
                                src="/Hero.jpg" // Replace with your actual image path
                                width="220"
                                optimize={false}
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
