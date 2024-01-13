// "use client";

import Link from "next/link";
import Image from "next/image";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useUser } from '@/components/Context/userContext';

// iamge utils
import { getImageUrl } from '@/components/utils/ImageUtils';


export default function ProfileDropdown() {
    
    const router = useRouter();
    
    const user = useUser();
    const imageUrl = user ? getImageUrl(user.avatar_file_name) : '/assets/img/avatar/avatar.png';

    // console.log('Nilai user:', user);
    
    const onLogout = () => {
        Cookies.remove('token');
        router.push('/@auth/login');
        Notify.success('Berhasil Logout');
      };

    return (
        <li className="nav-item dropdown pe-3">
            <Link href="#" data-bs-toggle="dropdown" data-bs-target="#profileDropdown">
                <div className="nav-link nav-profile d-flex align-items-center pe-0 " >
                    <div className="rounded-circle">
                        <Image src={imageUrl} alt="Profile" width={36} height={36} className="rounded-circle"/>

                    </div>
                    <span className="d-none d-md-block dropdown-toggle ps-2">{user ? user.name : 'null'}</span>
                </div>
            </Link>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"  id="#profileDropdown">
                <li className="dropdown-header"> 
                    <h6>{user ? user.name : 'null'}</h6>
                    <span>Investor UMKM</span>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                    <Link href="/information/profile">
                        <div className="dropdown-item d-flex align-items-center">
                            <i className="bi bi-person" />
                            <span>My Profile</span>
                        </div>
                    </Link>
                </li>
                <li>
                <hr className="dropdown-divider" />
                </li>
                <li>
                <Link href="/notif/notif-report" >
                <div className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-question-circle " />
                    <span>Need Help?</span>
                    </div> 
                </Link>
                </li>
                <li>
                <hr className="dropdown-divider" />
                </li>
                <li onClick={onLogout}>
                <Link href="/@auth/login">
                    <div className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-box-arrow-right" />
                    <span>Sign Out</span>
                    </div>
                </Link>
                </li>

            </ul>
        </li>
    );
}
