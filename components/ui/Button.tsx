import React from 'react';
import { ButtonVariant } from '@/types';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  onClick,
  type = 'button'
}) => {
  const baseStyles = 'font-medium rounded focus:outline-none transition duration-300';
  
  const variantStyles = {
    primary: 'bg-show-orange hover:bg-orange-500 text-white py-2 px-4',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4',
    outline: 'border border-show-orange text-show-orange hover:bg-show-orange hover:text-white py-2 px-4'
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};