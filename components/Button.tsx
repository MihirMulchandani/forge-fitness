import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "px-6 py-3 font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brandRed text-white hover:bg-red-700 hover:shadow-lg shadow-red-900/20",
    secondary: "bg-brandBlue text-white hover:bg-blue-700 hover:shadow-lg",
    outline: "border-2 border-brandRed text-brandRed hover:bg-brandRed hover:text-white",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] hover:shadow-lg"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;