import NotifAdminLayout from '@/pages/notif/notif-admin/layout';
import Link from 'next/link';

export default function NotifAdmin() {
    return (

    <NotifAdminLayout>
        <main id="main" className="main">
        <div className="pagetitle">
            <h1>Notif Admin</h1>
            <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link href="/dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item">Pages</li>
                <li className="breadcrumb-item active">Notif Admin</li>
            </ol>
            </nav>
        </div>
        {/* End Page Title */}
        <section className="section">
            <div className="row">
            <div className="col-lg">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Judul Informasi</h5>
                    <p>
                    This is an examle page with no contrnt. You can use it as a
                    starter for your custom pages.
                    </p>
                    <br />
                    <div className="user-admin ">
                    <p>Name Admin - 12 Mei 2023</p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Judul Informasi</h5>
                    <p>
                    This is an examle page with no contrnt. You can use it as a
                    starter for your custom pages.
                    </p>
                    <br />
                    <div className="user-admin">
                    <p>Julian Androw - 12 Mei 2023</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </main>
    {/* End #main */}

    </NotifAdminLayout>
    );

}