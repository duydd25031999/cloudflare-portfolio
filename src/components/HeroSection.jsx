import React from "react";
import Typography from "@/components/Typography"; // Adjust the import path as needed
import { MapPin } from "lucide-react";
import { Github, Twitter, Clipboard } from "lucide-react";
import SectionLayout from "@/components/SectionLayout.jsx"; // example icons

const HeroSection = () => {
    return (
        <SectionLayout
            id="hero"
        >
            <div
                className="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12 py-12 lg:py-20"
            >
                {/* Left Content */}
                <div className="flex flex-col gap-6 text-center lg:text-left">
                    {/* Heading */}
                    <Typography tag="h1" className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                        Hi, I’m Sagar 👋
                    </Typography>

                    {/* Description */}
                    <Typography tag="p" className="text-base lg:text-lg text-gray-600 dark:text-gray-300">
                        I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
                    </Typography>

                    {/* Location and Availability */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start gap-2 sm:gap-6">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <MapPin className="w-4 h-4" />
                            <Typography tag="span">Ahmedabad, India</Typography>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                            <Typography tag="span">Available for new projects</Typography>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 justify-center lg:justify-start mt-2">
                        <a href="#" aria-label="GitHub" className="text-gray-700 dark:text-gray-300 hover:text-primary">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Twitter" className="text-gray-700 dark:text-gray-300 hover:text-primary">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Clipboard" className="text-gray-700 dark:text-gray-300 hover:text-primary">
                            <Clipboard className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-48 h-48 lg:w-64 lg:h-64 shrink-0">
                    <div className="absolute inset-0 translate-x-2 translate-y-2 border-4 border-gray-100 dark:border-gray-800 z-0"></div>
                    <img
                        src="/images/profile.jpg" // Replace with your actual image path
                        alt="Sagar's profile"
                        className="relative z-10 w-full h-full object-cover rounded shadow-md"
                    />
                </div>
            </div>

        </SectionLayout>
    );
};

export default HeroSection;
