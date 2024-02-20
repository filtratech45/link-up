// import {
//     UserGroupIcon,
//     HomeIcon,
//     DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks() {
// const pathname = usePathname();
    return (
        <div>
        <div>
            <Link
                key={"link"}
                href={"http://localhost:3000/dashboard/Customers"}
                className={"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"}
            >
                go to page : Customers
            </Link> 
        </div>
        <div>
            <Link
                key={"link"}
                href={"http://localhost:3000/dashboard/Invoices"}
                className={"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"}
            >
                go to page : Inovices
            </Link> 
        </div>
    </div>
    );
}