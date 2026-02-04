interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ number, title, description, features }: ServiceCardProps) {
  return (
    <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
      {/* Number badge */}
      <div className="absolute top-6 right-6 text-7xl font-mono font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors">
        {number.toString().padStart(2, '0')}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-zinc-50 group-hover:text-amber-400 transition-colors">
          {title}
        </h3>

        <p className="text-zinc-400 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-zinc-500">
              <span className="text-amber-400 mr-2 mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
