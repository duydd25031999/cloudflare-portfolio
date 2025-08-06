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
        <SectionLayout id="contact" title="Get in touch" className="text-center">
            <Typography tag="p" className="text-muted-foreground mb-6 max-w-xl mx-auto">
                What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
            </Typography>

            {/* Contact Info */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 group">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <Link
                        href="mailto:reachsagarshah@gmail.com"
                        className="font-semibold text-lg hover:underline transition-all"
                    >
                        reachsagarshah@gmail.com
                    </Link>
                    <Copy
                        onClick={() => handleCopy('reachsagarshah@gmail.com')}
                        className="w-5 h-5 cursor-pointer text-muted-foreground hover:text-primary transition-all"
                    />
                </div>

                <div className="flex items-center gap-2 group">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <Link
                        href="tel:+918980500565"
                        className="font-semibold text-lg hover:underline transition-all"
                    >
                        +91 8980500565
                    </Link>
                    <Copy
                        onClick={() => handleCopy('+918980500565')}
                        className="w-5 h-5 cursor-pointer text-muted-foreground hover:text-primary transition-all"
                    />
                </div>
            </div>

            {/* Social Links */}
            <Typography tag="p" className="text-muted-foreground mb-4">
                You may also find me on these platforms!
            </Typography>
            <div className="flex items-center justify-center gap-6">
                <IconWrapper>
                    <Link href="https://github.com/sagarshah">
                        <Github className="w-5 h-5 hover:scale-110 transition-transform" />
                    </Link>
                </IconWrapper>
                <IconWrapper>
                    <Link href="https://twitter.com/sagarshah">
                        <Twitter className="w-5 h-5 hover:scale-110 transition-transform" />
                    </Link>
                </IconWrapper>
                <IconWrapper>
                    <Link href="https://dev.to/sagarshah">
                        <Figma className="w-5 h-5 hover:scale-110 transition-transform" />
                    </Link>
                </IconWrapper>
            </div>

            {/* Feedback */}
            {copied && (
                <p className="text-sm text-green-500 mt-4 transition-opacity">{`Copied ${copied} to clipboard!`}</p>
            )}
        </SectionLayout>
    );
};

export default ContactSection;
