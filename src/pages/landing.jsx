import React from "react";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import AboutSection from "@/components/AboutSection.jsx";
import StackSection from "@/components/StackSection.jsx";
import ExperienceSection from "@/components/ExperienceSection.jsx";
import ContactSection from "@/components/ContactSection.jsx";

export default function LandingPage() {
    return (
        <div className="min-h-[100vh] bg-white dark:bg-gray-950 flex flex-col">
            <Header />
            <main className="flex flex-col">
                <HeroSection />
                <AboutSection />
                <StackSection />
                <ExperienceSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    )
}