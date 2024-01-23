import Link from 'next/link';
import { togglePasswordVisibility } from '@/components/utils/BottenHidePassword';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Cookies from 'js-cookie';
import { setRegister, setEmailCheck, setPhoneCheck } from '@/service/investor/auth'; // Ganti dengan jalur yang sesuai

export default function RegisterForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleInput = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const userForm = {
            name,
            phone,
            email,
            password,
        };

        const phoneCheck = {
            phone,
        };

        const emailCheck = {
            email,
        };

        // Pengecekan email dilakukan di sini
        // const phoneResponse = await setPhoneCheck(phoneCheck);
        // const emailResponse = await setEmailCheck(emailCheck);
        
    //    check if true make failure
    // if (phoneResponse.data.is_available === false || emailResponse.data.is_available === false) {
    //     const error = emailResponse.data.is_available === false ? 'Email' : 'Nomor Hp';
    //     Notify.failure(`${error} sudah terdaftar!!!`);
    //     return;
    // }

    if (!name || !phone || !email || !password) {
        const error = !name ? 'Nama' : !phone ? 'Nomor Hp' : !email ? 'Email' : 'Password';
        Notify.failure(`${error} wajib diisi!!!`);
    } else {
        const result = await setRegister(userForm);

        if (result.error) {
            Notify.failure(result.message);
        } else {
            const { status_account, token } = result.data;
            if (status_account === 'active') {
                Cookies.set('token', token, { expires: 1 });
                // success notification
                Notify.success('Registrasi Berhasil');
                router.push('/dashboard');
                Notify.info('Selamat Datang ' + name)
            } else {
                Notify.info('Akun anda belum aktif, silahkan hubungi admin');
            }

        }
        };
    
    }
  
      return(
        <div className="row g-3 needs-validation" noValidate="">
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
                value={name}
                onChange={(event) => setName(event.target.value)}
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
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
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
                value={email}
                
                onChange={(event) => setEmail(event.target.value)}
            />
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
                    onClick={togglePasswordVisibility}
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
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
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
            <button className="btn btn-primary w-100" type="submit" onClick={onSubmit}>
                Buat Akun Sekarang
            </button>
            </div>
            <div className="col-12">
            <p className="small mb-0">
                Sudah memiliki akun?{" "}
                <Link href="/@auth/login">Log in</Link>
            </p>
            </div>
        </div>

      )
}

    