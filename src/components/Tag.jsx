import Typography from "@/components/Typography.jsx";
import React from "react";

const Tag = React.forwardRef(({
        children,
        tag = 'p',
        className = '',
        ...props
  }, ref) => {
    const Component = tag;
    return (
        <div className={`flex justify-center ${className}`} ref={ref} {...props}>
            <Component className="px-5 py-1 rounded-xl bg-gray-200 dark:bg-graydark-200">
                <Typography tag="span" variant="body3" className="text-gray-600 dark:text-graydark-600">
                    {children}
                </Typography>
            </Component>
        </div>
    )
});

export default Tag;