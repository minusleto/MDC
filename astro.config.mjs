// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://minusleto.github.io',
	base: '/MDC',
	integrations: [
		starlight({
			title: 'MDC Docs',
			description: 'Millennium: Damaged Continuum — справочник по коду и моддингу',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Русский', lang: 'ru' },
				en: { label: 'English', lang: 'en' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/minusleto/MDC' },
			],
			sidebar: [
				{ label: 'Ресурс по коду', translations: { en: 'Code Resource' }, items: [
					{ label: 'Быстрый старт', translations: { en: 'Getting Started' }, items: [
						{ label: 'Обзор', slug: 'code-resource/getting-started' },
						{ label: 'Переменные', translations: { en: 'Variables' }, slug: 'code-resource/getting-started/variables' },
						{ label: 'Скоупы (Scopes)', translations: { en: 'Scopes' }, slug: 'code-resource/getting-started/scopes' },
						{ label: 'Триггеры', translations: { en: 'Triggers' }, slug: 'code-resource/getting-started/triggers' },
					] },
					{ label: 'Эффекты', translations: { en: 'Effects' }, items: [
						{ label: 'Обзор', slug: 'code-resource/effects' },
						{ label: 'Строительство', translations: { en: 'Construction' }, items: [
							{ label: 'Обзор', slug: 'code-resource/effects/construction' },
							{ label: 'Постройки', translations: { en: 'Buildings' }, slug: 'code-resource/effects/construction/buildings' },
						] },
						{ label: 'Экономика', translations: { en: 'Economy' }, slug: 'code-resource/effects/economy' },
						{ label: 'Политика', translations: { en: 'Politics' }, slug: 'code-resource/effects/politics' },
						{ label: 'Внешняя политика', translations: { en: 'Foreign Policy' }, items: [
							{ label: 'Обзор', slug: 'code-resource/effects/foreign-policy' },
							{ label: 'Иностранное влияние', translations: { en: 'Foreign Influence' }, slug: 'code-resource/effects/foreign-policy/influence' },
						] },
						{ label: 'Общество', translations: { en: 'Society' }, items: [
							{ label: 'Обзор', slug: 'code-resource/effects/society' },
						] },
					] },
					{ label: 'Модификаторы', translations: { en: 'Modifiers' }, items: [
						{ label: 'Обзор', slug: 'code-resource/modifiers' },
						{ label: 'Экономические', translations: { en: 'Economic' }, slug: 'code-resource/modifiers/economic' },
						{ label: 'Законы', translations: { en: 'Laws' }, slug: 'code-resource/modifiers/laws' },
						{ label: 'Миграция', translations: { en: 'Migration' }, slug: 'code-resource/modifiers/migration' },
						{ label: 'Влияние', translations: { en: 'Influence' }, slug: 'code-resource/modifiers/influence' },
						{ label: 'Энергетика', translations: { en: 'Energy' }, slug: 'code-resource/modifiers/energy' },
						{ label: 'Политика', translations: { en: 'Political' }, slug: 'code-resource/modifiers/political' },
					] },
					{ label: 'Системы MDC', translations: { en: 'MDC Systems' }, items: [
						{ label: 'Обзор', slug: 'code-resource/systems' },
						{ label: 'Внутренние фракции', translations: { en: 'Internal Factions' }, slug: 'code-resource/systems/internal-factions' },
						{ label: 'Терроризм', translations: { en: 'Terrorism' }, slug: 'code-resource/systems/terrorism' },
						{ label: 'Картели', translations: { en: 'Cartels' }, slug: 'code-resource/systems/cartels' },
						{ label: 'Европейский союз', translations: { en: 'European Union' }, slug: 'code-resource/systems/european-union' },
						{ label: 'Энергетика', translations: { en: 'Energy' }, slug: 'code-resource/systems/energy' },
					] },
					{ label: 'Гайды', translations: { en: 'Guides' }, items: [
						{ label: 'Обзор', slug: 'code-resource/guides' },
						{ label: 'Субидеологии и партии', translations: { en: 'Subideologies & Parties' }, slug: 'code-resource/guides/subideologies' },
						{ label: 'Исторические события', translations: { en: 'Historical Events' }, slug: 'code-resource/guides/historical-events' },
						{ label: 'Переменные', translations: { en: 'Variables' }, slug: 'code-resource/guides/variables' },
						{ label: 'Фотографии местности', translations: { en: 'Terrain Photos' }, slug: 'code-resource/guides/terrain-photos' },
					] },
					{ label: 'Справочник', translations: { en: 'Reference' }, slug: 'code-resource/reference' },
				] },
			],
		})
	],
});
