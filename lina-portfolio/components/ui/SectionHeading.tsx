// components/ui/SectionHeading.tsx

interface Props {
    number: string;
    title: string;
    }

    export default function SectionHeading({ number, title }: Props) {
    return (
        <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sm text-emerald-600">{number}</span>
            <div className="h-px w-8 bg-emerald-200" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
            {title}
        </h2>
        </div>
    );
}