import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';
import Midtrans from 'midtrans-client';
import axios from 'axios';

import Cookies from 'js-cookie';

export default function TransactionForm() {
    // const snap = new Midtrans.Snap({
    //     isProduction: false,
    //     serverKey: 'SB-Mid-server-2Ae6XcVQfdsz448AabygNIAd',
    //     clientKey: 'SB-Mid-client-K1av9DLcYFYOLFjJ',
    // });

    const [amount, setAmount] = useState(50000);
    const [agreed, setAgreed] = useState(false);

    // const nameOrder = "ORDER-CAMPAIGN-0111";

    // const headers = {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "Content-Type",
    //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    // };

    // const handleInvestNow = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:3005/initiate-payment', {
    //             order_id: nameOrder,
    //             gross_amount: amount,
    //             secure: true,
    //         },{
    //             headers: headers, // Tambahkan headers ke dalam request
    //         });

    //         const { token, redirect_url } = response.data;

    //         // Buka tab baru dengan URL pembayaran
    //         window.open(redirect_url, '_blank');
    //     } catch (error) {
    //         console.error('Error initiating Midtrans payment:', error);
    //         // Handle error
    //     }
    // };

    return (
        <div className="col-lg-4">
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">Investasi Sekarang</h5>
            <h3 className="font-weight-bold" />
            <div className="mb-3">
            <label htmlFor="price_pay_umkm" className="form-label">
                Modalkan
            </label>
            <input
                type="number"
                name='amount'
                className="form-control"
                id="price_pay_umkm"
                aria-describedby="price_pay_umkm"
                min={50000}
                defaultValue={50000}
                step={10000}
                onChange={(e) => setAmount(e.target.value)}
            />
            <div id="" className="form-text">
                Tentukan jumlah dana yang ingin dibantu
            </div>
            </div>

            <h4>
                <strong>Investasi Anda</strong>
            </h4>
            <h4>{`Rp.${amount ? amount : '0'}`}</h4>

            {/* fix this checkbox */}
            <div className="form-text">
                <input type="checkbox" className="mb-3 me-2" id="agreeTerms" onChange={(e) => setAgreed(e.target.checked)} />
                <label className="" htmlFor="exampleCheck1">
                    <Link href="/information/faq">Setuju dan Syarat</Link> 
                </label>
            </div>
            
            <Link href="https://app.sandbox.midtrans.com/payment-links/1705336184166"  target="_blank">
            <button className="btn btn-primary" href="#" role="button" >
                Investasi Sekarang
            </button>
            </Link>
            </div>

        </div>

        {/* <div className="card">
            <div className="card-body">
            <h5 className="card-title">Total Investasi Anda</h5>
            <h3 className="font-weight-bold" />
            <h4>
                <strong>Investasi Anda</strong>
            </h4>
            <h4>Rp.100.000</h4>
            <br />
            <h4>
                <strong>Investasi Anda</strong>
            </h4>
            <h4>Rp.100.000</h4>
            <br />
            </div>
        </div> */}
    </div>
    )
}