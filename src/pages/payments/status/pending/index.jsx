
import Link from 'next/link';
import StatusPendingLayout from './layout';
import Image from 'next/image'

function StatusPending() {

    return(
        <main className="main"> 
                <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                    <h2>Pembayaran di tunda</h2>
                    <p>Pembayaran anda ditunda, Silahkan hubungi admin jika terdapat kendala.</p>
                    
                    <Image
                        src="/assets/img/status/pending.svg"
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

StatusPending.layout = StatusPendingLayout;

export default StatusPending;