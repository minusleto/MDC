import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
	const { starlightRoute } = context.locals;

	if (starlightRoute.id.endsWith('code-resource/effects/economy')) {
		const toc = starlightRoute.toc;
		if (toc?.items[0]?.text === 'Overview' || toc?.items[0]?.text === 'Обзор') {
			toc.items = toc.items.slice(1);
		}
	}
});
