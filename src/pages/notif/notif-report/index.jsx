import ReportAdminLayout from '@/pages/notif/notif-report/layout';
import Link from 'next/link';

import ReportAdminForm from '@/components/organisms/notifAdmin/reportAdmin';

export default function ReportAdmin() {

    return (
        <ReportAdminLayout>
          <main id="main" className="main">
            <div className="pagetitle">
              <h1>Kontak Admin</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item">User</li>
                  <li className="breadcrumb-item active">Kontak Admin</li>
                </ol>
              </nav>
            </div>
            <section className="section dashboard">
              <div className="row">
                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Kirim Pesan Ke Admin</h5>
                      {/* General Form Elements */}
                      <ReportAdminForm/>
                      {/* End General Form Elements */}
                    </div>
                  </div>
                </div>
              </div>
              {/* /.container-fluid */}
            </section>
          </main>
        </ReportAdminLayout>
    );

}