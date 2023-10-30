import FaqLayout from './layout';
import Link from 'next/link';



export default function Faq(){
    return(
        <>
        <FaqLayout>
            <main id="main" className="main">
                {/* start title */}
                <div className="pagetitle">
                <h1>F.A.Q Page</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item active">F.A.Q</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Tentang Crowdfunding UMKM</h5>
                        <p>
                            Crowdfunding UMKM merupakan platform inovatif yang didedikasikan
                            untuk mendukung dan mengembangkan Usaha Mikro, Kecil, dan
                            Menengah (UMKM) di Indonesia. Kami bertujuan untuk memberikan
                            akses keuangan yang lebih mudah bagi para pelaku usaha UMKM yang
                            membutuhkan modal untuk mengembangkan bisnis mereka. Dengan
                            pendekatan crowdfunding, kami mempertemukan para pelaku usaha
                            dengan para investor yang tertarik untuk berinvestasi pada
                            proyek-proyek UMKM yang menjanjikan.
                        </p>
                        <p>
                            Dalam Crowdfunding UMKM, para pelaku usaha dapat mengajukan
                            proposal bisnis mereka yang terperinci dan meyakinkan. Proposal
                            tersebut mencakup visi, misi, model bisnis, dan rencana
                            penggunaan modal. Para investor dapat memilih proyek UMKM yang
                            sesuai dengan minat dan tujuan investasi mereka. Selain
                            memberikan kesempatan bagi UMKM untuk mendapatkan modal,
                            Crowdfunding UMKM juga memberdayakan para investor dengan
                            kesempatan untuk mendapatkan keuntungan dari keberhasilan proyek
                            UMKM yang mereka dukung. Selain itu, kami juga menyediakan
                            layanan konsultan yang ahli di bidangnya untuk memberikan
                            bimbingan dan pengawasan agar proyek-proyek UMKM dapat berjalan
                            dengan sukses dan memenuhi standar keberlanjutan yang tinggi.
                            Dengan semangat kolaborasi dan transparansi, Crowdfunding UMKM
                            berkomitmen untuk menjadi mitra terpercaya dalam pertumbuhan dan
                            kesuksesan UMKM di Indonesia, serta terus berkontribusi dalam
                            memajukan sektor UMKM dan ekonomi negara secara keseluruhan.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Tata cara investasi</h5>
                        <p>
                            Tata cara investasi pada Crowdfunding UMKM adalah sebagai
                            berikut:
                        </p>
                        <ul>
                            <li>
                            Pilih Usaha atau Campaign: Pengguna dapat mengakses halaman
                            &quot;Campaign UMKM&rdquo; di dalam platform Crowdfunding. Pada sub-list
                            Campaign UMKM, pengguna akan menemukan berbagai proyek UMKM
                            yang tersedia untuk diinvestasikan. Pengguna dapat memilih
                            proyek yang menarik dan sesuai dengan preferensi investasi
                            mereka.
                            </li>
                            <li>
                            Investasi pada UMKM: Setelah memilih proyek UMKM yang ingin
                            diinvestasikan, pengguna dapat mengisi jumlah dana yang ingin
                            disalurkan pada proyek tersebut. Pengguna diminta untuk
                            memasukkan jumlah uang yang ingin diinvestasikan dan
                            menyetujui persyaratan serta ketentuan yang berlaku.
                            </li>
                            <li>
                            Proses Pembayaran: Setelah semua informasi telah disetujui,
                            pengguna akan diarahkan ke halaman Midtrans untuk pemilihan
                            metode pembayaran. Di sini, pengguna dapat memilih metode
                            pembayaran yang diinginkan, seperti kartu kredit, transfer
                            bank, atau dompet digital.
                            </li>
                            <li>
                            Konfirmasi Pembayaran: Jika pembayaran sukses, pengguna akan
                            diarahkan ke halaman &quot;Succes Payment,&rdquo; yang menampilkan
                            konfirmasi bahwa investasi telah berhasil. Namun, jika
                            pembayaran gagal, pengguna akan diarahkan ke halaman &quot;Pending
                            Payment,&rdquo; dan pengguna dapat mencoba metode pembayaran lainnya
                            atau memeriksa masalah yang mungkin terjadi.
                            </li>
                        </ul>
                        <p>
                            Setelah proses investasi selesai, pengguna dapat melihat
                            transaksi yang telah dilakukan pada halaman &quot;My Invest
                            Campaign.&rdquo; Di sini, pengguna dapat memantau perkembangan
                            investasi dan melihat informasi terkait proyek UMKM yang telah
                            diinvestasikan. Dengan tata cara investasi yang transparan dan
                            sederhana ini, Crowdfunding UMKM berusaha memberikan pengalaman
                            investasi yang mudah dan menyenangkan bagi para investor dalam
                            mendukung pertumbuhan UMKM di Indonesia.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Laporkan Permasalahan</h5>
                        <p>
                            Pengguna Crowdfunding UMKM yang mengalami permasalahan atau
                            menemui kesalahan dalam menggunakan platform dapat dengan mudah
                            melaporkannya melalui fitur &quot;Kontak Admin.&rdquo; Pada halaman ini,
                            pengguna dapat mengisi formulir laporan yang mencakup rincian
                            tentang permasalahan yang dialami. Pengguna diminta untuk
                            memberikan informasi yang jelas dan detail mengenai masalah yang
                            terjadi, serta mencantumkan jenis masalah yang dihadapi, seperti
                            Error Fatal, warning, atau info.
                        </p>
                        <p>
                            Tata cara melapor pada Crowdfunding UMKM adalah sebagai berikut:
                        </p>
                        <ul>
                            <li>
                            Kunjungi halaman &quot;Kontak Admin&rdquo;: Pengguna dapat mengakses
                            halaman &quot;Kontak Admin&rdquo; yang tersedia di dalam platform
                            Crowdfunding UMKM. Halaman ini menyediakan formulir laporan
                            yang dapat diisi oleh pengguna untuk melaporkan permasalahan
                            atau kesalahan yang mereka temui.
                            </li>
                            <li>
                            Isi Formulir Laporan: Pada halaman &quot;Kontak Admin,&rdquo; pengguna
                            diharapkan mengisi formulir laporan dengan rincian yang
                            lengkap tentang masalah yang dihadapi. Beberapa informasi yang
                            dapat dimasukkan termasuk deskripsi permasalahan,
                            langkah-langkah yang telah diambil sebelum masalah terjadi,
                            serta jenis masalah yang dihadapi (Error Fatal, warning, atau
                            info).
                            </li>
                            <li>
                            Kirim Laporan: Setelah pengguna mengisi formulir laporan
                            dengan benar, mereka dapat mengirimkan laporan tersebut kepada
                            tim admin Crowdfunding UMKM. Tim admin akan menerima laporan
                            tersebut dan segera mengevaluasi masalah yang dihadapi
                            pengguna. Pengguna juga dapat mencantumkan kontak yang dapat
                            dihubungi jika admin memerlukan informasi lebih lanjut terkait
                            masalah yang dilaporkan.
                            </li>
                        </ul>
                        <p>
                            Dengan adanya fitur melaporkan permasalahan ini, Crowdfunding
                            UMKM berkomitmen untuk memberikan pelayanan yang lebih baik bagi
                            pengguna dan segera menangani setiap masalah yang mungkin
                            terjadi demi menjaga pengalaman pengguna yang optimal dalam
                            berinvestasi pada proyek UMKM.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </main>
        </FaqLayout>
  {/* End #main */}
</>

    )
}