import { Mail } from 'lucide-react';

/** 订阅/联系 CTA，彩色背景 */
export function NewsletterCTA() {
  return (
    <section className="border-t border-slate-200 px-6 py-20">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 p-8 text-center shadow-2xl shadow-indigo-500/20 sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
          <Mail className="h-7 w-7 text-white" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
          获取最新动态
        </h2>
        <p className="mx-auto mt-3 max-w-md text-violet-100">
          关注 GitHub、加入社区，第一时间获取 DocFlow 的更新与技巧
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://github.com/xun082/DocFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
          >
            Star on GitHub
          </a>
          <a
            href="https://juejin.cn/user/3782764966460398"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            关注掘金
          </a>
        </div>
      </div>
    </section>
  );
}
