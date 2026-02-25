import { FEATURES } from './constants';

/** FeaturesA: Bento 网格布局，Launch UI 风格 */
export function FeaturesABento() {
  const [first, second, third, ...rest] = FEATURES;

  return (
    <section className="border-t border-slate-200 bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            核心能力矩阵
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            九大功能模块，构建完整的 AI 驱动内容创作生态系统
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* 大卡片 */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-indigo-100 bg-indigo-50/30 p-8 transition-shadow hover:shadow-lg hover:shadow-indigo-500/10">
              <div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${first.color ?? 'from-slate-600 to-slate-700'} text-white`}>
                  <first.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{first.title}</h3>
                <p className="mt-2 text-slate-600">{first.description}</p>
              </div>
            </div>
          </div>

          {/* 小卡片 */}
          <div className="flex flex-col gap-4">
            <div className={`flex-1 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 transition-shadow hover:shadow-md`}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${second.color ?? 'from-slate-500 to-slate-600'} text-white`}>
                <second.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{second.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{second.description}</p>
            </div>
            <div className="flex-1 rounded-2xl border border-amber-100 bg-amber-50/50 p-6 transition-shadow hover:shadow-md">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${third.color ?? 'from-slate-500 to-slate-600'} text-white`}>
                <third.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{third.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{third.description}</p>
            </div>
          </div>

          {/* 其余 3x2 网格 */}
          {rest.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md ${feature.bg ? `${feature.bg}/50` : 'bg-white'}`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color ?? 'from-slate-500 to-slate-600'} text-white`}>
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
