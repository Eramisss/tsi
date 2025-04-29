import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'medium',
  className = ''
}) => {
  const baseClasses = 'font-medium rounded focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-200';
  
  // Варианты стилей кнопок
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
  };
  
  // Размеры кнопок
  const sizeClasses = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}

      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;