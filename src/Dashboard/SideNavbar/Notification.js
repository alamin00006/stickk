import React from 'react';
import { HomeIcon } from '@heroicons/react/24/outline'
import { CreditCardIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
import './SideHome.css'
import { Link, Outlet } from 'react-router-dom';
const Notification = () => {
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
                        <Link to='/sideNavbar/dashboardHome' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <HomeIcon className="w-6 h-6 text-gray-500 "/>
                            <span class="ml-3">Hello</span>
                        </Link>
                        </li>
                        <li>
                        <Link to='/sideNavbar/viewPage' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           
                            <CreditCardIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="flex-1 ml-3 whitespace-nowrap">View page</span>
                           
                            <PencilSquareIcon className='w-6 h-6 text-gray-500' />
                        </Link>
                        </li>
                          <h6 className='monetize'>MONETIZE</h6>
                        <li>
                        <Link to='/sideNavbar/donations' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        
                            <HeartIcon  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="flex-1 ml-3 whitespace-nowrap">Donations</span>
                           
                        </Link>
                        </li>
                        <li>
                        <Link to='/sideNavbar/memberships' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                         
                            <LockClosedIcon class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="flex-1 ml-3 whitespace-nowrap">Membership</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="/sideNavbar/extras" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Extras</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="/sideNavbar/wishlist" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Wishlist</span>
                            <span class=" rounded-full whitespace-nowrap bg-yellow-400 wishlist-new px-3">New</span>
                        </Link>
                        </li>
                        <h6 className='monetize'>PUBLISH</h6>
                        <li>
                        <Link to="/sideNavbar/post" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            
                            <ClipboardDocumentListIcon class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                            <span class="flex-1 ml-3 whitespace-nowrap">Post</span>
                        </Link>
                        </li>
                    </ul>
                    <ul class="pt-4 space-y-2 dark:border-gray-700">
                        <li>
                        <Link to="/sideNavbar/gallery" href=".." class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                          
                            <PhotoIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400"/>
                            <span class="ml-4">Gallery</span>
                            <span class=" ml-5 rounded-full whitespace-nowrap bg-yellow-400 wishlist-new px-3">New</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="/sideNavbar/message" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <EnvelopeIcon class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                            <span class="ml-3">Messages</span>
                        </Link>
                        </li>
                        <h6 className='monetize'>SETTINGS</h6>
                        <li>
                        <Link to="/sideNavbar/buttonGraphics" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                            <span class="ml-3">Button & Graphics</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="/sideNavbar/integrations" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                            <span class="ml-3">Integrations</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="/sideNavbar/payouts" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                       
                            <CurrencyDollarIcon class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="ml-3">Payouts</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="/sideNavbar/settings" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                          
                            <Cog6ToothIcon  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                            <span class="ml-3">Settings</span>
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

export default Notification;