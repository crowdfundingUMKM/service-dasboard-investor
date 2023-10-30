import Image from 'next/image'
import Link from 'next/link'

import ErrorLayout from '@/pages/error/layout'

function Custom404() {
    return (
        <main className="main"> 
            <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <h1>404</h1>
                <h2>Halaman yang Anda cari tidak ada.</h2>
                <Link className="btn" href="/dashboard">
                    Back to home
                </Link>
                <Image
                    src="/assets/img/not-found.svg"
                    className="img-fluid py-4 px-5 pb-0"
                    alt="Page Not Found"
                    width={600}
                    height={600}
                    priority={false}
                />
            </section>
        </main>
    )
}
// Tentukan layout khusus untuk halaman ini
Custom404.layout = ErrorLayout;


export default Custom404;