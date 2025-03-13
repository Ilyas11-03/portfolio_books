import React from 'react';

const Sidebar = () => {

    return (
        
        <aside className="left-0 flex flex-col w-64 h-full px-5 py-8 overflow-y-auto bg-indigo-100 border-r dark:bg-gray-900 dark:border-gray-700">
            <a href="#">
                <h1 className='text-xl font-bold text-white text-'>Books</h1>
            </a>                    

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="-mx-3 space-y-6">
                    <div className="space-y-3">
                        <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Books type</label>
                        <NavItem label="Fiction" />
                        <NavItem label="Non-Fiction" />
                        <NavItem label="Sci-Fi" />
                        <NavItem label="Fantasy" />
                        <NavItem label="Romance" />
                        <NavItem label="Action & Adventure" />
                    </div>
                </nav>
            </div>
        </aside>
    );
};

const NavItem = ({ label }) => (
    <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
        

        <span className="mx-2 text-sm font-medium">{label}</span>
    </a>
);

export default Sidebar;
