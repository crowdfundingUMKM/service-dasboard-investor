import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useUser } from '@/components/Context/userContext';
import { getImageUrl } from '@/components/utils/ImageUtils';
import { setUpdateImage, UploadImageTypes } from '@/service/investor/member'; // Memasukkan fungsi yang dibutuhkan dari service
import Cookies from 'js-cookie';
import { Notify } from 'notiflix';

export default function UploadAvatarData() {
  const [updateAvatar, setUpdateAvatar] = useState({
    avatar_file_name: null, // Perubahan ini untuk menyesuaikan dengan inisialisasi FormData
  });

  const [imageUrl, setImageUrl] = useState('');

  const user = useUser();

  useEffect(() => {
    // Mengatur ulang URL gambar ketika user berubah
    setImageUrl(user ? getImageUrl(user.avatar_file_name) : '/assets/img/avatar/avatar.png');
  }, [user]);

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUpdateAvatar({
        avatar_file_name: file, // Perubahan ini untuk menyimpan objek file langsung ke dalam state
      });

      setImageUrl(URL.createObjectURL(file));

      console.log("file: "+file.avatar_file_name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSaveAvatar = async () => {
    if (!updateAvatar.avatar_file_name) {
      // Handle jika tidak ada gambar yang dipilih
      return;
    }

    const formData = new FormData();
    formData.append('avatar_file_name', updateAvatar.avatar_file_name); // Perubahan ini untuk menggunakan kunci 'avatar' sesuai dengan server

    try {
      // Panggil fungsi setUpdateImage untuk mengunggah gambar
      const token = Cookies.get('token');
      const response = await setUpdateImage(formData, token);

    

      // Handle respon dari backend (response.isSuccess, response.message, dll.)
      console.log(response);

      Notify.success(response.meta.message);

      // Reset updateAvatar atau lakukan sesuatu setelah gambar diunggah
      setUpdateAvatar({
        avatar_file_name: '',
      });
    } catch (error) {
      // Handle kesalahan pengunggahan gambar
      Notify.failure('Terjadi kesalahan saat mengunggah gambar');
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="row mb-3">
      <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">
        Profile Image
      </label>
      <div className="col-md-8 col-lg-9">
        <Image
          src={imageUrl || '/assets/img/avatar/avatar.png'}
          alt="Profile"
          height={120}
          width={120}
        />
        <div className="pt-2">
          <button type="button" style={{ border: 'none' }} onClick={handleUploadClick}>
            <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image">
              <i className="bi bi-upload" /> Upload
            </a>
          </button>
          <input
            ref={fileInputRef}
            name="avatar"
            type="file"
            accept="image/png, image/jpeg"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button type="button" style={{ border: 'none' }} onClick={handleSaveAvatar}>
            <a href="#" className="btn btn-success btn-sm">
              <i className="bi bi-check" /> Simpan
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
