'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard',  },
  // {
  //   name: 'Home2',
  //   href: '/dashboard/Home',
    
  // },
  // { name: 'Customers', href: '/dashboard/customers' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
       
        return (
          <Link
            key={link.name}
            href={link.href}
            >
            <p >{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
