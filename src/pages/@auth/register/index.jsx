import RegisterLayout from '@/pages/@auth/register/layout';
import Link from 'next/link';
import Image from 'next/image';
function Register() {

    const handleInput = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
      };

    return (
        <RegisterLayout>
            <main className="main">
                <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex justify-content-center py-4">
                            <div className="logo d-flex align-items-center w-auto">
                            <Image src="/assets/img/logo.png" alt="" height={100} width={100}/>
                            <span className="d-none d-lg-block">Wellcome Investor</span>
                            </div>
                        </div>
                        {/* End Logo */}
                        <div className="card mb-3">
                            <div className="card-body">
                            <div className="pt-4 pb-2">
                                <h5 className="card-title text-center pb-0 fs-4">
                                Buat Akun Anda
                                </h5>
                                <p className="text-center small">
                                Mari membantu para UMKM dalam Bidang Pendanaan
                                </p>
                            </div>
                            <form className="row g-3 needs-validation" noValidate="">
                                <div className="col-12">
                                <label htmlFor="yourName" className="form-label">
                                    Nama Anda
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="yourName"
                                    required=""
                                />
                                <div className="invalid-feedback">
                                    Tolong, masukan nama anda!
                                </div>
                                </div>
                                <div className="col-12">
                                <label htmlFor="yourPhone" className="form-label">
                                    Nomor Hp
                                </label>
                                <div className="input-group has-validation">
                                    <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    id="phone"
                                    required=""
                                    pattern="08[0-9]{8,}"
                                    onInput={handleInput}
                                    minLength={10}
                                    />
                                    <div className="invalid-feedback">
                                    Masukkan Nomor Hp yang valid (diawali dengan 08 dan
                                    minimal 10 angka)
                                    </div>
                                </div>
                                </div>
                                <div className="col-12">
                                <label htmlFor="yourEmail" className="form-label">
                                    Email Anda
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="yourEmail"
                                    required=""
                                />
                                <div className="invalid-feedback">
                                    Tolong, masukan email yang valid!
                                </div>
                                </div>
                                <div className="col-12">
                                <label htmlFor="yourPassword" className="form-label">
                                    Password
                                </label>
                                <div className="input-group has-validation">
                                    <div className="input-group-prepend">
                                    <button
                                        type="button"
                                        id="showHideBtn"
                                        className="btn btn-outline-secondary"
                                    >
                                        <i className="bi bi-eye-slash" />
                                    </button>
                                    </div>
                                    <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="yourPassword"
                                    required=""
                                    />
                                    <div className="invalid-feedback">
                                    Tolong, masukkan password anda!
                                    </div>
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    name="terms"
                                    type="checkbox"
                                    defaultValue=""
                                    id="acceptTerms"
                                    required=""
                                    />
                                    <label
                                    className="form-check-label"
                                    htmlFor="acceptTerms"
                                    >
                                    Saya setuju dan menerima{" "}
                                    <a href="#">syarat dan ketentuan</a>
                                    </label>
                                    <div className="invalid-feedback">
                                    Anda harus setuju sebelum mengirimkan
                                    </div>
                                </div>
                                </div>
                                <div className="col-12">
                                <button className="btn btn-primary w-100" type="submit">
                                    Buat Akun Sekarang
                                </button>
                                </div>
                                <div className="col-12">
                                <p className="small mb-0">
                                    Sudah memiliki akun?{" "}
                                    <Link href="/@auth/login">Log in</Link>
                                </p>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="credits">Designed by Ahmad Zaky</div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>
            </main>
    {/* End #main */}

        </RegisterLayout>
    );

}

Register.layout = RegisterLayout;
export default  Register;
