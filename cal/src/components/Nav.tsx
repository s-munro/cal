import Link from 'next/link';
import React from 'react';

export const Nav = () => {
 return (
  <nav className="px-20 w-full bg-orange h-10 flex items-center">
   <ul className="flex justify-end w-full items-center">
    <li className="px-5">
     <Link className="text-offwhite font-medium hover:text-sun" href="/">
      Home
     </Link>
    </li>
    <li className="px-5">
     <Link className="text-offwhite font-medium hover:text-sun" href="/events">
      Events
     </Link>
    </li>
    <li className="px-5">
     <Link className="text-offwhite font-medium hover:text-sun" href="/profile">
      Profile
     </Link>
    </li>
   </ul>
  </nav>
 );
};
