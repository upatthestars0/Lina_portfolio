// components/sections/Hero.tsx

export default function Hero() {
    return (
        <section className="py-24 md:py-32">
        <div className="max-w-3xl"> 
            {/* We keep the max-width narrow to ensure readability (60-75 characters per line) */}
            
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-6">
            Lina Tlemcani, aspiring MedTech startup founder.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Biomedical Engineer specialised in computing. I build tools that 
            bridge the gap between clinical user needs and signal processing / machine learning, 
            prioritising usability, explainability, and interpretability.
            </p>

            <div className="flex items-center gap-4 text-sm font-mono text-gray-500">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            Currently exploring: scalable inference for diagnostic imaging
            </div>
        </div>
        </section>
    )
}