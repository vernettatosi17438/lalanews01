import React from 'react'
import HeaderSearch from './header-search';
import Link from 'next/link';

export default function Header() {

  return (
    <div className='border-b py-3'>
      <div className='container flex items-center justify-between'>
        <Link className='text-2xl font-light tracking-tight hover:underline' href="/">{process.env.NEXT_PUBLIC_APP_NAME || 'Blog News'}</Link>

        <div>
          <HeaderSearch />
        </div>
      </div>
    </div>
  );
}
