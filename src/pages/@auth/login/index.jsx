import LoginLayout from '@/pages/@auth/login/layout';

import Link from 'next/link';
import Image from 'next/image';

import LogInForm from '@/components/organisms/login';

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
                            <Image src="/assets/img/logo.png" alt="" height={200} width={100}/>
                            <span className="d-none d-lg-block">Investor</span>
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
                            <LogInForm/>
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