// src/components/Link.jsx
import React from 'react'
import PropTypes from 'prop-types'
import {LINK_VARIANTS} from "@/utils/component.config.js";

const Link = React.forwardRef(({ href, target = '_blank', variant = 'normal', children, className = '', ...props }, ref) => {
    return (
        <a
            ref={ref}
            href={href}
            target={target}
            className={`
                transition-colors duration-150 
                text-gray-600 hover:text-gray-900 active:text-gray-600
                dark:text-graydark-600 dark:hover:text-graydark-900 dark:active:text-graydark-600 
                ${LINK_VARIANTS[variant] || ''} ${className}
            `}
            {...props}
        >
            {children}
        </a>
    )
})

Link.propTypes = {
    href: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['normal', 'menu']),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Link;
