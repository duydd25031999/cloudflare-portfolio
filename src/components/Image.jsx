import React from "react";

const Image = React.forwardRef(
    ({ className = "", original = false , ...props }, ref) => {
        const baseClass = original ? "" : "object-cover object-contain";
        return (
            <img
                ref={ref}
                className={`${baseClass} ${className}`}
                {...props}
            />
        );
    }
);

export default Image;