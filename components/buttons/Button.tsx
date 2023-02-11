import { ReactNode } from 'react';

export interface IButtonProps {
  children?: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  fullWidth?: boolean;
  color?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'white';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'btn-sm' | 'btn-md' | 'btn-lg';
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'outlined',
  fullWidth = false,
  color = 'primary',
  className,
  size = 'btn-lg',
  type = 'button',
  onClick,
}: IButtonProps) {
  // determine classes for button variant
  function selectVariant() {
    switch (variant) {
      case 'contained':
        return 'btn-accent';
      case 'outlined':
        return 'btn-outline';
      case 'text':
        return 'btn-ghost';
      default:
        return 'btn-primary';
    }
  }

  // determine classes for button color
  function selectColor() {
    switch (color) {
      case 'primary':
        return 'btn-accent';
      case 'secondary':
        return 'btn-secondary';
      case 'accent':
        return 'btn-accent';
      case 'ghost':
        return 'btn-ghost';
      case 'white':
        return 'btn-white text-white hover:bg-white hover:text-primary';
      default:
        return 'btn-accent';
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${size} flex cursor-pointer items-center justify-between rounded-full font-semibold text-white duration-300 ${selectVariant()} ${selectColor()} ${
        fullWidth && 'btn-block'
      } ${className}`}
    >
      <span className="mx-4 flex-1 text-center">{children}</span>
      <span className="text-2xl">›</span>
    </button>
  );
}
