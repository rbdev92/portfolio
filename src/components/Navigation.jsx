import Link from 'next/link'

export default function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </>
  )
}
