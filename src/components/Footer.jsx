import Typography from "@/components/Typography";
import Link from "@/components/Link";
import IconWrapper from "@/components/IconWrapper";
import { Copyright } from "lucide-react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-background py-6">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-2 text-center lg:justify-between">
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <IconWrapper className="text-base">
                        <Copyright
                        />
                    </IconWrapper>
                    <Typography tag="span">{year}</Typography>
                </div>

                <Typography
                    tag="p"
                    className="text-muted-foreground text-sm flex flex-wrap items-center gap-1"
                >
                    <Link
                        href="https://your-site.com/design"
                        className="underline underline-offset-2 hover:text-foreground"
                    >
                        Designed
                    </Link>
                    and
                    <Link
                        href="https://your-site.com/code"
                        className="underline underline-offset-2 hover:text-foreground"
                    >
                        coded
                    </Link>
                    with
                    <span className="text-red-500">❤️</span>
                    by Sagar Shah
                </Typography>
            </div>
        </footer>
    );
};

export default Footer;
