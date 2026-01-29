// components/sections/About.tsx
import Section from "../layout/Section";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
    return (
        <Section id="about">
                <SectionHeading number="01" title="Technical Background" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p>
                            With 5 years in Biomedical Engineering, I bridge the gap between
                            clinical complexity and technical execution. I don’t just process data;
                            I understand the physiological nuances behind the signal—whether it’s
                            ultrasound artifacts or MRI sequences.
                        </p>
                        <p>
                            My approach pairs heavy-lifting Python backend work (signal processing & ML)
                            with modern product engineering. I build tools that are not just
                            mathematically sound, but clinically usable.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h3 className="text-sm font-mono text-gray-900 mb-4 uppercase tracking-widest">
                            Tech stack
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between italic">
                                <span className="text-gray-900 font-medium">ML & Research</span>
                                <span className="text-gray-500">Python, PyTorch, NumPy</span>
                            </li>
                            <li className="flex justify-between italic">
                                <span className="text-gray-900 font-medium">Product</span>
                                <span className="text-gray-500">Next.js, TypeScript, Tailwind</span>
                            </li>
                            <li className="flex justify-between italic">
                                <span className="text-gray-900 font-medium">Domain</span>
                                <span className="text-gray-500">DICOM, Signal Processing</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>
    );
}