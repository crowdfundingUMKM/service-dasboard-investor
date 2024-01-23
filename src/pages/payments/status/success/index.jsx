
import Link from 'next/link';
import Image from 'next/image';
import StatusSuccessLayout from './layout';


function StatusSuccess() {

    return(
        <main className="main"> 
        <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h2>Pembayaran Berhasil</h2>
            <p>Pembayaran anda Berhasil, Terima kasih telah membantu UMKM.</p>
            
            <Image
                src="/assets/img/status/success.svg"
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

StatusSuccess.layout = StatusSuccessLayout;

export default StatusSuccess;