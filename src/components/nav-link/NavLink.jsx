import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const NavLink = ({ shrink, menu }) => {
    const pathname = usePathname();

    const isActivePage = path => pathname === path ? 'active' : '';
    return (
        <div className={`subHeader__links ${menu ? 'show' : ''} ${shrink ? 'shrink' : ''}`}>
            <Link href="/" className={isActivePage('/')}>HOME</Link>
            <Link href="/bags" className={isActivePage('/bags')}>BAGS</Link>
            <Link href="/sneakers" className={isActivePage('/sneakers')}>SNEAKERS</Link>
            <Link href="/belt" className={isActivePage('/belt')}>BELT</Link>
            <Link href="/contact" className={isActivePage('/contact')}>CONTACT</Link>
        </div>
    )
}

export default NavLink