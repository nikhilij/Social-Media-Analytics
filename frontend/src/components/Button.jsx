import React from 'react';

const Button = ({ 
    text, 
    onClick, 
    variant = 'primary', 
    size = 'md', 
    disabled = false,
    fullWidth = false,
    leftIcon = null,
    rightIcon = null,
    type = 'button',
    className = '',
    isLoading = false
}) => {
    // Base styles that apply to all buttons
    const baseStyles = "font-medium rounded focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors";
    
    // Variant styles
    const variantStyles = {
        primary: "bg-blue-500 hover:bg-blue-700 text-white focus:ring-blue-300",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-300",
        outline: "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-200",
        danger: "bg-red-500 hover:bg-red-700 text-white focus:ring-red-300"
    };
    
    // Size styles
    const sizeStyles = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg"
    };
    
    // Conditional styles
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
    const widthStyles = fullWidth ? "w-full" : "";
    
    // Combine all styles
    const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${widthStyles} ${className}`;
    
    return (
        <button
            type={type}
            className={buttonStyles}
            onClick={onClick}
            disabled={disabled || isLoading}
            aria-disabled={disabled || isLoading}
        >
            {isLoading ? (
                <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                </span>
            ) : (
                <span className="flex items-center justify-center">
                    {leftIcon && <span className="mr-2">{leftIcon}</span>}
                    {text}
                    {rightIcon && <span className="ml-2">{rightIcon}</span>}
                </span>
            )}
        </button>
    );
};

export default Button;