import { useState } from 'react';
import { useRouter } from 'next/router';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Cookies from 'js-cookie';
import { useUser } from '@/components/Context/userContext';

import { setReportAdminAPI } from '@/service/investor/notif';

export default function ReportAdminForm() {
  const [reportAdmin, setReportAdmin] = useState({
    title: '',
    description: '',
    type_error: '',
  });
  const [typeError, setTypeError] = useState('');
  const router = useRouter();
  const user = useUser();

  const handleTypeErrorChange = (event) => {
    const value = event.target.value;
    setTypeError(value);
    setReportAdmin({ ...reportAdmin, type_error: value });
  };
  

  const onSubmit = async (event) => {
    event.preventDefault();
    const reportForm = {
      title: reportAdmin.title,
      description: reportAdmin.description,
      type_error: reportAdmin.type_error,
    };
    console.log(reportForm);

    if (!reportAdmin.title || !reportAdmin.description || !reportAdmin.type_error) {
        Notify.failure('Harap isi semua kolom formulir.');
        return;
      } else {
        const token = Cookies.get('token');
        const result = await setReportAdminAPI(reportForm, token);
        console.log(result);
        if (!result) {
            Notify.failure(result.meta.message);
        } else {
            Notify.success('Berhasil mengirim laporan');
        }
        }
    // Tambahkan logika pengiriman formulir atau panggil fungsi API di sini
  };

  return (
    <div className="row g-3 needs-validation" noValidate="">
      <div className="row mb-3">
        <label htmlFor="inputText" className="col-sm-2 col-form-label">
          Nama
        </label>
        <div className="col-sm-10">
          <input
            name="name"
            type="text"
            className="form-control"
            defaultValue={user && user.name ? user.name : 'Tidak ada data'}
            disabled
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            name="email"
            type="email"
            className="form-control"
            defaultValue={user && user.email ? user.email : 'Tidak ada data'}
            disabled
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputText" className="col-sm-2 col-form-label">
          Judul
        </label>
        <div className="col-sm-10">
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="Judul"
            value={reportAdmin.title}
            onChange={(event) =>
              setReportAdmin({ ...reportAdmin, title: event.target.value })
            }
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Deskripsi
        </label>
        <div className="col-sm-10">
          <textarea
            name="description"
            className="form-control"
            style={{ height: 100 }}
            placeholder="Deskripsi untuk admin"
            value={reportAdmin.description}
            onChange={(event) =>
              setReportAdmin({ ...reportAdmin, description: event.target.value })
            }
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Type Error</label>
        <div className="col-sm-10">
          <select
            name="type_error"
            type="text"
            className="form-select"
            aria-label="Default select example"
            value={typeError}
            onChange={handleTypeErrorChange}
          >
            <option value="" disabled>
              Pilih jenis error
            </option>
            <option value="Fatal" className="text-danger">
              Fatal
            </option>
            <option value="Warning" className="text-warning">
              Warning
            </option>
            <option value="Info" className="text-info">
              Info
            </option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Kirim</label>
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Lapor Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
