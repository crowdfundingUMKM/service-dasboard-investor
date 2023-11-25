import MyCampaignLayout from '@/pages/campaign/my-invest/layout';

import Image from 'next/image';
import Link from 'next/link';


export default function MyInvestCampaign() {
  return (
    <>
      <MyCampaignLayout>

  <main id="main" className="main">
    <div className="pagetitle">
      <h1>Daftar Campaign Donasi Saya</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/dashboard">Home</Link>
          </li>
          <li className="breadcrumb-item">Campaign UMKM</li>
          <li className="breadcrumb-item active">
            Daftar Campaign Donasi Saya
          </li>
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
          <h5 className="alert-heading">Tentang Daftar Campaign Donasi Saya</h5>
          <p>
            Anda bisa dengan mudah mengakses dan melihat proyek-proyek yang
            telah Anda dukung sebelumnya. Selain itu, jika Anda ingin memberikan
            donasi kembali pada campaign yang masih tersedia, Anda dapat
            melakukan donate lagi dengan cepat dan mudah di halaman ini.
          </p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        </div>
      </div>
      <div className="conrainer">
        <div className="row">
          <div className="col-4">
            {/* Default Card */}
            <div className="card">
              <Image
                src="/assets/img/card.jpg"
                className="card-img-top"
                alt="..."
                height={400}
                width={400}
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
                    <div className="col">Rp.600000</div>
                  </div>
                  <h2 className="h4">
                    <a
                      className="text-black shorten-text-card"
                      href="blog-details.html"
                    >
                      Cheerful Loving Couple Bakers Drinking Coffee
                    </a>
                  </h2>
                  <p className="shorten-text-card">
                    It’s no secret that the digital industry is booming. From
                    exciting startups to global good qualioty for proses and
                    then all
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
          <div className="col-4">
            {/* Default Card */}
            <div className="card">
            <Image
                src="/assets/img/card.jpg"
                className="card-img-top"
                alt="..."
                height={400}
                width={400}
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
                    <div className="col">Rp.600000</div>
                  </div>
                  <h2 className="h4">
                    <a
                      className="text-black shorten-text-card"
                      href="blog-details.html"
                    >
                      Cheerful Loving Couple Bakers Drinking Coffee
                    </a>
                  </h2>
                  <p className="shorten-text-card">
                    It’s no secret that the digital industry is booming. From
                    exciting startups to global good qualioty for proses and
                    then all
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
          <div className="col-4">
            {/* Default Card */}
            <div className="card">
              <Image
                src="/assets/img/card.jpg"
                className="card-img-top"
                alt="..."
                height={400}
                width={400}
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
                    <div className="col">Rp.600000</div>
                  </div>
                  <h2 className="h4">
                    <a
                      className="text-black shorten-text-card"
                      href="blog-details.html"
                    >
                      Cheerful Loving Couple Bakers Drinking Coffee
                    </a>
                  </h2>
                  <p className="shorten-text-card">
                    It’s no secret that the digital industry is booming. From
                    exciting startups to global good qualioty for proses and
                    then all
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
          <div className="col-4">
            {/* Default Card */}
            <div className="card">
             <Image
                src="/assets/img/card.jpg"
                className="card-img-top"
                alt="..."
                height={400}
                width={400}
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
                    <div className="col">Rp.600000</div>
                  </div>
                  <h2 className="h4">
                    <a
                      className="text-black shorten-text-card"
                      href="blog-details.html"
                    >
                      Cheerful Loving Couple Bakers Drinking Coffee
                    </a>
                  </h2>
                  <p className="shorten-text-card">
                    It’s no secret that the digital industry is booming. From
                    exciting startups to global good qualioty for proses and
                    then all
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
          <div className="col-4">
            {/* Default Card */}
            <div className="card">
              <Image
                src="/assets/img/card.jpg"
                className="card-img-top"
                alt="..."
                height={400}
                width={400}
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
                    <div className="col">Rp.600000</div>
                  </div>
                  <h2 className="h4">
                    <a
                      className="text-black shorten-text-card"
                      href="blog-details.html"
                    >
                      Cheerful Loving Couple Bakers Drinking Coffee
                    </a>
                  </h2>
                  <p className="shorten-text-card">
                    It’s no secret that the digital industry is booming. From
                    exciting startups to global good qualioty for proses and
                    then all
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

      </MyCampaignLayout>
    </>
  );
}