import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
	const { starlightRoute } = context.locals;

	// Starlight автоматически добавляет первым пунктом TOC ссылку на
	// вводный текст страницы ("Overview" / "Обзор"), если перед первым
	// заголовком есть контент. Убираем этот пункт на любой странице,
	// а не только на заранее известной.
	const overviewLink = starlightRoute.toc?.items[0];
	if (overviewLink?.text === 'Overview' || overviewLink?.text === 'Обзор') {
		starlightRoute.toc?.items.shift();
	}
});
