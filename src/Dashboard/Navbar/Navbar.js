import React from 'react';
import dasLogo from '../../Images/logo-commit.svg'
import { UserIcon } from '@heroicons/react/24/solid'

import ToogleButton from './ToogleButton';
const Navbar = () => {
    return (
        <div className="ml-32">
            <div className="grid grid-cols-3">
                <div className="bg-dark">
                    <img src={dasLogo} alt=".." />
                </div>
                <div>
                <ToogleButton></ToogleButton>
                </div>
                <div className="ml-48 flex items-center">
                    <div>
                        <h4>alamin0006</h4>
                    </div>
                    <div>
                        <UserIcon className="h-9 w-9 text-gray-300"/>
                    </div>
                    <div className="dropdown dropdown-end gap-x-5">
                       
                        <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        <ul tabIndex={0} className=" mt-2 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="..">Item 1</a></li>
                            <li><a href="..">Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;