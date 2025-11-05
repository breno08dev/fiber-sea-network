import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export default function ValueCard({
  icon: Icon,
  title,
  description,
  delay,
}: ValueCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`bg-base-white rounded-2xl p-8 text-center transition-all duration-1000 ease-out transform hover:-translate-y-2 border-2 border-border-color shadow-lg
                  ${
                    isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
    >
      <div className="flex justify-center mb-6">
        <div className="bg-primary-light p-4 rounded-full">
          <Icon className="w-10 h-10 text-primary-dark drop-shadow-[0_0_5px_rgba(0,90,156,0.3)]" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-base-text">{title}</h3>
      <p className="text-base-text-secondary text-lg">{description}</p>
    </div>
  );
}