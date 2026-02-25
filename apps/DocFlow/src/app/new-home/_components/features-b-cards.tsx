import { FEATURES } from './constants';

/** FeaturesB: 均匀 3 列卡片 */
export function FeaturesBCards() {
  return (
    <section className="border-t border-slate-200 bg-slate-50/50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            一切为写作而生
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            从编辑、协到 AI 创作，一站式满足你的内容生产需求
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-2xl border border-slate-200 p-6 shadow-sm transition-all hover:shadow-md ${feature.bg ? `${feature.bg}/30` : 'bg-white'}`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color ?? 'from-slate-500 to-slate-600'} text-white`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
