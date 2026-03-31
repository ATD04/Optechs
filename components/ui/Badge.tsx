interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 ${className}`}>
            {children}
        </span>
    );
}
