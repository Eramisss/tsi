import React from 'react';

const Text = ({
  children,
  variant = 'body1',
  color = 'default',
  align = 'left',
  className = '',
  as = null
}) => {
  const variantClasses = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold',
    subtitle1: 'text-lg',
    subtitle2: 'text-base',
    body1: 'text-base',
    body2: 'text-sm',
    caption: 'text-xs',
  };
  
  const colorClasses = {
    default: 'text-gray-900',
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    success: 'text-green-600',
    danger: 'text-red-600',
    warning: 'text-yellow-600',
    light: 'text-gray-300',
    white: 'text-white',
  };
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };
  
  const textClasses = `${variantClasses[variant]} ${colorClasses[color]} ${alignClasses[align]} ${className}`;
  
  const Component = as || {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  }[variant] || 'p';
  
  return (
    <Component className={textClasses}>
      {children}
    </Component>
  );
};

export default Text;