// components/hero.tsx - Check this file
export default function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      {/* Make sure there's no <Navbar /> here */}
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}