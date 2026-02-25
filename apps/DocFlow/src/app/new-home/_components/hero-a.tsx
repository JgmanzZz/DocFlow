import Link from 'next/link';

import { SITE_CONFIG } from './constants';

const btnPrimary =
  'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors';
const btnOutline =
  'inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors';

/** HeroA: 极简居中，白底，大标题 */
export function HeroA() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          {SITE_CONFIG.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          基于 Tiptap + Yjs 构建的智能协作编辑器，集成 AI 续写、RAG 知识库检索、AI
          播客生成。支持多人实时协作，让写作更高效。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={SITE_CONFIG.dashboardUrl} className={btnPrimary}>
            免费开始
          </Link>
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={btnOutline}
          >
            查看 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
