import Typography from '@/components/Typography';
import Link from '@/components/Link';
import SectionLayout from '@/components/SectionLayout';
import IconWrapper from '@/components/IconWrapper';
import { Mail, Phone, Copy, Github, Twitter, Figma } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <SectionLayout
            id="contact"
            title="Get in touch"
            subtitle={
                <span>
                    What’s next? Feel free to reach out to me if you're looking for <br className="hidden lg:block" /> a developer, have a query, or simply want to connect.
                </span>
            }
        >
            {/* Contact Info */}
            <div className="relative flex flex-col gap-4 mb-12">
                {/* Feedback */}
                {copied && (
                    <Typography
                        tag="p"
                        variant="body3"
                        className="absolute top-0 left-1/2 -translate-x-1/2 text-green-500 transition-opacity">
                        {`Copied ${copied} to clipboard!`}
                    </Typography>
                )}
                <div className="flex justify-center items-center gap-5">
                    <Link
                        variant="menu"
                        href="mailto:reachsagarshah@gmail.com"
                        className="flex items-center gap-5"
                    >
                        <Mail className="w-8 h-8" />
                        <Typography tag="span" variant="heading-h2" weight={600}>reachsagarshah@gmail.com</Typography>
                    </Link>
                    <IconWrapper  onClick={() => handleCopy('reachsagarshah@gmail.com')}>
                        <Copy/>
                    </IconWrapper>

                </div>

                <div className="flex justify-center items-center gap-5">
                    <Link
                        variant="menu"
                        href="tel:+918980500565"
                        className="flex items-center gap-5"
                    >
                        <Phone className="w-8 h-8"  />
                        <Typography tag="span" variant="heading-h2" weight={600}>+91 8980500565</Typography>
                    </Link>
                    <IconWrapper  onClick={() => handleCopy('+918980500565')}>
                        <Copy/>
                    </IconWrapper>
                </div>
            </div>

            <div>
                {/* Social Links */}
                <Typography tag="p" variant="body2" className="mb-4 text-center text-gray-600 dark:text-graydark-600">
                    You may also find me on these platforms!
                </Typography>
                <div className="flex items-center justify-center gap-1">
                    <IconWrapper link="https://github.com/sagarshah">
                        <Github />
                    </IconWrapper>
                    <IconWrapper link="https://twitter.com/sagarshah">
                        <Twitter />
                    </IconWrapper>
                    <IconWrapper link="https://dev.to/sagarshah">
                        <Figma />
                    </IconWrapper>
                </div>
            </div>
        </SectionLayout>
    );
};

export default ContactSection;
