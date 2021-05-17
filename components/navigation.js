import Link from 'next/link'

import style from './nav.module.css';

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a className={style.link}> Ana Sayfa </a>
      </Link>

      <Link href="/about">
        <a style={{backgroundColor: "blue"}}> Hakkında </a>
      </Link>
    </nav>
  )
}

export default Navigation
