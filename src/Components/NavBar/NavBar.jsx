import React from 'react';
import Link from './Link';
import { Menu } from 'lucide-react';

const navigationData = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center mx-10'>
            <span className='flex'>
                <Menu></Menu>
                <h3 className='ml-4'>My Navbar</h3>
            </span>

            <ul className='flex'>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>


            {/* <ul className='flex'>
                {
                    navigationData.map(route=><li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul> */}



            {/* <ul className='flex gap-2'>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li>
                    <details>
                        <summary>More</summary>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Help</a></li>
                    </details>
                </li>
            </ul> */}

            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;