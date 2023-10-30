"use client";
import Link from "next/link";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()
  
  
    // useEffect(() => {
    //     import('bootstrap/dist/js/bootstrap.bundle.min.js');
    //   }, []);

    //   if (typeof window !== "undefined") {
    //     require('bootstrap/dist/js/bootstrap.bundle.min.js');
    //   }


    return (
        <>
        {/* ======= Sidebar ======= */}
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <Link href="/dashboard">
                <div className={`nav-link  ${pathname === '/dashboard' ? '' : 'collapsed'}`}>
                    <i className="bi bi-grid" />
                    <span>Dashboard</span>
                </div>
              </Link>
            </li>
            {/* End Dashboard Nav */}
            {/* TIHIS my sidebar UP*/}
            {/* List Camapign */}
            <li className="nav-item list-campaign">
                <a href="" className="nav-link collapsed" data-bs-target="#list-campaign-nav" data-bs-toggle="collapse">
                    <i className="bi bi-bag" />
                    <span>Campaign UMKM</span>
                    <i className="bi bi-chevron-down ms-auto" />
                </a>

              <ul id="list-campaign-nav"  className={`nav-content collapse ${pathname === '/campaign/list-campaign' & '/campaign/my-invest' ? 'show' : ''}`} data-bs-parent="#sidebar-nav">
                <li>
                  <Link href="/campaign/list-campaign" className={`${pathname === '/campaign/list-campaign' ? 'active' : ''}`} >
                    <i className="bi bi-circle" />
                    <span>List Campaign UMKM</span>
                  </Link>
                </li>
                <li>
                  <Link href="/campaign/my-invest" className={`${pathname === '/campaign/my-invest' ? 'active' : ''}`}>
                    <i className="bi bi-circle" />
                    <span>My Invest Campaign</span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* End List Camapign*/}
            {/* Pembayaran Belum */}
            <li className="nav-item transaction-error">
                <a href="" className="nav-link collapsed" data-bs-target="#payment-status" data-bs-toggle="collapse">
                    <i className="bi bi-cash-stack" />
                    <span>Pembayaran</span>
                    <i className="bi bi-chevron-down ms-auto" />
                </a>
              <ul id="payment-status" className="nav-content collapse " data-bs-parent="#sidebar-nav" >
                <li>
                  <Link href="/payments/fail">
                    <i className="bi bi-circle" />
                    <span className="text-success">Pembayaran Sukses</span>
                  </Link>
                </li>
                <li>
                  <Link href="/payments/pending">
                    <i className="bi bi-circle" />
                    <span className="text-warning">Pembayaran Pending</span>
                  </Link>
                </li>
                <li>
                  <Link href="/payments/sukses">
                    <i className="bi bi-circle" />
                    <span className=" text-danger">Pembayaran Batal</span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* End List Camapign*/}
            {/* Notif Admin */}
            <li className="nav-item side-service">
                <a href="" className="nav-link collapsed" data-bs-target="#side-notif-admin" data-bs-toggle="collapse">
                    <i className="bi bi-app-indicator" />
                    <span>Notifikasi Admin</span>
                    <i className="bi bi-chevron-down ms-auto" />
                </a>    
              <ul id="side-notif-admin" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                  <Link href="notif-admin">
                    <i className="bi bi-circle" />
                    <span>Notif Admin</span>
                  </Link>
                </li>
                <li>
                  <Link href="notif-report">
                    <i className="bi bi-circle" />
                    <span>Lapor Admin</span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* End Notif Admin*/}
            {/* End this my sidabar UP */}
            <li className="nav-heading">Pages</li>
            <li className="nav-item">
              <Link href="/information/profile">
              <div className={`nav-link  ${pathname === '/information/profile' ? '' : 'collapsed'}`}>
                <i className="bi bi-person" />
                <span>Profile</span>
                </div>
              </Link>
            </li>
            {/* End Profile Page Nav */}
            <li className="nav-item">
              <Link  href="/information/faq">
                <div className={`nav-link  ${pathname === '/information/faq' ? '' : 'collapsed'}`}>
                <i className="bi bi-question-circle" />
                <span>F.A.Q</span>
                </div>
              </Link>
            </li>
            {/* End F.A.Q Page Nav */}
          </ul>
        </aside>
        {/* End Sidebar*/}
      </>
      
    );
  }