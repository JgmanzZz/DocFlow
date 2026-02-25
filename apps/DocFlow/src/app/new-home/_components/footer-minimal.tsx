import Link from 'next/link';
import { FileText, Github, Heart } from 'lucide-react';

import { SITE_CONFIG } from './constants';

/** Footer: 极简白底页脚 */
export function FooterMinimal() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-slate-900">{SITE_CONFIG.name}</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-600">
            <Link href={SITE_CONFIG.blogUrl} className="hover:text-slate-900">
              博客
            </Link>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-slate-900"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {SITE_CONFIG.year} {SITE_CONFIG.name}. Made with{' '}
            <Heart className="inline h-3.5 w-3.5 text-red-500" /> by {SITE_CONFIG.name} Team
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700"
            >
              {SITE_CONFIG.beianNumber}
            </Link>
            <Link
              href="http://www.beian.gov.cn/portal/registerSystemInfo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700"
            >
              {SITE_CONFIG.gonganBeian}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
