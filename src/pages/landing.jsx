import React from "react";
import Header from "@/components/Header.jsx";

export default function LandingPage() {
    return (
        <div className="min-h-[100vh] bg-white dark:bg-gray-950 flex flex-col">
            <Header />
            <main className="h-[2000px]">
                This is main
            </main>
            <footer>
                This is footer
            </footer>
        </div>
    )
}