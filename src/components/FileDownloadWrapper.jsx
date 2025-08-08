import React from "react";

const FileDownloadWrapper = React.forwardRef(
    ({ href, filename, className = "", force = false, onDownloaded, children }, ref) => {
        const handleClick = async (e) => {
            if (!force) return; // let the normal anchor do its thing

            e.preventDefault();
            try {
                const res = await fetch(href, { credentials: "same-origin" });
                if (!res.ok) throw new Error(`Failed to fetch file: ${res.status}`);
                const blob = await res.blob();
                const url = window.URL.createObjectURL(blob);

                const a = document.createElement("a");
                a.href = url;
                a.download = filename || href.split("/").pop() || "download.pdf";
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
                onDownloaded?.();
            } catch (err) {
                console.error(err);
            }
        };

        return (
            <a
                ref={ref}
                href={href}
                download={filename || ""}
                className={className}
                onClick={handleClick}
            >
                {children}
            </a>
        );
    }
);

export default FileDownloadWrapper;
