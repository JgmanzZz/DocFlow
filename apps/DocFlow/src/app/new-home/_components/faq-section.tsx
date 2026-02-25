import { ChevronDown } from 'lucide-react';

import { FAQ_ITEMS } from './constants';

import { cn } from '@/utils/cn';

/** FAQ: 手风琴式问答（基于 details/summary） */
export function FAQSection() {
  return (
    <section className="border-t border-slate-200 bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">常见问题</h2>
          <p className="mt-4 text-slate-600">你可能想知道的</p>
        </div>

        <div className="mt-12 space-y-2">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className={cn(
                'group rounded-xl border border-slate-200 bg-white transition-colors',
                'hover:border-slate-300 [&[open]]:border-slate-300 [&[open]]:shadow-sm',
              )}
            >
              <summary className="cursor-pointer list-none px-6 py-4 font-medium text-slate-900 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </span>
              </summary>
              <div className="border-t border-slate-100 px-6 pb-4 pt-2 text-slate-600">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
