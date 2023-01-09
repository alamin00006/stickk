import React from 'react';
import { HomeIcon } from '@heroicons/react/24/outline'
import { CreditCardIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import './SideHome.css'
import { UserIcon } from '@heroicons/react/24/solid'
import { Link, Outlet } from 'react-router-dom';
const SideHome = () => {
    return (
                <div className='lg:mx-24'>
                                
            <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
            {/* <!-- Page content here --> */}
            {/* <h1>My Dashboard</h1> */}
            <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div> 
            <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className=" p-4 w-80 bg-base-100 ">
                {/* <!-- Sidebar content here --> */}
                <aside class="w-64 side-Navbar" aria-label="Sidebar">
                    <div class=" py-4 px-3 rounded ">
                   
                    <ul class="space-y-2">
                        <li>
                        <Link to='/sideNavbar/dashboardHome' class="  p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
                           
                            <span class="ml-3">Add your photo</span>
                            <br/>
                            <UserIcon className="h-24 w-24 text-gray-300"/>
                            <h5 className='text-bolder'>alamin0006</h5>
                            <h6>MOHAMMAD ALAMIN</h6>
                        </Link>
                        </li>
                        <li>
                        <Link to='/sideNavbar/dashboardHome' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <HomeIcon className="w-6 h-6 text-gray-500 "/>
                            <span class="ml-3">My Commitments</span>
                        </Link>
                        </li>
                        <li>
                        <Link to='/sideNavbar/viewPage' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           
                            <CreditCardIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="flex-1 ml-3 whitespace-nowrap">Refereeing</span>
                           
                            <PencilSquareIcon className='w-6 h-6 text-gray-500' />
                        </Link>
                        </li>
                         
                        <li>
                        <Link to='/sideNavbar/donations' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        
                            <HeartIcon  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="flex-1 ml-3 whitespace-nowrap">Supporting</span>
                           
                        </Link>
                        </li>
                        <li>
                        <Link to='/sideNavbar/donations' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        
                            <HeartIcon  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="flex-1 ml-3 whitespace-nowrap">Stars</span>
                           
                        </Link>
                        </li>
                        <li>
                        <Link to='/sideNavbar/memberships' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                         
                            <LockClosedIcon class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="flex-1 ml-3 whitespace-nowrap">Recipient of Stakes</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="/sideNavbar/extras" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Extras</span>
                        </Link>
                        </li>
                        
                        
                    </ul>
                    </div>
                    </aside>
    </ul>
  
  </div>
</div>
                  
              
        </div>
    );
};

export default SideHome;