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
			lastUpdated: false,
			routeMiddleware: './src/route-middleware.ts',
			sidebar: [
				{ label: 'Code Resource', translations: { en: 'Code Resource' }, items: [
					{ label: 'Быстрый старт', translations: { en: 'Getting Started' }, items: [
						{ label: 'Обзор', slug: 'code-resource/getting-started' },
						{ label: 'Переменные', translations: { en: 'Variables' }, slug: 'code-resource/getting-started/variables' },
						{ label: 'Scopes', slug: 'code-resource/getting-started/scopes' },
						{ label: 'Triggers', slug: 'code-resource/getting-started/triggers' },
					] },
					{ label: 'Эффекты', translations: { en: 'Effects' }, items: [
						{ label: 'Обзор', slug: 'code-resource/effects' },
						{ label: 'Постройки', translations: { en: 'Buildings' }, slug: 'code-resource/effects/buildings' },
						{ label: 'Экономика', translations: { en: 'Economy' }, slug: 'code-resource/effects/economy' },
						{ label: 'Технологии', translations: { en: 'Technology' }, slug: 'code-resource/effects/technology' },
						{ label: 'Военные', translations: { en: 'Military' }, slug: 'code-resource/effects/military' },
						{ label: 'Внутренние фракции', translations: { en: 'Internal Factions' }, slug: 'code-resource/effects/internal-factions' },
						{ label: 'Иностранное влияние', translations: { en: 'Foreign Influence' }, slug: 'code-resource/effects/influence' },
						{ label: 'Политика', translations: { en: 'Politics' }, slug: 'code-resource/effects/politics' },
						{ label: 'Смена законов', translations: { en: 'Law Changes' }, slug: 'code-resource/effects/law-changes' },
						{ label: 'Терроризм', translations: { en: 'Terrorism' }, slug: 'code-resource/effects/terrorism' },
						{ label: 'Сепаратизм', translations: { en: 'Separatism' }, slug: 'code-resource/effects/separatism' },
						{ label: 'Европейский союз', translations: { en: 'European Union' }, slug: 'code-resource/effects/european-union' },
						{ label: 'Энергетика', translations: { en: 'Energy' }, slug: 'code-resource/effects/energy' },
						{ label: 'Департаменты и компании', translations: { en: 'Departments & Companies' }, slug: 'code-resource/effects/companies' },
						{ label: 'Уникальные', translations: { en: 'Unique' }, slug: 'code-resource/effects/unique' },
					] },
					{ label: 'Триггеры', translations: { en: 'Triggers' }, items: [
						{ label: 'Обзор', slug: 'code-resource/triggers' },
						{ label: 'Базовые', translations: { en: 'Basics' }, slug: 'code-resource/triggers/basic' },
						{ label: 'Политика', translations: { en: 'Politics' }, slug: 'code-resource/triggers/political' },
						{ label: 'Экономика', translations: { en: 'Economy' }, slug: 'code-resource/triggers/economic' },
						{ label: 'Военные', translations: { en: 'Military' }, slug: 'code-resource/triggers/military' },
						{ label: 'Влияние', translations: { en: 'Influence' }, slug: 'code-resource/triggers/influence' },
						{ label: 'Внутренние фракции', translations: { en: 'Internal Factions' }, slug: 'code-resource/triggers/internal-factions' },
					] },
					{ label: 'Модификаторы', translations: { en: 'Modifiers' }, items: [
						{ label: 'Обзор', slug: 'code-resource/modifiers' },
						{ label: 'Экономические', translations: { en: 'Economic' }, slug: 'code-resource/modifiers/economic' },
						{ label: 'Модификаторы законов', translations: { en: 'Law Modifiers' }, slug: 'code-resource/modifiers/laws' },
						{ label: 'Миграция', translations: { en: 'Migration' }, slug: 'code-resource/modifiers/migration' },
						{ label: 'Влияние', translations: { en: 'Influence' }, slug: 'code-resource/modifiers/influence' },
						{ label: 'Энергетика', translations: { en: 'Energy' }, slug: 'code-resource/modifiers/energy' },
						{ label: 'Политика', translations: { en: 'Political' }, slug: 'code-resource/modifiers/political' },
						{ label: 'Военные', translations: { en: 'Military' }, slug: 'code-resource/modifiers/military' },
						{ label: 'Региональные', translations: { en: 'Regional' }, slug: 'code-resource/modifiers/regional' },
						{ label: 'Терроризм', translations: { en: 'Terrorism' }, slug: 'code-resource/modifiers/terrorism' },
						{ label: 'Космос', translations: { en: 'Space' }, slug: 'code-resource/modifiers/space' },
						{ label: 'Уникальные', translations: { en: 'Unique' }, slug: 'code-resource/modifiers/unique' },
					] },
					{ label: 'Юниты и техника', translations: { en: 'Units & Equipment' }, items: [
						{ label: 'Обзор', slug: 'code-resource/units' },
						{ label: 'Батальоны и роты', translations: { en: 'Battalions & Companies' }, slug: 'code-resource/units/battalions' },
						{ label: 'Оборудование', translations: { en: 'Equipment' }, slug: 'code-resource/units/equipment' },
						{ label: 'Авиакаркасы', translations: { en: 'Airframes' }, slug: 'code-resource/units/airframes' },
						{ label: 'Шасси техники', translations: { en: 'Vehicle Chassis' }, slug: 'code-resource/units/chassis' },
						{ label: 'Корабли', translations: { en: 'Ships' }, slug: 'code-resource/units/ships' },
					] },
					{ label: 'Системы MDC', translations: { en: 'MDC Systems' }, items: [
						{ label: 'Обзор', slug: 'code-resource/systems' },
						{ label: 'Политика', translations: { en: 'Politics' }, slug: 'code-resource/systems/politics' },
						{ label: 'Контртерроризм', translations: { en: 'Counter-Terrorism' }, slug: 'code-resource/systems/terrorism' },
					] },
					{ label: 'Гайды', translations: { en: 'Guides' }, items: [
						{ label: 'Обзор', slug: 'code-resource/guides' },
						{ label: 'Субидеологии и партии', translations: { en: 'Subideologies & Parties' }, slug: 'code-resource/guides/subideologies' },
						{ label: 'Исторические события', translations: { en: 'Historical Events' }, slug: 'code-resource/guides/historical-events' },
						{ label: 'Terrain-фото', translations: { en: 'Terrain Photos' }, slug: 'code-resource/guides/terrain-photos' },
					] },
					{ label: 'Справочник', translations: { en: 'Reference' }, slug: 'code-resource/reference' },
				] },
			],
		})
	],
});
