import Link from 'next/link';

import { SITE_CONFIG, STATS } from './constants';

const btnPrimary =
  'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors';
const btnOutline =
  'inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors';

/** HeroB: 带 Badge + 数据统计，Launch UI 风格 */
export function HeroB() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          基于 Tiptap + Yjs 构建
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          {SITE_CONFIG.name}
          <span className="block text-slate-600">{SITE_CONFIG.tagline}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          专业的智能协作编辑器，AI 续写、实时协作、知识库检索一应俱全。
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-slate-600">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-slate-900 sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={SITE_CONFIG.dashboardUrl} className={btnPrimary}>
            开始创作
          </Link>
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={btnOutline}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
