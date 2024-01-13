import { useState } from 'react';
import { useRouter } from 'next/router';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Cookies from 'js-cookie';

import UploadAvatarData from '@/components/organisms/users/editProfile/uploadAvatar';

import { useUser } from '@/components/Context/userContext';
// import { getImageUrl } from '@/components/utils/ImageUtils';

import { setUpdateProfile } from '@/service/investor/member';

export default function EditProfileData(){
    const [updateUser, setUpdateUser] = useState({
        name: '',
        bio_user: '',
        country: '',
        address: '',
        phone: '',
        email: '',
        fb_link: '',
        ig_link: '',
      });
    
    


    const user = useUser();
    // const imageUrl = user ? getImageUrl(user.avatar_file_name) : '/assets/img/avatar/avatar.png';
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();
        const userForm = {
            name: updateUser.name,
            bio_user: updateUser.bio_user,
            country: updateUser.country,
            address: updateUser.address,
            phone: updateUser.phone,
            email: updateUser.email,
            fb_link: updateUser.fb_link,
            ig_link: updateUser.ig_link,
        };
        console.log(userForm);

        // cek jika data tidak ada yang di ubah tampilkan notif
        if (!updateUser.name && !updateUser.bio_user && !updateUser.country && !updateUser.address && !updateUser.phone && !updateUser.email && !updateUser.fb_link && !updateUser.ig_link) {
            Notify.info('Tidak ada data yang diubah');
            return;
        } else {
            const token = Cookies.get('token');
            // kirim ke await setUpdateProfile(userForm, token);
            const result = await setUpdateProfile(userForm, token);
            if (result.error) {
                Notify.failure(result.message);
            } else {
                Notify.success('Berhasil mengubah data');
                // make refresh data user but not reload page
                router.push('/information/profile');
            }

        }
    }



    return(
        <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
            {/* Profile Edit Form */}
            <UploadAvatarData />
            {/* Edit Profile */}
            <div className="row mb-3">
                <label
                htmlFor="fullName"
                className="col-md-4 col-lg-3 col-form-label"
                >
                Nama Anda
                </label>
                <div className="col-md-8 col-lg-9">
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="fullName"
                    defaultValue={user && user.name ? user.name : 'Tidak ada data'}
                    onChange={(event) => setUpdateUser({ name : event.target.value })}
                    
                />
                </div>
            </div>
            <div className="row mb-3">
                <label
                htmlFor="about"
                className="col-md-4 col-lg-3 col-form-label"
                >
                Bio User
                </label>
                <div className="col-md-8 col-lg-9">
                <textarea
                    name="bio_user"
                    className="form-control"
                    id="about"
                    style={{ height: 100 }}
                    onChange={(event) => setUpdateUser({ bio_user : event.target.value })}
                />
                </div>
            </div>
            <div className="row mb-3">
                <label
                htmlFor="Country"
                className="col-md-4 col-lg-3 col-form-label"
                >
                Negara
                </label>
                <div className="col-md-8 col-lg-9">
                <input
                    name="country"
                    type="text"
                    className="form-control"
                    id="Country"
                    defaultValue={user && user.country ? user.country : 'Tidak ada data'}
                    onChange={(event) => setUpdateUser({ country : event.target.value })}
                />
                </div>
            </div>
            <div className="row mb-3">
                <label
                htmlFor="Address"
                className="col-md-4 col-lg-3 col-form-label"
                >
                Alamat
                </label>
                <div className="col-md-8 col-lg-9">
                <input
                    name="address"
                    type="text"
                    className="form-control"
                    id="Address"
                    defaultValue={user && user.address? user.address: 'Tidak ada data'}
                    onChange={(event) => setUpdateUser({ address : event.target.value })}
                />
                </div>
            </div>
            <div className="row mb-3">
                <label
                htmlFor="Phone"
                className="col-md-4 col-lg-3 col-form-label"
                >
                Nomor Hp
                </label>
                <div className="col-md-8 col-lg-9">
                <input
                    name="phone"
                    type="text"
                    className="form-control"
                    id="Phone"
                    defaultValue={user && user.phone ? user.phone : 'Tidak ada data'}
                    onChange={(event) => setUpdateUser({ phone : event.target.value })}
                />
                </div>
            </div>
            <div className="row mb-3">
                <label
                htmlFor="Email"
                className="col-md-4 col-lg-3 col-form-label"
                >
                Email
                </label>
                <div className="col-md-8 col-lg-9">
                <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="Email"
                    defaultValue={user && user.email ? user.email : 'Tidak ada data'}
                    disabled
                />
                </div>
            </div>
            <div className="row mb-3">
                <label
                htmlFor="Facebook"
                className="col-md-4 col-lg-3 col-form-label"
                >
                Facebook Profile
                </label>
                <div className="col-md-8 col-lg-9">
                <input
                    name="facebook"
                    type="text"
                    className="form-control"
                    id="Facebook"
                    defaultValue={user && user.fb_link ? user.fb_link : ''}
                    onChange={(event) => setUpdateUser({ fb_link : event.target.value })}
                />
                </div>
            </div>
            <div className="row mb-3">
                <label
                htmlFor="Instagram"
                className="col-md-4 col-lg-3 col-form-label"
                >
                Instagram Profile
                </label>
                <div className="col-md-8 col-lg-9">
                <input
                    name="instagram"
                    type="text"
                    className="form-control"
                    id="Instagram"
                    defaultValue={user && user.ig_link ? user.ig_link : ''}
                    onChange={(event) => setUpdateUser({ ig_link : event.target.value })}
                />
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary"  onClick={onSubmit}>
                Save Changes
                </button>
            </div>
        {/* End Profile Edit Form */}
    </div>
    )
}

