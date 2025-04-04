import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import { MdClose, MdDashboard, MdFileUpload, MdGroupWork, MdHelp, MdList, MdMap, MdMenu, MdOutlineDriveFolderUpload, MdPeople, MdQueryStats, MdSettings, MdSubscriptions } from 'react-icons/md';
import KMsolution_white from '../../images/KMsolution_white.svg';

function Sidebar() {
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768); // Sidebar open on larger screens
  window.addEventListener('resize', () => {
    setIsSidebarOpen(window.innerWidth > 768);
  });

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const menu = [
    { title: 'Iscrizione', url: '/', icon: <MdSubscriptions size={isSidebarOpen ? 20 : 24} /> },
    { title: 'Corsi', url: '/corsi', icon: <MdList size={isSidebarOpen ? isSidebarOpen ? 20 : 24 : 24} /> },
  ];

  return isSidebarOpen ? ( // Sidebar open
    <aside className='w-[60vw] md:w-[18vw] 3xl:w-[13vw] h-full px-3 py-8 rounded-tr-3xl bg-blue-600 text-white overflow-hidden left-0 bottom-0'>
      <div className='h-full flex flex-col justify-between'>
        <div>
          <div className='flex items-center justify-between'>
            <img className='h-6' src={KMsolution_white} alt='Logo' />
            <button onClick={toggleSidebar} title='Riduci'>
              <MdClose size={24} />
            </button>
          </div>
          <nav className='flex flex-col my-8'>
            {menu.map((item, index) => (
              <Link key={index} to={item.url}
                className={`flex items-center gap-3 my-2 px-3 py-2 font-medium rounded-lg border border-white
                ${location.pathname === item.url ?
                    'bg-white text-black border border-blue-600' :
                    'hover:bg-blue-200 hover:text-black hover:border-transparent'}`}
              >
                {item.icon} {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <ProfileCard isOpen={isSidebarOpen} />
      </div>
    </aside>
  ) : ( // Sidebar closed
    <aside className='w-auto h-full py-8 rounded-tr-3xl bg-blue-600 text-white overflow-hidden left-0 bottom-0'>
      <div className='h-full flex flex-col justify-between'>
        <div>
          <div className='flex items-center justify-center'>
            <button onClick={toggleSidebar} title='Espandi'>
              <MdMenu size={24} />
            </button>
          </div>
          <nav className='flex flex-col my-8'>
            {menu.map((item, index) => (
              <Link key={index} to={item.url} title={item.title}
                className={`my-2 px-2 py-1
                ${location.pathname === item.url ?
                    'border-l-4 border-white' :
                    'hover:border-l-4 hover:border-blue-200 ml-1 hover:ml-0'}`}
              >
                {item.icon}
              </Link>
            ))}
          </nav>
        </div>
        <ProfileCard isOpen={isSidebarOpen} />
      </div>
    </aside>
  );
}

export default Sidebar;