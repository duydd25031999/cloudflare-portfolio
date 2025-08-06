// src/components/MobileSidebar.jsx
import { X, Sun, Moon } from 'lucide-react'
import Link from './Link'
import Button from './Button'
import IconWrapper from './IconWrapper'
import Typography from "@/components/Typography.jsx";

export default function MobileSidebar({ open, setOpen, navItems, dark, toggleTheme }) {
    return (
        <aside
            className={`fixed inset-0 z-50 h-[100vh] transition-transform duration-300 ${
                open ? 'translate-x-0 flex' : 'translate-x-full hidden pointer-events-none'
            }`}
        >
            {/* Overlay */}
            <div
                className="flex-1 bg-gray-900/10 dark:bg-graydark-900/10 backdrop-blur-sm"
                onClick={() => setOpen(false)}
            />

            {/* Sidebar content */}
            <div className="w-[320px] bg-white dark:bg-gray-950 h-full flex flex-col shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-4">
                    <Link
                        href="/"
                        className="whitespace-nowrap"
                        variant="menu"
                    >
                        <Typography
                            tag="span"
                            variant="heading-h3"
                            weight={700}
                            className="text-gray-900 dark:text-graydark-900"
                        >
                            &lt;SS /&gt;
                        </Typography>
                    </Link>
                    <IconWrapper
                        size="md"
                        aria-label="Close menu"
                        onClick={() => setOpen(false)}
                    >
                        <X />
                    </IconWrapper>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-4 border-t border-b border-gray-100 dark:border-graydark-100 p-4">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} variant="menu">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="p-4">
                    {/* Theme toggle */}
                    <div className="flex items-center justify-between">
                        <Typography
                            tag="p"
                            variant="body2"
                            weight={400}
                            className="text-gray-600 dark:text-graydark-600"
                        >
                            Switch Theme
                        </Typography>
                        {/* Theme Toggle */}
                        <IconWrapper onClick={toggleTheme}>
                            {dark ? (<Moon />) : (<Sun/>)}
                        </IconWrapper>
                    </div>

                    {/* Download button */}
                    <div className="mt-4">
                        <Button className="w-full">Download CV</Button>
                    </div>
                </div>
            </div>
        </aside>
    )
}
