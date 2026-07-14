import { profile } from './data.js'
import { Icon } from './icons.jsx'

function initials(name) {
  return name.trim().slice(0, 1).toUpperCase()
}

/** Строка приглашения: german@dev:~$ <команда> */
function Prompt({ user, host, command }) {
  return (
    <div className="prompt">
      <span className="prompt-user">
        {user}@{host}
      </span>
      <span className="prompt-punct">:</span>
      <span className="prompt-path">~</span>
      <span className="prompt-punct">$</span> <span className="prompt-cmd">{command}</span>
    </div>
  )
}

export default function App() {
  const { name, user, host, windowTitle, avatar, about, socials, footer } = profile

  // На Pages сайт лежит в подпапке, поэтому путь из public/ клеим с base.
  const avatarSrc = avatar ? import.meta.env.BASE_URL + avatar.replace(/^\//, '') : null

  return (
    <main className="page">
      <div className="grid-bg" aria-hidden="true" />

      <div className="container">
        <div className="window">
          <div className="titlebar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="titlebar-text">{windowTitle}</span>
            <Icon type="terminal" size={15} className="titlebar-icon" />
          </div>

          <div className="window-body">
            <Prompt user={user} host={host} command="whoami" />

            <section className="identity">
              <div className="avatar-frame">
                {avatarSrc ? (
                  <img className="avatar" src={avatarSrc} alt={name} />
                ) : (
                  <div className="avatar avatar--fallback" aria-hidden="true">
                    {initials(name)}
                  </div>
                )}
              </div>
              <div className="identity-text">
                <h1 className="name">{name}</h1>
              </div>
            </section>

            <Prompt user={user} host={host} command="cat about.md" />

            <section className="about">
              {about.map((line) => (
                <p className="about-line" key={line.text}>
                  <span className="about-prefix" aria-hidden="true">
                    {line.prefix}
                  </span>
                  <span className="about-text">{line.text}</span>
                </p>
              ))}
            </section>

            <Prompt user={user} host={host} command="ls ./contacts" />

            <nav className="socials" aria-label="Контакты">
              {socials.map((social) => {
                const isExternal = social.href.startsWith('http')

                return (
                  <a
                    className="row"
                    key={social.href}
                    href={social.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                  >
                    <Icon type={social.type} className="row-icon" />
                    <span className="row-text">
                      <span className="row-name">{social.name}</span>
                      <span className="row-handle">{social.handle}</span>
                    </span>
                    <span className="row-hint">{isExternal ? '→ open' : '→ mail'}</span>
                    <Icon type="arrowRight" size={15} className="row-arrow" />
                  </a>
                )
              })}
            </nav>

            <div className="prompt prompt--last">
              <span className="prompt-user">
                {user}@{host}
              </span>
              <span className="prompt-punct">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-punct">$</span>
            </div>
          </div>
        </div>

        {footer && <p className="footer">{footer}</p>}
      </div>
    </main>
  )
}
