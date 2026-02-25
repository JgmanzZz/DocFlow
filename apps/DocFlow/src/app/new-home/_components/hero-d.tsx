import Link from 'next/link';
import { Sparkles, ArrowRight, FileEdit, Zap, Bot } from 'lucide-react';

import { SITE_CONFIG } from './constants';

/**
 * HeroD: 渐变首屏，彩色装饰，区别于黑白极简风格
 * 使用 indigo-amber 渐变、浮动装饰元素、彩色 CTA
 */
export function HeroD() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-amber-50/60">
      {/* 装饰性背景元素 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="absolute right-1/3 top-20 h-40 w-40 rounded-full bg-violet-200/30 blur-2xl" />
        <div className="absolute bottom-1/4 left-1/4 h-24 w-24 rounded-full bg-emerald-200/40 blur-xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <div className="text-center">
          {/* 彩色 Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium text-indigo-700">基于 Tiptap + Yjs · AI 驱动</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-slate-900">{SITE_CONFIG.name}</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-amber-600 bg-clip-text text-transparent">
              {SITE_CONFIG.tagline}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            智能协作编辑器，集成 AI 续写、实时多人协作、RAG 知识库。 让写作更高效，让灵感触手可及。
          </p>

          {/* 快捷能力展示 */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-sm ring-1 ring-slate-200/60">
              <FileEdit className="h-4 w-4 text-indigo-500" />
              富文本编辑
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-sm ring-1 ring-slate-200/60">
              <Zap className="h-4 w-4 text-amber-500" />
              实时协作
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-sm ring-1 ring-slate-200/60">
              <Bot className="h-4 w-4 text-violet-500" />
              AI 续写
            </span>
          </div>

          {/* 彩色 CTA 按钮 */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={SITE_CONFIG.dashboardUrl}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:from-indigo-500 hover:to-violet-500 hover:shadow-indigo-500/40"
            >
              免费开始
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-700"
            >
              查看 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
