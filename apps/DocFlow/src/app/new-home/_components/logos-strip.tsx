import { LOGOS } from './constants';

const logoColors = ['text-sky-500', 'text-blue-600', 'text-emerald-600', 'text-amber-500', 'text-slate-700', 'text-cyan-500'];

/** Logos: 信任背书 Logo 条 */
export function LogosStrip() {
  return (
    <section className="border-t border-slate-200 bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-indigo-600">
          基于业界领先技术构建
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {LOGOS.map((name, i) => (
            <div
              key={name}
              className={`text-lg font-semibold transition-colors hover:opacity-80 ${logoColors[i % logoColors.length] ?? 'text-slate-500'}`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
