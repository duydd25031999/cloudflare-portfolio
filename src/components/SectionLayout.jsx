import React from "react";
import Typography from "@/components/Typography.jsx";
import Tag from "@/components/Tag.jsx";

const SectionLayout = React.forwardRef(({ id, className, title, children, subtitle, ...props }, ref) => (
    <section id={id} className={`${className || ''}`} ref={ref} {...props}>
        <div className="mx-auto container">
            {title && (
                <Tag tag='h1'>
                    {title}
                </Tag>
            )}
            {subtitle && (
                <Typography tag="p" variant="subtitle" className="text-gray-600 dark:text-graydark-600 text-center">
                    {subtitle}
                </Typography>
            )}
            {children}
        </div>
    </section>
))

export default SectionLayout;