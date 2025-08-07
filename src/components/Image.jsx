import React from "react";

const Image = React.forwardRef(
    ({ className = "", ...props }, ref) => {
        return (
            <img
                ref={ref}
                className={`object-cover ${className}`}
                {...props}
            />
        );
    }
);

export default Image;