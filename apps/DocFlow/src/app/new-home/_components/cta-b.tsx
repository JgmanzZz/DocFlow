import Link from 'next/link';

import { SITE_CONFIG } from './constants';

/** CTAB: 分栏 CTA，左侧文案 + 右侧按钮 */
export function CTAB() {
  return (
    <section className="border-t border-slate-200 bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              立即开始使用 {SITE_CONFIG.name}
            </h2>
            <p className="mt-2 text-slate-300">免费开源，无需信用卡。几分钟内即可上手。</p>
          </div>
          <div className="flex shrink-0 gap-4">
            <Link
              href={SITE_CONFIG.dashboardUrl}
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors"
            >
              免费开始
            </Link>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
