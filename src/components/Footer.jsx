import Typography from "@/components/Typography";
import Link from "@/components/Link";
import IconWrapper from "@/components/IconWrapper";
import { Copyright } from "lucide-react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-graydark-50 py-6 px-2">
            <div className="container mx-auto flex justify-center items-center gap-2 text-gray-600 dark:text-graydark-600">
                <Copyright className="w-4 h-4" />
                <Typography tag="p" variant="body3">
                    {year} |{' '}
                    <Link href="https://your-site.com/design">Designed</Link>{' '}
                    and{' '}
                    <Link href="https://your-site.com/code">coded</Link>{' '}
                    coded with ❤️️ by Sagar Shah
                </Typography>
            </div>
        </footer>
    );
};

export default Footer;
