import Typography from '@/components/Typography';
import Link from '@/components/Link';
import SectionLayout from '@/components/SectionLayout';
import IconWrapper from '@/components/IconWrapper';
import {Mail, Phone, Copy, Github, Facebook, Linkedin} from 'lucide-react';
import React, { useState } from 'react';

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
            className="bg-gray-50 dark:bg-graydark-50"
        >
            {/* Contact Info */}
            <div className="relative flex flex-col gap-4 mb-12">
                {/* Feedback */}
                {copied && (
                    <Typography
                        tag="p"
                        variant="body3"
                        className="absolute -top-5 left-1/2 -translate-x-1/2 text-green-500 transition-opacity">
                        {`Copied ${copied} to clipboard!`}
                    </Typography>
                )}
                <div className="flex justify-center items-center gap-5">
                    <Link
                        variant="menu"
                        href="mailto:doducduy.vietnam@gmail.com"
                        className="flex items-center gap-5"
                    >
                        <Mail className="w-8 h-8" />
                        <Typography tag="span" variant="heading-h2" weight={600}>doducduy.vietnam@gmail.com</Typography>
                    </Link>
                    <IconWrapper  onClick={() => handleCopy('doducduy.vietnam@gmail.com')}>
                        <Copy/>
                    </IconWrapper>

                </div>

                <div className="flex justify-center items-center gap-5">
                    <Link
                        variant="menu"
                        href="tel:+84947948155"
                        className="flex items-center gap-5"
                    >
                        <Phone className="w-8 h-8"  />
                        <Typography tag="span" variant="heading-h2" weight={600}>+84 947948155</Typography>
                    </Link>
                    <IconWrapper  onClick={() => handleCopy('+84947948155')}>
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
                    <IconWrapper link="https://github.com/duydd25031999">
                        <Github/>
                    </IconWrapper>
                    <IconWrapper link="https://www.facebook.com/ducduy99hp">
                        <Facebook />
                    </IconWrapper>
                    <IconWrapper link="https://www.linkedin.com/in/doducduy-vietnam/">
                        <Linkedin />
                    </IconWrapper>
                </div>
            </div>
        </SectionLayout>
    );
};

export default ContactSection;
