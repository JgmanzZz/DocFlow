import { Edit3, Users, Sparkles, Database, Search, MessageCircle, Mic, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const SITE_CONFIG = {
  name: 'DocFlow',
  tagline: 'AI 智能写作平台',
  description:
    'DocFlow 基于 Tiptap+Yjs 构建的智能协作编辑器，集成 AI 续写、RAG 知识库检索、AI 播客生成。支持多人实时协作编辑、Markdown、富文本等格式。',
  url: 'https://www.codecrack.cn',
  githubUrl: 'https://github.com/xun082/DocFlow',
  blogUrl: '/blog',
  dashboardUrl: '/dashboard',
  year: 2026,
  beianNumber: '粤ICP备2025376666号',
  gonganBeian: '粤公网安备 44030502008888号',
  techStack: ['React 19', 'TypeScript', 'AI Powered'],
} as const;

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string; // Tailwind gradient e.g. 'from-indigo-500 to-violet-500'
  bg?: string;   // e.g. 'bg-indigo-50'
}

export const FEATURES: FeatureItem[] = [
  {
    icon: Edit3,
    title: '沉浸式编辑器',
    description: '基于 Tiptap 打造的下一代编辑体验，支持 Markdown 快捷键、块级编辑、拖拽排版',
    color: 'from-indigo-500 to-violet-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: Users,
    title: '实时协作引擎',
    description: '基于 Yjs CRDT 算法的毫秒级同步技术，支持百人同时在线编辑，冲突自动解决',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
  },
  {
    icon: Sparkles,
    title: 'AI 创作引擎',
    description: '深度理解上下文语境的智能续写系统，支持多种写作风格切换',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Database,
    title: '知识图谱系统',
    description: '智能构建知识关联网络，自动提取文档关键信息，支持语义搜索',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Search,
    title: 'RAG 检索增强',
    description: '结合向量数据库和语义理解的智能检索系统，精准定位相关内容',
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
  },
  {
    icon: MessageCircle,
    title: '智能对话助手',
    description: '基于文档上下文的专属 AI 助手，提供精准的写作建议和创意灵感',
    color: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-50',
  },
  {
    icon: Mic,
    title: '音频内容生成',
    description: '文档一键转换为专业播客，支持多语言、多音色、情感表达',
    color: 'from-cyan-500 to-sky-500',
    bg: 'bg-cyan-50',
  },
  {
    icon: Zap,
    title: 'Agent 流程编排',
    description: '可视化 Agent 构建平台，支持多模态数据处理和复杂逻辑编排',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50',
  },
];

export const LOGOS = ['React', 'TypeScript', 'Tiptap', 'Yjs', 'Next.js', 'Tailwind'];

export const STATS = [
  { value: '26k+', label: '活跃用户' },
  { value: '100+', label: '同时协作' },
  { value: '99.9%', label: '可用性' },
];

export const TESTIMONIALS = [
  {
    quote: 'DocFlow 的实时协作体验非常流畅，团队写作效率提升显著。',
    author: '张三',
    role: '产品经理',
  },
  {
    quote: 'AI 续写和知识库检索功能让写作变得轻松，强烈推荐。',
    author: '李四',
    role: '技术写作者',
  },
  {
    quote: '开源可定制，我们基于 DocFlow 构建了内部文档平台。',
    author: '王五',
    role: '全栈工程师',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'DocFlow 是完全免费的吗？',
    answer:
      'DocFlow 是完全开源免费的项目，基于 MIT 协议。你可以免费使用、修改和分发。核心功能永远免费开放。',
  },
  {
    question: '如何开始使用 DocFlow？',
    answer:
      '你可以直接在我们的网站上注册账号开始使用，或者下载源代码部署到自己的服务器。我们提供详细的部署文档和 Docker 一键部署方案。',
  },
  {
    question: '支持多少人同时协作编辑？',
    answer:
      '理论上没有人数限制！基于 Yjs 的 CRDT 算法，经测试支持 100+ 人同时编辑同一文档依然保持流畅。',
  },
];
