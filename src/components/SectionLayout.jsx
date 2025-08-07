import React from "react";
import Typography from "@/components/Typography.jsx";
import Tag from "@/components/Tag.jsx";

const SectionLayout = React.forwardRef(({ id, className, title, children, subtitle, ...props }, ref) => (
    <section id={id} className={`py-16 lg:py-24 ${className || ''}`} ref={ref} {...props}>
        <div className="mx-auto container px-4 lg:px-8">
            {title && (
                <div className="flex flex-col items-center mb-12 gap-4">
                    <Tag tag='h1'>
                        {title}
                    </Tag>
                    {subtitle && (
                        <Typography tag="p" variant="subtitle" className="text-gray-600 dark:text-graydark-600 text-center">
                            {subtitle}
                        </Typography>
                    )}
                </div>
            )}

            {children}
        </div>
    </section>
))

export default SectionLayout;