import LoginLayout from '@/pages/@auth/login/layout';

import Link from 'next/link';
import Image from 'next/image';
function Login() {
    return (
        <LoginLayout>
            <main className="mian">
                <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex justify-content-center py-4">
                            <div className="logo d-flex align-items-center w-auto">
                            <Image src="/assets/img/logo.png" alt="" height={100} width={100}/>
                            <span className="d-none d-lg-block">Investor CRWD</span>
                            </div>
                        </div>
                        {/* End Logo */}
                        <div className="card mb-3">
                            <div className="card-body">
                            <div className="pt-4 pb-2">
                                <h5 className="card-title text-center pb-0 fs-4">
                                Masuk ke akun Anda
                                </h5>
                                <p className="text-center small">
                                Masukkan email &amp; kata sandi Anda untuk login
                                </p>
                            </div>
                            <form className="row g-3 needs-validation" noValidate="">
                                <div className="col-12">
                                <label htmlFor="yourEmail" className="form-label">
                                    Email
                                </label>
                                <div className="input-group has-validation">
                                    <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    id="yourEmail"
                                    required=""
                                    />
                                    <div className="invalid-feedback">
                                    Tolong, masukan email anda
                                    </div>
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
                                        onclick="togglePasswordVisibility()"
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
                                    type="checkbox"
                                    name="remember"
                                    defaultValue="true"
                                    id="rememberMe"
                                    />
                                    <label
                                    className="form-check-label"
                                    htmlFor="rememberMe"
                                    >
                                    Remember me
                                    </label>
                                </div>
                                </div>
                                <div className="col-12">
                                <button className="btn btn-primary w-100" type="submit">
                                    Login
                                </button>
                                </div>
                                <div className="col-12">
                                <p className="small mb-0">
                                    Tidak punya akun?{" "}
                                    <Link href="/@auth/register">Buat akun</Link>
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

        </LoginLayout>
    );
}

Login.layout = LoginLayout;

export default Login;