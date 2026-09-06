import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
	const { starlightRoute } = context.locals;

	if (starlightRoute.id.endsWith('code-resource/effects/economy')) {
		const overviewLink = starlightRoute.toc?.items[0];
		if (overviewLink?.text === 'Overview' || overviewLink?.text === 'Обзор') {
			starlightRoute.toc?.items.shift();
		}
	}
});
