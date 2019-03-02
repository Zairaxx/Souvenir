import React from 'react'
import Link from 'next/link'


const Navigation = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/newSouvenir">
        <a>New Souvenir</a>
      </Link>
    <p>Hello Next.js</p>
    </div>
  )
}

export default Navigation
