import Link from 'next/link';

import { SITE_CONFIG } from './constants';

/** CTAA: 居中简洁 CTA */
export function CTAA() {
  return (
    <section className="border-t border-slate-200 bg-white px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          准备好开始了吗？
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          免费注册，立即体验 {SITE_CONFIG.name} 带来的高效写作体验
        </p>
        <div className="mt-8">
          <Link
            href={SITE_CONFIG.dashboardUrl}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 hover:from-indigo-500 hover:to-violet-500 transition-colors"
          >
            免费开始
          </Link>
        </div>
      </div>
    </section>
  );
}
