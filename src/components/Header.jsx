import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import Link from 'next/link'
// import Image from 'next/image'
import dynamic from 'next/dynamic';
import ReloadButton from '@/components/button/ReloadButton';

import Image from 'next/image'



// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function HeaderComponent() {

  // const SidebarDynamic = dynamic(() => import('../components/Sidebar'), {
  //   ssr: true // Ini akan memuat komponen hanya di sisi klien
  // });

  // make notification dropdown menu active
  // useEffect(() => {
  //   const notificationDropdown = document.querySelector('.notification-dropdown');
  //   notificationDropdown.addEventListener('click', (e) => {
  //     e.stopPropagation();
  //     notificationDropdown.classList.toggle('active');
  //   });
  //   document.addEventListener('click', () => {
  //     notificationDropdown.classList.remove('active');
  //   });
  // }, []);

  // const toggleSidebar = () => {
  //   const sidebar = document.querySelector('#sidebar');
  //   sidebar.classList.toggle('active');
  // }

  // // notication dropdown ssr
  // const NotificationDropdownDynamic = dynamic(() => import('./NotificationDropdown'), {
  //   ssr: false // Ini akan memuat komponen hanya di sisi klien
  // });

  // const ProfileDropdownDynamic = dynamic(() => import('./ProfileDropdown'), {
  //   ssr: false// Ini akan memuat komponen hanya di sisi klien
    
  // });


    
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
        
        <Link href="/dashboard" >
            <div className="logo d-flex align-items-center">
                <Image src="/assets/img/logo.png" alt="Logo" height={100} width={100} priority={false}/>
                <span className="d-none d-lg-block">Investor</span>
            </div>
        </Link>
        <i className="bi bi-list toggle-sidebar-btn" />
        </div>
        {/* End Logo */}
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            {/* Reload Buttoon */}
              <ReloadButton />

              {/* Get Notify Dropdown */}
              {/* <NotificationDropdownDynamic  /> */}
              <NotificationDropdown />

              {/* End Notify Dropdown */}

              {/* Profile Dropdown */}
              <ProfileDropdown  />  
              {/* <ProfileDropdownDynamic  />   */}
                      
          </ul>
        </nav>
    </header>
    </>
  );
}

