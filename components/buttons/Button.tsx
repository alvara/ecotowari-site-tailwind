import { ReactNode } from 'react';

export interface IButtonProps {
  children?: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  fullWidth?: boolean;
  color?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'white';
  className?: string;
}

export default function Button({
  children,
  variant = 'outlined',
  fullWidth,
  color = 'primary',
  className,
}: IButtonProps) {
  // determine classes for button variant
  function selectVariant() {
    switch (variant) {
      case 'contained':
        return 'btn btn-primary';
      case 'outlined':
        return 'btn btn-outline';
      case 'text':
        return 'btn btn-ghost';
      default:
        return 'btn btn-primary';
    }
  }

  // determine classes for button color
  function selectColor() {
    switch (color) {
      case 'primary':
        return 'btn btn-primary';
      case 'secondary':
        return 'btn btn-secondary';
      case 'accent':
        return 'btn btn-accent';
      case 'ghost':
        return 'btn btn-ghost';
      case 'white':
        return 'btn btn-white text-white hover:bg-white hover:text-primary';
      default:
        return 'btn btn-primary';
    }
  }

  return (
    <div
      className={`btn w-60 rounded-full ${selectVariant()} ${selectColor()} ${
        fullWidth && 'btn-block'
      } ${className}`}
    >
      {children}
    </div>
  );
}
