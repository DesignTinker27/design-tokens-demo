import React from 'react';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClasses = 'qualia-btn';
  const variantClass = `qualia-btn--${variant}`;
  const sizeClass = `qualia-btn--${size}`;
  const fullWidthClass = fullWidth ? 'qualia-btn--full' : '';
  const disabledClass = disabled ? 'qualia-btn--disabled' : '';
  
  const classes = [
    baseClasses,
    variantClass,
    sizeClass,
    fullWidthClass,
    disabledClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;