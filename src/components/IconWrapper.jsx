// src/components/IconWrapper.jsx
import React from 'react'
import PropTypes from 'prop-types'

const IconWrapper = React.forwardRef(({ link = '', className = '', children, ...props }, ref) => {
    const Component = link ? 'a' : 'button';
    return (
        <Component
            href={link || undefined}
            target={link ? '_blank' : undefined}
            className={`
                w-9 h-9 lg:w-11 lg:h-11 p-1.5 inline-flex items-center justify-center rounded-lg transition-colors duration-150 cursor-pointer
                text-gray-600 dark:text-graydark-600
                hover:text-gray-700 hover:bg-gray-100 dark:hover:text-graydark-700 dark:hover:bg-graydark-100  
                active:text-gray-600 active:bg-gray-200 dark:active:text-graydark-600 dark:active:bg-graydark-200  
                ${className}
        `} {...props}>
            {children}
        </Component>
    )
})

IconWrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default IconWrapper;
