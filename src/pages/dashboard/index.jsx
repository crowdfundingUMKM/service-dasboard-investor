import Image from 'next/image'
import Link from 'next/link'


import ContentSide from '@/components/ContentSide'
// import layotu from this folder
import DashboardLayout from '@/pages/dashboard/layout'

import AuthWrapper from '@/components/auth/AuthWrapper';


import DataTable from '@/components/utils/DataTable';

export default function Home() {
  return (
  <AuthWrapper>
    <DashboardLayout>

    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/dashboard">Home</Link>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title */}
      <section className="section dashboard">
        <div className="row">
          {/* Left side columns */}
          <div className="col-lg-8">
            <div className="row">
              {/* Total Investasi */}
              <div className="col-xxl-6 col-xl-12">
                <div className="card info-card sales-card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Total Transaksi <span>| Anda</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cart" />
                      </div>
                      <div className="ps-3">
                        <h6>145</h6>
                        <span className="text-success small pt-1 fw-bold">
                          12%
                        </span>{" "}
                        <span className="text-muted small pt-2 ps-1">
                          increase
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Sales Card */}
              {/* Customers Card */}
              <div className="col-xxl-6 col-xl-12">
                <div className="card info-card customers-card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Investasi <span>| UMKM</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people" />
                      </div>
                      <div className="ps-3">
                        <h6>1244</h6>
                        <span className="text-success small pt-1 fw-bold">
                          13%
                        </span>{" "}
                        <span className="text-muted small pt-2 ps-1">
                        increase
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Customers Card */}
              {/* Total Transaksi */}
              <div className="col-12">
                <div className="card recent-sales overflow-auto">
                  <div className="card-body">
                    <h5 className="card-title">Total Transaksi Anda</h5>
                    <DataTable>
                      <thead>
                        <tr>
                          <th scope="col">id</th>
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
                            <span className="badge bg-success">Approved</span>
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
                            <a href="#">#2147</a>
                          </th>
                          <td>Bridie Kessler</td>
                          <td>
                            <a href="#" className="text-primary">
                              Blanditiis dolor omnis similique
                            </a>
                          </td>
                          <td>Rp. 500.000</td>
                          <td>
                            <span className="badge bg-warning">Pending</span>
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
                            <a href="#" className="text-primary" title="At recusandae consectetur">
                              At recusandae consectetur
                            </a>
                          </td>
                          <td>Rp. 200.000</td>
                          <td>
                            <span className="badge bg-success">Approved</span>
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
                          <td>Angus Grady</td>
                          <td>
                            <a href="#" className="text-primar">
                              Ut voluptatem id earum et
                            </a>
                          </td>
                          <td>Rp. 700.000</td>
                          <td>
                            <span className="badge bg-danger">Rejected</span>
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
                          <td>Rp. 100.000</td>
                          <td>
                            <span className="badge bg-success">Approved</span>
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
                            <span sc="" className="badge bg-success">
                              Approved
                            </span>
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
              {/* Top Campign */}
              <div className="col-12">
                <div className="card top-selling overflow-auto">
                  <div className="card-body pb-0">
                    <h5 className="card-title">
                      Top Campaign UMKM <span>| Tahun ini</span>
                    </h5>
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Preview Campaign</th>
                          <th scope="col">Campaign UMKM</th>
                          <th scope="col">Harga</th>
                          <th scope="col">Banyak Kontributor</th>
                          <th scope="col">Suku Bunga</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <Image src="/assets/img/product-1.jpg" alt="" width={60} height={60}/>
                            </a>
                          </th>
                          <td>
                            <a href="#" className="text-primary fw-bold">
                              Ut inventore ipsa voluptas nulla
                            </a>
                          </td>
                          <td>Rp. 31.000.000</td>
                          <td className="fw-bold">124</td>
                          <td>%2</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <Image src="/assets/img/product-2.jpg" alt="" width={60} height={60}/>
                            </a>
                          </th>
                          <td>
                            <a href="#" className="text-primary fw-bold">
                              Exercitationem similique doloremque
                            </a>
                          </td>
                          <td>Rp. 6.000.000</td>
                          <td className="fw-bold">98</td>
                          <td>%2</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <Image src="/assets/img/product-3.jpg" alt="" width={60} height={60}/>
                            </a>
                          </th>
                          <td>
                            <a href="#" className="text-primary fw-bold">
                              Doloribus nisi exercitationem
                            </a>
                          </td>
                          <td>Rp. 7.000.000</td>
                          <td className="fw-bold">74</td>
                          <td>%2</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <Image src="/assets/img/product-4.jpg" alt="" width={60} height={60}/>
                            </a>
                          </th>
                          <td>
                            <a href="#" className="text-primary fw-bold">
                              Officiis quaerat sint rerum error
                            </a>
                          </td>
                          <td>Rp. 10.000.000</td>
                          <td className="fw-bold">63</td>
                          <td>%2</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <Image src="/assets/img/product-5.jpg" alt="" width={60} height={60}/>
                            </a>
                          </th>
                          <td>
                            <a href="#" className="text-primary fw-bold">
                              Sit unde debitis delectus repellendus
                            </a>
                          </td>
                          <td>Rp. 700.000</td>
                          <td className="fw-bold">41</td>
                          <td>%2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* End Top Campaign */}
            </div>
          </div>
          {/* End Left side columns */}
            {/* ======= Content Side ======= */}
          <ContentSide />
          {/* End Content Side */}
        </div>
      </section>
    </main>

    </DashboardLayout>
  </AuthWrapper>
  )
}
