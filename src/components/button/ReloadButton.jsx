import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '@/styles/reload.module.css'; // Ganti dengan path ke file CSS Module Anda
import { Notify } from 'notiflix';

export default function ReloadButton() {
    const router = useRouter();
    const [isReloading, setIsReloading] = useState(false);

    const reloadPage = () => {
        setIsReloading(true);
        router.reload(window.location.pathname);
        // Mengatur timeout untuk mengembalikan state isReloading ke false
        // sesuai dengan durasi animasi untuk memastikan bahwa animasi dapat dijalankan kembali.
        setTimeout(() => setIsReloading(false), 2000);
        Notify.success('Halaman berhasil dimuat ulang');
    }

    return (
        <li className="nav-item">
            <button
                className={`nav-link nav-icon ${isReloading ? styles.spin : ''}`}
                onClick={reloadPage}
                style={{ background: 'none', border: 'none', padding: 0 }}
            >
                <i className={`bi bi-arrow-clockwise ${isReloading ? styles.spin : ''}`}></i>
            </button>
        </li>
    );
}
