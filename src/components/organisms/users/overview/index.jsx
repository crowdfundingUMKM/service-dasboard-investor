
import { useUser } from '@/components/Context/userContext';

export default function OverviewProfileData(){

    const user = useUser();
    return(
        <div
            className="tab-pane fade show active profile-overview"
            id="profile-overview"
        >
            <h5 className="card-title">Bio User</h5>
            <p className="small fst-italic">
            {user && user.bio_user ? user.bio_user : 'Tidak ada data'}
            </p>
            <h5 className="card-title">Profile Details</h5>
            <div className="row">
            <div className="col-lg-3 col-md-4 label">Nama Anda</div>
            <div className="col-lg-9 col-md-8">{user ? user.name : 'null'}</div>
            </div>
            <div className="row">
            <div className="col-lg-3 col-md-4 label">Negara</div>
            <div className="col-lg-9 col-md-8"> {user && user.country  ? user.country : 'Tidak ada data'}</div>
            </div>
            <div className="row">
            <div className="col-lg-3 col-md-4 label">Alamat</div>
            <div className="col-lg-9 col-md-8">
            {user && user.address ? user.address : 'Tidak ada data'}
            </div>
            </div>
            <div className="row">
            <div className="col-lg-3 col-md-4 label">Nomor Hp</div>
            <div className="col-lg-9 col-md-8"> {user && user.phone ? user.phone : 'Tidak ada data'}</div>
            </div>
            <div className="row">
            <div className="col-lg-3 col-md-4 label">Email</div>
            <div className="col-lg-9 col-md-8">{user && user.email ? user.email : 'Tidak ada data'}</div>
            </div>
        </div>
    )
}
