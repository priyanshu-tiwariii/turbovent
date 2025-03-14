// components/Card.tsx
import Link from "next/link";

interface CardProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

export function Card({ href, title, children }: CardProps) {
  return (
    <Link
      href={href}
      className="group rounded-lg  border-transparent px-6 py-5 transition-all duration-300 hover:shadow-lg hover:border-indigo-500/20 hover:bg-gray-800/40 backdrop-blur-sm"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="mb-3 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500">
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 text-sm text-gray-400">{children}</p>
    </Link>
  );
}