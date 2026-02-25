import { FEATURES } from './constants';

const iconColors = [
  'from-indigo-500 to-violet-500',
  'from-emerald-500 to-teal-500',
  'from-amber-500 to-orange-500',
  'from-blue-500 to-cyan-500',
  'from-rose-500 to-pink-500',
  'from-violet-500 to-purple-500',
  'from-cyan-500 to-sky-500',
  'from-orange-500 to-amber-500',
];

/** FeaturesC: 左右交替列表布局 */
export function FeaturesCList() {
  return (
    <section className="border-t border-slate-200 bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            专为团队协作设计
          </h2>
          <p className="mt-4 text-lg text-slate-600">每个功能都经过精心打磨，只为更好的写作体验</p>
        </div>

        <div className="mt-16 space-y-12">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col gap-8 md:flex-row md:items-center ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex flex-1 justify-center md:justify-end">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${iconColors[i] ?? 'from-slate-500 to-slate-600'} text-white`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
