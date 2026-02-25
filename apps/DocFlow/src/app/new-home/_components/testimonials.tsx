import { TESTIMONIALS } from './constants';

import { cn } from '@/utils/cn';

/** Testimonials: 用户评价卡片 */
export function Testimonials() {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-indigo-50/30 to-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">用户评价</h2>
          <p className="mt-4 text-lg text-slate-600">听听他们怎么说</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => {
            const colors = [
              'from-indigo-500 to-violet-500',
              'from-amber-500 to-orange-500',
              'from-emerald-500 to-teal-500',
            ];
            const avatarColor = colors[i % colors.length];

            return (
              <blockquote
                key={t.author}
                className={cn(
                  'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm',
                  'transition-shadow hover:shadow-md hover:border-indigo-100',
                )}
              >
                <p className="text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${avatarColor} text-sm font-semibold text-white`}
                  >
                    {t.author.slice(0, 1)}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-slate-900">{t.author}</cite>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
