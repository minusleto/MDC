# MDC Docs

Сайт-документация MDC (Millennium: Damaged Continuum) на Astro + [Starlight](https://starlight.astro.build/). Собран по образцу [millenniumdawn.github.io](https://millenniumdawn.github.io/Millennium-Dawn/dev-resources/code-resource/).

## Локальный запуск

```bash
npm install
npm run dev
```

Откроется на `http://localhost:4321/mdc-docs`.

## Как выложить на GitHub Pages

1. Создайте репозиторий на GitHub (например `mdc-docs`) и запушьте туда содержимое этой папки:

   ```bash
   git init
   git add .
   git commit -m "init MDC docs"
   git branch -M main
   git remote add origin https://github.com/ВАШ_ЮЗЕРНЕЙМ/mdc-docs.git
   git push -u origin main
   ```

2. В `astro.config.mjs` замените:
   - `site: 'https://YOUR-GITHUB-USERNAME.github.io'` → на ваш `https://ВАШ_ЮЗЕРНЕЙМ.github.io`
   - `base: '/mdc-docs'` → на имя вашего репозитория (если репозиторий называется иначе, чем `mdc-docs`)
   - ссылку на GitHub в `social` (по желанию)

   Если репозиторий будет называться `ВАШ_ЮЗЕРНЕЙМ.github.io` (сайт-корень аккаунта) — уберите `base` вообще.

3. На GitHub: **Settings → Pages → Build and deployment → Source** выберите **GitHub Actions**.

4. Запушьте изменения — вкладка **Actions** соберёт и задеплоит сайт автоматически (workflow уже лежит в `.github/workflows/deploy.yml`). После первого прогона сайт появится по адресу из `site`+`base`.

## Структура контента

```
src/content/docs/code-resource/
├── index.md       # обзорная страница
├── modifiers.md    # Economic / Law / Migration / Influence / Energy / Political модификаторы
├── effects.md       # скриптовые эффекты
└── guides.md         # гайды / how-to
```

Разделы левого меню генерируются автоматически (`autogenerate`) из этой папки — просто добавляйте `.md` файлы с фронтматтером `title`/`description`.
