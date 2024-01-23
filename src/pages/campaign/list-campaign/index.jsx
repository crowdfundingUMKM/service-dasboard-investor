import ListCampaignLayout from "@/pages/campaign/list-campaign/layout";

import Image from 'next/image'
import Link from 'next/link'

export default function ListCampaign() {

  return (
      <>
        <ListCampaignLayout>
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Daftar Campaign UMKM</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item">Campaign UMKM</li>
                <li className="breadcrumb-item active">Daftar Campaign UMKM</li>
              </ol>
            </nav>
          </div>
          {/* End Page Title */}
          <section className="section">
            <div className="col-lg">
              <div
                className="alert alert-info alert-dismissible fade show"
                role="alert"
              >
                <h5 className="alert-heading">Tentang Daftar Campaign UMKM</h5>
                <p>
                  Anda dapat menemukan beragam proyek UMKM yang membutuhkan donasi dan
                  dukungan dari para investor. Jika Anda tertarik untuk mendukung
                  salah satu campaign, Anda dapat mengklik tombol &quot;Donate&rdquo; untuk
                  menuju halaman detail campaign dan memberikan donasi sesuai dengan
                  keinginan Anda.
                </p>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                />
              </div>
            </div>
            {/* content */}
            <div className="conrainer">
              <div className="row">
                <div className="col-4">
                  {/* Default Card */}
                  <div className="card">
                    <Image
                      src="/assets/img/campaign/1/banner2.jpeg"
                      className="card-img-top"
                      alt="..."
                      width={400}
                      height={400}

                    />
                    <div className="card-body">
                      <div className="pt-4">
                        <p className="mb-3">15 Mar, 2023</p>
                        {/*  bar loan*/}
                        <div className="progress mb-2">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                            role="progressbar"
                            aria-valuenow={30}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "30%" }}
                          >
                            30%
                          </div>
                        </div>
                        <div className="row d-flex justify-content-between pb-2">
                          <div className="col">Rp.4.800.000</div>
                        </div>
                        <h2 className="h4">
                          <a
                            className="text-black shorten-text-card"
                            href="/campaign/preview/1"
                          >
                            Kreatif Ceria Crafts
                          </a>
                        </h2>
                        <p className="shorten-text-card">
                        "Kreatif Ceria Crafts" adalah UMKM yang berfokus pada produksi kerajinan tangan unik dan kreatif.
                        </p>
                        <div className="d-grid gap-2 mx-auto">
                          <Link href="/campaign/preview/1">
                          <button className="btn btn-primary w-100" type="button">
                            Donate
                          </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Default Card */}
                </div>
                <div className="col-4">
                  {/* Default Card */}
                  <div className="card">
                    <Image
                      src="/assets/img/campaign/2/banner2.jpeg"
                      className="card-img-top"
                      alt="..."
                      width={400}
                      height={400}

                    />
                    <div className="card-body">
                      <div className="pt-4">
                        <p className="mb-3">14 Mar, 2020</p>
                        {/*  bar loan*/}
                        <div className="progress mb-2">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                            role="progressbar"
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                        <div className="row d-flex justify-content-between pb-2">
                          <div className="col">Rp. 600.000</div>
                        </div>
                        <h2 className="h4">
                          <a
                            className="text-black shorten-text-card"
                            href="/campaign/preview/2"
                          >
                            Bumi Subur Agro
                          </a>
                        </h2>
                        <p className="shorten-text-card">
                        "Bumi Subur Agro" adalah UMKM yang berfokus pada pengembangan pertanian organik. Kami berkomitmen untuk menyediakan produk-produk pertanian berkualitas tinggi tanpa menggunakan bahan kimia berbahaya. 
                        </p>
                        <div className="d-grid gap-2 mx-auto">
                          <button className="btn btn-primary w-100" type="button">
                            Donate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Default Card */}
                </div>
              
              </div>
            </div>
          </section>
        </main>
        {/* End #main */} 
        </ListCampaignLayout>
      </>
    );
  }