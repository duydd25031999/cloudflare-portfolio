// src/components/Link.jsx
import React from 'react'
import PropTypes from 'prop-types'

export default function Link({ href, variant = 'normal', children, className = '', ...props }) {

    const variants = {
        normal: 'underline',
        menu: 'no-underline',
    }

    return (
        <a
            href={href}
            className={`
                transition-colors duration-150 
                text-gray-600 hover:text-gray-900 active:text-gray-600
                dark:text-graydark-600 dark:hover:text-graydark-900 darkactive:text-graydark-600 
                ${variants[variant]} ${className}
            `}
            {...props}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['normal', 'menu']),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}
