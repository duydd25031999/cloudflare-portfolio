import React from "react";
import Typography from "@/components/Typography"; // Adjust the import path as needed
import { MapPin } from "lucide-react";
import { Github, Twitter, Figma } from "lucide-react";
import SectionLayout from "@/components/SectionLayout.jsx";
import IconWrapper from "@/components/IconWrapper.jsx";
import Image from "@/components/Image"; // example icons

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
                            Hi, I’m Sagar 👋
                        </Typography>

                        {/* Description */}
                        <Typography tag="p" variant="body2" className="text-gray-600 dark:text-graydark-600">
                            I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
                        </Typography>
                    </div>


                    {/* Location and Availability */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 text-gray-800 dark:text-graydark-800">
                            <MapPin className="w-6 h-6" />
                            <Typography tag="p">Ahmedabad, India</Typography>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 flex justify-center items-center">
                                <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                            </div>
                            <Typography tag="p" className="text-gray-800 dark:text-graydark-800">Available for new projects</Typography>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-1">
                        <IconWrapper link="github.com">
                            <Github/>
                        </IconWrapper>
                        <IconWrapper link="X.com">
                            <Twitter/>
                        </IconWrapper>
                        <IconWrapper link="figma.com">
                            <Figma/>
                        </IconWrapper>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative shrink-0 w-[280px] h-[320px] lg:w-[320px] lg:h-[360px] transition-transform hover:-translate-y-1 duration-200">
                    <div className="absolute left-1/2 lg:left-10 -translate-x-1/2 lg:translate-x-0 w-[280px] h-[280px] lg:h-[320px] top-10 bg-gray-200 dark:bg-graydark-200"></div>
                    <Image
                        src="/Hero.png" // Replace with your actual image path
                        alt="Sagar's profile"
                        className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 top-0 z-20 w-[240px] h-[280px] lg:w-[280px] lg:h-[320px]"
                    />
                </div>
            </div>

        </SectionLayout>
    );
};

export default HeroSection;
