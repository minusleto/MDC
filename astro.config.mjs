// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://YOUR-GITHUB-USERNAME.github.io',
	base: '/mdc-docs',
	integrations: [
		starlight({
			title: 'MDC Docs',
			description: 'Millennium: Damaged Continuum — справочник по модификаторам, эффектам и гайдам для модеров',
			defaultLocale: 'ru',
			locales: {
				ru: { label: 'Русский', lang: 'ru' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://minusleto.github.io' },
			],
			sidebar: [
				{
					label: 'Code Resource',
					items: [{ autogenerate: { directory: 'code-resource' } }],
				},
			],
		}),
	],
});
