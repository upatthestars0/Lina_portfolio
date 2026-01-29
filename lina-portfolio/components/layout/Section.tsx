// components/layout/Section.tsx

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    }

    export default function Section({ children, id, className = "" }: SectionProps) {
    return (
        <section 
        id={id} 
        className={`py-16 md:py-24 border-t border-gray-100 ${className}`}
        >
        {children}
        </section>
    );
}