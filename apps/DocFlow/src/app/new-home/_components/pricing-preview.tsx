import Link from 'next/link';
import { Check } from 'lucide-react';

import { SITE_CONFIG } from './constants';

const features = ['实时协作编辑', 'AI 续写与对话', 'RAG 知识库', '文档分享', 'Markdown 支持'];

/** 定价预览，强调免费 */
export function PricingPreview() {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-br from-indigo-50/80 via-white to-violet-50/50 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-3xl border-2 border-indigo-200/80 bg-white shadow-xl shadow-indigo-500/10">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-6 text-center">
            <p className="text-sm font-medium text-indigo-100">免费版</p>
            <p className="mt-2 text-4xl font-bold text-white">
              ¥0<span className="text-lg font-normal text-indigo-200">/月</span>
            </p>
            <p className="mt-2 text-sm text-indigo-100">永久免费 · MIT 开源</p>
          </div>
          <div className="space-y-4 px-8 py-8">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-slate-700">{f}</span>
              </div>
            ))}
          </div>
          <div className="px-8 pb-8">
            <Link
              href={SITE_CONFIG.dashboardUrl}
              className="block w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3.5 text-center font-semibold text-white transition hover:from-indigo-500 hover:to-violet-500"
            >
              立即开始
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
