import { useEffect, useState } from 'react'
import { Menu, Sun, Moon } from 'lucide-react'
import Link from './Link'
import Button from './Button'
import IconWrapper from './IconWrapper'
import Typography from './Typography'
import MobileSidebar from './MobileSidebar'
import FileDownloadWrapper from "@/components/FileDownloadWrapper.jsx";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isDark, setIsDark] = useState(false)

    const navItems = [
        { href: '#about', label: 'About' },
        { href: '#stack', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ]

    // Load dark mode from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const enableDark = saved === 'dark' || (!saved && prefersDark)

        document.documentElement.classList.toggle('dark', enableDark)
        setIsDark(enableDark)
    }, [])

    // Toggle dark/light mode
    const toggleTheme = () => {
        const next = !isDark
        document.documentElement.classList.toggle('dark', next)
        localStorage.setItem('theme', next ? 'dark' : 'light')
        setIsDark(next)
    }

    return (
        <header className="sticky top-0 z-30 py-4 backdrop-blur border-b border-white dark:border-gray-800">
            <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
                {/* Logo */}
                <Link href="/" variant="menu" target="_self">
                    <Typography
                        tag="span"
                        className="text-gray-900 dark:text-white whitespace-nowrap text-4xl leading-none"
                        weight={700}
                    >
                        &lt;Dx3 /&gt;
                    </Typography>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link target="_self" key={item.href} href={item.href} variant="menu">
                            <Typography
                                tag="span"
                                variant="body2"
                            >
                                {item.label}
                            </Typography>
                        </Link>
                    ))}

                    {/* Divider */}
                    <div className="h-6 w-px bg-gray-100 dark:bg-graydark-100" />

                    {/* Theme Toggle */}
                    <IconWrapper aria-label="change-theme" onClick={toggleTheme}>
                        {isDark ? (<Moon />) : (<Sun/>)}
                    </IconWrapper>

                    {/* Button */}
                    <FileDownloadWrapper
                        href="/CV_DoDucDuy_FrontendDeveloper.pdf"
                        download="CV_DoDucDuy_FrontendDeveloper.pdf"
                        force
                    >
                        <Button>Download CV</Button>
                    </FileDownloadWrapper>
                </div>

                {/* Mobile Menu Icon */}
                <IconWrapper
                    className="lg:hidden ml-auto"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu className="w-6 h-6 text-gray-700 dark:text-white" />
                </IconWrapper>
            </div>

            {/* Mobile Sidebar */}
            <MobileSidebar open={isOpen} setOpen={setIsOpen} navItems={navItems} dark={isDark} toggleTheme={toggleTheme} />
        </header>
    )
}
