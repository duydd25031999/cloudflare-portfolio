// src/components/Typography.jsx
import React from 'react';
import PropTypes from 'prop-types';
import {TYPOGRAPHY_VARIANTS, FONT_WEIGHTS} from '@/utils/component.config.js';

export default function Typography({
                                       tag = 'p',
                                       variant = '',
                                       weight = 400,
                                       className = '',
                                       children,
                                       ...rest
                                   }) {
    const Component = tag;
    const variantClass = TYPOGRAPHY_VARIANTS[variant.toLowerCase()] || '';
    const weightClass = FONT_WEIGHTS[weight] || '';

    return (
        <Component
            className={`${variantClass} ${weightClass} ${className}`.trim()}
            {...rest}
        >
            {children}
        </Component>
    );
}

Typography.propTypes = {
    tag: PropTypes.string,
    variant: PropTypes.oneOf([
        'heading-h1', 'heading-h2', 'heading-h3',
        'subtitle', 'body1', 'body2', 'body3',
    ]),
    weight: PropTypes.oneOf([400, 500, 600, 700]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    variantColor: PropTypes.string,
};
