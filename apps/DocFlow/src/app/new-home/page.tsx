import type { Metadata } from 'next';

import { MODULES, MODULE_MAP } from './_components/module-config';
import { SITE_CONFIG } from './_components/constants';

export const metadata: Metadata = {
  title: `新首页预览 - ${SITE_CONFIG.name}`,
  description: SITE_CONFIG.description,
};

export default function NewHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {MODULES.map((name) => {
        const Component = MODULE_MAP[name];

        return Component ? <Component key={name} /> : null;
      })}
    </div>
  );
}
