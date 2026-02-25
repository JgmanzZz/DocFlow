/**
 * 新首页模块配置
 * 通过修改下方的 MODULES 数组来组合页面展示的模块
 *
 * 可用模块：
 * - Navbar: 顶部导航（带 Indigo  accent）
 * - HeroA/B/C: 极简/统计/分栏 Hero
 * - HeroD: 渐变首屏（indigo-amber 渐变，推荐）
 * - FeaturesABento/BCards/CList: 功能展示
 * - HowItWorks: 三步流程
 * - Integrations: 技术栈彩色标签
 * - LogosStrip: 技术栈 Logo 条
 * - StatsBlock: 数据统计块
 * - Testimonials: 用户评价
 * - PricingPreview: 定价预览
 * - NewsletterCTA: 订阅/社区 CTA
 * - CTAA/CTAB: CTA 区块
 * - FAQSection: 常见问题
 * - FooterMinimal: 页脚
 */

import type { ComponentType } from 'react';

import { Navbar } from './navbar';
import { HeroA } from './hero-a';
import { HeroB } from './hero-b';
import { HeroC } from './hero-c';
import { HeroD } from './hero-d';
import { FeaturesABento } from './features-a-bento';
import { FeaturesBCards } from './features-b-cards';
import { FeaturesCList } from './features-c-list';
import { LogosStrip } from './logos-strip';
import { StatsBlock } from './stats-block';
import { Testimonials } from './testimonials';
import { CTAA } from './cta-a';
import { CTAB } from './cta-b';
import { FAQSection } from './faq-section';
import { FooterMinimal } from './footer-minimal';
import { HowItWorks } from './how-it-works';
import { Integrations } from './integrations';
import { PricingPreview } from './pricing-preview';
import { NewsletterCTA } from './newsletter-cta';

export type ModuleName =
  | 'Navbar'
  | 'HeroA'
  | 'HeroB'
  | 'HeroC'
  | 'HeroD'
  | 'FeaturesABento'
  | 'FeaturesBCards'
  | 'FeaturesCList'
  | 'LogosStrip'
  | 'StatsBlock'
  | 'Testimonials'
  | 'CTAA'
  | 'CTAB'
  | 'FAQSection'
  | 'FooterMinimal'
  | 'HowItWorks'
  | 'Integrations'
  | 'PricingPreview'
  | 'NewsletterCTA';

export const MODULE_MAP: Record<ModuleName, ComponentType> = {
  Navbar,
  HeroA,
  HeroB,
  HeroC,
  HeroD,
  FeaturesABento,
  FeaturesBCards,
  FeaturesCList,
  LogosStrip,
  StatsBlock,
  Testimonials,
  CTAA,
  CTAB,
  FAQSection,
  FooterMinimal,
  HowItWorks,
  Integrations,
  PricingPreview,
  NewsletterCTA,
};

/** 当前启用的模块顺序（可自由调整） */
export const MODULES: ModuleName[] = [
  'Navbar',
  'HeroD',
  'LogosStrip',
  'HowItWorks',
  'FeaturesABento',
  'Integrations',
  'StatsBlock',
  'Testimonials',
  'PricingPreview',
  'NewsletterCTA',
  'CTAA',
  'FAQSection',
  'FooterMinimal',
];
