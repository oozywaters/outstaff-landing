interface BenefitItemProps {
  title: string;
  description: string;
  icon?: string;
}

export default function BenefitItem({ title, description, icon = "✓" }: BenefitItemProps) {
  return (
    <div className="flex items-start space-x-4 p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl font-bold">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-zinc-50 mb-2">{title}</h4>
        <p className="text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
