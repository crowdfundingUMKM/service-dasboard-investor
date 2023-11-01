import  PaymentFailLayout from '@/pages/payments/fail/layout'
import Link from 'next/link'
import DataTable from '@/components/utils/DataTable';

export default function PaymentFail() {

    return (
        <PaymentFailLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Pembayaran Batal</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Pembayaran</li>
                    <li className="breadcrumb-item active">Pembayaran Batal</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <div className="col-lg">
                <div
                    className="alert alert-info alert-dismissible fade show"
                    role="alert"
                >
                    <h5 className="alert-heading">Tentang Pembayaran Batal</h5>
                    <p>
                    Halaman Pembayaran Batal menunjukkan bahwa transaksi donasi yang Anda
                    lakukan pada campaign UMKM telah dibatalkan karena pembayaran belum
                    diselesaikan. Jika Anda berencana untuk berdonasi ulang, Anda dapat
                    kembali ke halaman List Campaign untuk melihat kembali campaign yang
                    tersedia dan memilih kembali campaign yang ingin Anda donasi. Pastikan
                    untuk menyelesaikan pembayaran agar donasi Anda dapat diproses dengan
                    sukses.
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
                                    <th scope="col">Link</th>
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
                                    <span className="badge bg-danger">Failed</span>
                                    </td>
                                    <td>
                                    <a href="#">
                                        <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        >
                                        Link
                                        </button>
                                    </a>
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
                                    <span className="badge bg-danger">Failed</span>
                                    </td>
                                    <td>
                                    <a href="#">
                                        <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        >
                                        Link
                                        </button>
                                    </a>
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
                                    <span className="badge bg-danger">Failed</span>
                                    </td>
                                    <td>
                                    <a href="#">
                                        <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        >
                                        Link
                                        </button>
                                    </a>
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
                                    <span className="badge bg-danger">Failed</span>
                                    </td>
                                    <td>
                                    <a href="#">
                                        <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        >
                                        Link
                                        </button>
                                    </a>
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

        </PaymentFailLayout>
    )
}