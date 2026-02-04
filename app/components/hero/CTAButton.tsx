interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({
  children,
  variant = 'primary',
  onClick,
  className = ''
}: CTAButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105";

  const variants = {
    primary: "bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20",
    secondary: "border-2 border-zinc-700 hover:border-amber-400 text-zinc-50 hover:text-amber-400"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
