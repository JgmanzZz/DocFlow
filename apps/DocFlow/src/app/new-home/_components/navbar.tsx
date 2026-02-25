'use client';

import Link from 'next/link';
import { FileText, Github, Newspaper, Menu, X } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/utils/cn';
import { SITE_CONFIG } from './constants';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label={`${SITE_CONFIG.name} 首页`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 shadow-sm">
            <FileText className="h-4.5 w-4.5 text-white" />
          </div>
          <span className="text-lg font-semibold text-slate-900">{SITE_CONFIG.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <Link
            href={SITE_CONFIG.blogUrl}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
          >
            <span className="flex items-center gap-2">
              <Newspaper className="h-4 w-4" />
              博客
            </span>
          </Link>
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
          >
            <span className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </span>
          </a>
          <Link
            href={SITE_CONFIG.dashboardUrl}
            className="ml-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-indigo-500 hover:to-violet-500 transition-colors"
          >
            开始使用
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* 移动端菜单 */}
      <div
        className={cn(
          'border-t border-slate-200 bg-white md:hidden',
          mobileOpen ? 'block' : 'hidden',
        )}
      >
        <div className="space-y-1 px-4 py-4">
          <Link
            href={SITE_CONFIG.blogUrl}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            onClick={() => setMobileOpen(false)}
          >
            博客
          </Link>
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            onClick={() => setMobileOpen(false)}
          >
            GitHub
          </a>
          <Link
            href={SITE_CONFIG.dashboardUrl}
            className="mt-2 block rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-center text-sm font-medium text-white hover:from-indigo-500 hover:to-violet-500"
            onClick={() => setMobileOpen(false)}
          >
            开始使用
          </Link>
        </div>
      </div>
    </header>
  );
}
