// Единственный файл, который нужно править под себя.
// Всё остальное — разметка и стили — подтянет данные отсюда.

export const profile = {
  name: 'German',

  // Строка в тайтлбаре окна и в приглашении командной строки.
  user: 'german',
  host: 'dev',
  windowTitle: 'german — ~/about — zsh',

  // Файл лежит в /public. Если поставить null — покажется первая буква имени.
  avatar: '/avatar.png',

  // Блок `cat about.md`. Строка с prefix: '#' — комментарий, с '>' — вывод.
  about: [
    { prefix: '#', text: 'Java | Python | AI automation' },
    { prefix: '>', text: 'Remote developer building solutions for business' },
    { prefix: '>', text: 'Automation · integrations · LLM tools' },
  ],

  socials: [
    {
      type: 'instagram',
      name: 'instagram',
      handle: '@schrodinger.code',
      href: 'https://www.instagram.com/schrodinger.code/',
    },
    {
      type: 'telegram',
      name: 'telegram',
      handle: '@KGerman_24',
      href: 'https://t.me/KGerman_24',
    },
    {
      type: 'github',
      name: 'github',
      handle: '/Scrodinger-code',
      href: 'https://github.com/Scrodinger-code',
    },
    {
      type: 'linkedin',
      name: 'linkedin',
      handle: '/in/german-kolgan',
      href: 'https://www.linkedin.com/in/german-kolgan-b5433b380/',
    },
    {
      type: 'email',
      name: 'email',
      handle: 'kolgan.german@gmail.com',
      href: 'mailto:kolgan.german@gmail.com',
    },
  ],

  footer: '© 2026 German · built with </>',
}
