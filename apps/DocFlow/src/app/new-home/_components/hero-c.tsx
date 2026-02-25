import Link from 'next/link';
import { FileText, Zap, Users, Sparkles } from 'lucide-react';

import { cn } from '@/utils/cn';
import { SITE_CONFIG } from './constants';

const btnPrimary =
  'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors';
const btnOutline =
  'inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors';

/** HeroC: 左右分栏，左侧文案 + 右侧特性图标 */
export function HeroC() {
  const highlights = [
    { icon: FileText, text: '富文本编辑' },
    { icon: Zap, text: '实时协作' },
    { icon: Users, text: '多人编辑' },
    { icon: Sparkles, text: 'AI 续写' },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {SITE_CONFIG.name}
              <span className="block text-slate-600">{SITE_CONFIG.tagline}</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              基于 Tiptap + Yjs 构建的智能协作编辑器，集成 AI 续写、RAG 知识库检索、AI
              播客生成。支持多人实时协作编辑。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={SITE_CONFIG.dashboardUrl} className={btnPrimary}>
                免费开始
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

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item, i) => (
              <div
                key={item.text}
                className={cn(
                  'flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md',
                  i === 0 && 'sm:col-span-2',
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="mt-3 text-sm font-medium text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
