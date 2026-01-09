// components/service-card.tsx
interface ServiceProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceProps) {
  return (
    <div className="p-6 border rounded-xl bg-white">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}