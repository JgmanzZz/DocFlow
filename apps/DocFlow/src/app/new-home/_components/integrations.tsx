const INTEGRATIONS = [
  { name: 'React', color: 'bg-sky-500' },
  { name: 'TypeScript', color: 'bg-blue-600' },
  { name: 'Tiptap', color: 'bg-emerald-600' },
  { name: 'Yjs', color: 'bg-amber-500' },
  { name: 'Next.js', color: 'bg-slate-900' },
  { name: 'Tailwind', color: 'bg-cyan-500' },
  { name: 'Shadcn UI', color: 'bg-slate-700' },
  { name: 'OpenAI', color: 'bg-emerald-700' },
];

/** 技术栈集成展示，彩色标签 */
export function Integrations() {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          技术栈集成
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-slate-600">
          基于主流技术构建，易于扩展与定制
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {INTEGRATIONS.map((item) => (
            <span
              key={item.name}
              className={`inline-flex items-center gap-2 rounded-lg ${item.color} px-4 py-2.5 text-sm font-medium text-white shadow-sm`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
