// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://minusleto.github.io',
	base: '/MDC',
	integrations: [
		starlight({
			title: 'MDC Docs',
			description: 'Millennium: Damaged Continuum — справочник по модификаторам, эффектам и гайдам для модеров',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Русский', lang: 'ru' },
				en: { label: 'English', lang: 'en' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/minusleto/MDC' },
			],
			sidebar: [
				{
					label: 'Code Resource',
					translations: { en: 'Code Resource' },
					items: [{ autogenerate: { directory: 'code-resource' } }],
				},
			],
		}),
	],
});
