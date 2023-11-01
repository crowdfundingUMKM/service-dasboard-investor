import ReportAdminLayout from '@/pages/notif/notif-report/layout';

export default function ReportAdmin() {

    return (
        <ReportAdminLayout>

<>
  <main id="main" className="main">
    <div className="pagetitle">
      <h1>Kontak Admin</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item">User</li>
          <li className="breadcrumb-item active">Kontak Admin</li>
        </ol>
      </nav>
    </div>
    <section className="section dashboard">
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Kirim Pesan Ke Admin</h5>
              {/* General Form Elements */}
              <form>
                <div className="row mb-3">
                  <label
                    htmlFor="inputText"
                    className="col-sm-2 col-form-label"
                  >
                    Nama
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="yourName"
                      readOnly=""
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputEmail"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="youremai@userinvestor.com"
                      readOnly=""
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputText"
                    className="col-sm-2 col-form-label"
                  >
                    Judul
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Judul"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Deskripsi
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      style={{ height: 100 }}
                      placeholder="Deskripsi untuk admin"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Type Error</label>
                  <div className="col-sm-10">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected="">Pilih jenis error</option>
                      <option value={1} className="text-bg-danger">
                        Fatal
                      </option>
                      <option value={2} className="text-bg-warning">
                        Warning
                      </option>
                      <option value={3} className="text-bg-info">
                        Info
                      </option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputNumber"
                    className="col-sm-2 col-form-label"
                  >
                    Keterangan
                  </label>
                  <div className="col-sm-10">
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Kirim</label>
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">
                      Lapor Sekarang
                    </button>
                  </div>
                </div>
              </form>
              {/* End General Form Elements */}
            </div>
          </div>
        </div>
      </div>
      {/* /.container-fluid */}
    </section>
  </main>
  {/* End #main */}
</>

        
        
        </ReportAdminLayout>
    );

}