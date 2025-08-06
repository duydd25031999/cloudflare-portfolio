// src/components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
                                   children,
                                   type = 'button',
                                   onClick,
                                   className = '',
                                   ...props
                               }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                px-4 py-1.5 rounded-xl transition-colors duration-150 cursor-pointer
                bg-gray-900 text-gray-50 
                hover:bg-gray-700 active:bg-gray-800
                dark:bg-graydark-900 dark:text-graydark-50 
                dark:hover:bg-graydark-700 dark:active:bg-graydark-800
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    className: PropTypes.string,
};
