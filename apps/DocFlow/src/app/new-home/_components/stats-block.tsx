import { STATS } from './constants';

const statColors = ['text-indigo-600', 'text-amber-600', 'text-emerald-600'];

/** Stats: 数据统计块 */
export function StatsBlock() {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-indigo-50/20 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div
                className={`text-4xl font-bold sm:text-5xl ${statColors[i] ?? 'text-slate-900'}`}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
