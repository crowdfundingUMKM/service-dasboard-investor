import PaymentSuccessLayout from '@/pages/payments/success/layout';

import DataTable from '@/components/utils/DataTable';

export default function PaymentSuccess() {
    return (
        <PaymentSuccessLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Pembayaran Sukses</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item">Pembayaran</li>
                    <li className="breadcrumb-item active">Pembayaran Sukses</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <div className="col-lg">
                <div
                    className="alert alert-info alert-dismissible fade show"
                    role="alert"
                >
                    <h5 className="alert-heading">Tentang Pembayaran Sukses</h5>
                    <p>
                    Anda dapat melihat bahwa pembayaran Anda telah berhasil dan mengetahui
                    jumlah donasi yang Anda berikan untuk mendukung proyek tersebut.
                    Selain itu, Anda juga dapat melihat status campaign yang telah Anda
                    donasi di halaman ini untuk memantau perkembangan proyek yang Anda
                    dukung.
                    </p>
                    <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    />
                </div>
                </div>
                <section className="section dashboard">
                <div className="row">
                    {/* Left side columns */}
                    <div className="col-lg">
                    <div className="row">
                        {/* Total Transaksi */}
                        <div className="col-12">
                        <div className="card recent-sales overflow-auto">
                            <div className="card-body">
                            <h5 className="card-title">Transkasi Berhasil</h5>
                            <DataTable>
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Pemilik Campign</th>
                                    <th scope="col">Campign UMKM</th>
                                    <th scope="col">Anda Bayar</th>
                                    <th scope="col">Status Transaksi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">
                                    <a href="#">#2457</a>
                                    </th>
                                    <td>Brandon Jacob</td>
                                    <td>
                                    <a href="#" className="text-primary">
                                        At praesentium minu
                                    </a>
                                    </td>
                                    <td>Rp.600.400</td>
                                    <td>
                                    <span className="badge bg-success">Approved</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                    <a href="#">#2049</a>
                                    </th>
                                    <td>Ashleigh Langosh</td>
                                    <td>
                                    <a href="#" className="text-primary">
                                        At recusandae consectetur
                                    </a>
                                    </td>
                                    <td>$147</td>
                                    <td>
                                    <span className="badge bg-success">Approved</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                    <a href="#">#2644</a>
                                    </th>
                                    <td>Raheem Lehner</td>
                                    <td>
                                    <a href="#" className="text-primary">
                                        Sunt similique distinctio
                                    </a>
                                    </td>
                                    <td>$165</td>
                                    <td>
                                    <span className="badge bg-success">Approved</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                    <a href="#">#2645</a>
                                    </th>
                                    <td>Anthony Leonhard</td>
                                    <td>
                                    <a href="#" className="text-primary">
                                        Sunt yuliotos distinctio
                                    </a>
                                    </td>
                                    <td>$165</td>
                                    <td>
                                    <span className="badge bg-success">Approved</span>
                                    </td>
                                </tr>
                                </tbody>
                            </DataTable>
                            </div>
                        </div>
                        </div>
                        {/* End Transaksi */}
                    </div>
                    </div>
                    {/* End Left side columns */}
                </div>
                </section>
            </main>
            {/* End #main */}

        </PaymentSuccessLayout>

    );

}