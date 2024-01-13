import { useUser } from '@/components/Context/userContext';
import ProfileLayout from './layout';
import Image from 'next/image';
import Link from 'next/link';

// iamge utils
import { getImageUrl } from '@/components/utils/ImageUtils';

import OverviewProfileData from '@/components/organisms/users/overview/index';
import EditProfileData from '@/components/organisms/users/editProfile/index';
import ChangePasswordData from '@/components/organisms/users/changePassword/index';

export default function Profile() {

    const user = useUser();
    const imageUrl = user ? getImageUrl(user.avatar_file_name) : '/assets/img/avatar/avatar.png';
    return (
      <ProfileLayout>

        <main id="main" className="main">
        <div className="pagetitle">
            <h1>Profile</h1>
            <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link href="/dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item">Users</li>
                <li className="breadcrumb-item active">Profile</li>
            </ol>
            </nav>
        </div>
        {/* End Page Title */}
        <section className="section profile">
            <div className="row">
            <div className="col-xl-4">
                <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    <Image
                    src={imageUrl}
                    alt="Profile"
                    className="rounded-circle"
                    width={120}
                    height={120}
                    />
                    <h2>{user ? user.name : 'null'}</h2>
                    <h3>Investor</h3>
                    <div className="social-links mt-2">
                    <a href={user && user.fb_link ? user.fb_link : ''} className="facebook">
                        <i className="bi bi-facebook" />
                    </a>
                    <a href={user && user.ig_link ? user.ig_link : ''} className="instagram">
                        <i className="bi bi-instagram" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-8">
                <div className="card">
                <div className="card-body pt-3">
                    {/* Bordered Tabs */}
                    <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                        <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                        >
                        Overview
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                        >
                        Edit Profile
                        </button>
                    </li>
                    {/* <li class="nav-item">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
                </li> */}
                    <li className="nav-item">
                        <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-change-password"
                        >
                        Change Password
                        </button>
                    </li>
                    </ul>
                    <div className="tab-content pt-2">
                        <OverviewProfileData/>
                        <EditProfileData/>
                        <ChangePasswordData/>
                    
                    </div>
                    {/* End Bordered Tabs */}
                </div>
                </div>
            </div>
            </div>
        </section>
        </main>

      </ProfileLayout>
  );
}