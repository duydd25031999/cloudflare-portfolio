import React from "react";
import {transformImageSize} from "@/utils/image.js";

const Image = React.forwardRef(
    ({ className = "", original = false, src, optimize = false, width, height, ...props }, ref) => {
        const baseClass = original ? "" : "object-cover object-contain";
        let imgSrc = src;
        if (optimize) {
            imgSrc = transformImageSize({
                src: imgSrc,
                width,
                height,
            });
        }
        return (
            <img
                ref={ref}
                className={`${baseClass} ${className}`}
                src={imgSrc}
                {...props}
            />
        );
    }
);

export default Image;