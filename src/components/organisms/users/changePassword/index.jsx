import { useState } from 'react';
import { useRouter } from 'next/router';
import { Notify, Confirm } from 'notiflix/build/notiflix-notify-aio';
import Cookies from 'js-cookie';

import { setUpdatePassword } from '@/service/investor/member';
// import { togglePasswordVisibility } from '@/components/utils/BottenHidePassword';

export default function ChangePasswordData() {
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);


  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      old_password: oldPass,
      new_password: newPass,
    };

    if (!oldPass || !newPass) {
      const error = !oldPass ? 'Old Password' : 'New Password';
      Notify.failure(`${error} wajib diisi!!!`);
    } else {
      const token = Cookies.get('token');
      try {
        const response = await setUpdatePassword(data, token);

        Cookies.remove('token');
        router.push('/@auth/login');
        Notify.success('Berhasil ganti password, silahkan login kembali');
      } catch (error) {
        Notify.failure('Terjadi kesalahan saat mengubah password ' + error);
      }
    }
  };

  return (
    <div className="tab-pane fade pt-3" id="profile-change-password">
      {/* Change Password Form */}
      <div className="row mb-3">
        <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">
          Current Password
        </label>
        <div className="col-md-8 col-lg-9">
          <div className="input-group">
            <input
              name="old_password"
              type={showOldPassword ? 'text' : 'password'}
              className="form-control"
              id="oldPassword"
              value={oldPass}
              onChange={(event) => setOldPass(event.target.value)}
            />
            <div className="input-group-prepend">
              <button
                type="button"
                id="showHideBtn"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="btn btn-outline-secondary"
              >
                <i className={`bi ${showOldPassword ? 'bi-eye-slash' : 'bi-eye'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">
          New Password
        </label>
        <div className="col-md-8 col-lg-9">
          <div className="input-group">
            <input
              name="new_password"
              type={showNewPassword ? 'text' : 'password'}
              className="form-control"
              id="newPassword"
              value={newPass}
              onChange={(event) => setNewPass(event.target.value)}
            />
            <div className="input-group-prepend">
              <button
                type="button"
                id="showHideBtn"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="btn btn-outline-secondary"
              >
                <i className={`bi ${showNewPassword ? 'bi-eye-slash' : 'bi-eye'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Change Password
        </button>
      </div>
      {/* End Change Password Form */}
    </div>
  );
}
