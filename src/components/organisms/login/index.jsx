import { setLogin } from '@/service/investor/auth'; // Ganti dengan jalur yang sesuai
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Cookies from 'js-cookie';
import Link from 'next/link';

import { togglePasswordVisibility } from '@/components/utils/BottenHidePassword';

export default function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

const onSubmit = async (event) => {
  event.preventDefault();
  const data = {
    email,
    password,
  };

  if (!email || !password) {
    const error = !email ? 'Email' : 'Password';
    Notify.failure(`${error} wajib diisi!!!`);
  } else {
    const response = await setLogin(data);   
    try {
        const { name, token, status_account } = response.data;
        if (status_account === "active"){
          Cookies.set('token', token, { expires: 1 });
          Notify.success('Login Berhasil', 1);
          router.push('/dashboard');
        } else {
          Notify.failure('Akun anda belum aktif, tunggu admin melakuakn aktifasi');
        }
      } catch (error) {
        console.error('Login error:', error);
        Notify.failure('Terjadi kesalahan saat melakukan login ' + data.email );
      }
    }
};




  return (
    <div className="row g-3 needs-validation" noValidate="">
      <div className="col-12">
      <label htmlFor="yourEmail" className="form-label">
          Email
      </label>
      <div className="input-group has-validation">
          <input
          type="email"
          name="email"
          className="form-control"
          id="yourEmail"
          value={email}
          placeholder="Masukan email"
          onChange={(event) => setEmail(event.target.value)}
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
      <button className="btn btn-primary w-100" type="submit" onClick={onSubmit}>
          Login
      </button>
      </div>
      <div className="col-12">
      <p className="small mb-0">
          Tidak punya akun?{" "}
          <Link href="/@auth/register">Buat akun</Link>
      </p>
      </div>
  </div>
  );
}
