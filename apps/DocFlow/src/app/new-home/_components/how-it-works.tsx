import { UserPlus, FileEdit, Share2 } from 'lucide-react';

import { SITE_CONFIG } from './constants';

const steps = [
  {
    icon: UserPlus,
    title: '注册账号',
    desc: '免费注册，无需信用卡',
    color: 'from-indigo-500 to-violet-500',
    bg: 'bg-indigo-50',
    ring: 'ring-indigo-200',
  },
  {
    icon: FileEdit,
    title: '开始创作',
    desc: '创建文档，使用 AI 续写、协作编辑',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    ring: 'ring-amber-200',
  },
  {
    icon: Share2,
    title: '协作分享',
    desc: '邀请团队成员，实时协作，一键分享',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
    ring: 'ring-emerald-200',
  },
];

/** 三步流程，带彩色图标 */
export function HowItWorks() {
  return (
    <section className="border-t border-slate-200 bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          三步开始使用 {SITE_CONFIG.name}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-600">
          从注册到协作，只需几分钟
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}
              >
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <div className={`mt-4 rounded-xl ${step.bg} p-4 ring-1 ${step.ring}`}>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+4rem)] hidden h-0.5 w-[calc(100%-4rem)] bg-gradient-to-r from-slate-200 to-transparent sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
