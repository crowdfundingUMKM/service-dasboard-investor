
import Link from 'next/link';
import StatusFailureLayout from './layout';
import Image from 'next/image'

function StatusFailure() {

    return(
        <main className="main"> 
        <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h2>Pembayaran Gagal</h2>
            <p>Pembayaran anda Gagal, Silahkan hubungi admin jika terdapat kendala.</p>
            
            <Image
                src="/assets/img/status/failure.svg"
                className="img-fluid py-4 px-5 pb-0"
                alt="Page Not Found"
                width={600}
                height={600}
                priority={false}
            />

            <Link className="btn mt-5" href="/dashboard">
                Dashboard
            </Link>
        </section>
    </main>
    )
}

// Tentukan layout khusus untuk halaman ini
StatusFailure.layout = StatusFailureLayout;

export default StatusFailure;