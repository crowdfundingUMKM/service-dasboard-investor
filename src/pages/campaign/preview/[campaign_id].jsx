import PreviewLayout from '@/pages/campaign/preview/layout';
import { useRouter } from 'next/router';
import Notiflix from 'notiflix';
import Link from "next/link";
import Image from "next/image";

import React, { useState } from 'react';
import TransactionForm from '@/components/organisms/transaction/index';


  

export default function PreviewCampaign() {
    // const [amount, setAmount] = useState(50000); // nilai awal diubah dari string kosong menjadi 50000
    // const [agreed, setAgreed] = useState(false);
  
    // const handleInvestNow = () => {
    //   Notiflix.Confirm.show(
    //     'Konfirmasi Investasi',
    //     `Apakah Anda yakin ingin berinvestasi sejumlah ${amount}?`,
    //     'Bayar',
    //     'Batal',
    //     function(){
    //       const isAgreed = document.getElementById('agreeTerms').checked;
    //       setAgreed(isAgreed);
    //       if (isAgreed && amount >= 50000) {
    //         console.log(`Invested: ${amount}`);
    //         Notiflix.Notify.success('Investasi berhasil!');
    //         // Here you would typically call a function to handle the investment logic
    //       } else if (!isAgreed) {
    //         Notiflix.Notify.failure('Anda harus menyetujui syarat dan ketentuan');
    //       } else {
    //         Notiflix.Notify.failure('Jumlah investasi harus minimal Rp50.000');
    //       }
    //     },
    //     function(){
    //       // Handle cancellation
    //     }
    //   );
    // };



    const router = useRouter();
    return (
        <PreviewLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Preview Campaign</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Campaign UMKM</li>
                    <li className="breadcrumb-item active">Preview Campaign</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">
                            Preview Campaign -{" "}
                            <span className="badge bg-warning">Waiting </span>
                        </h5>
                        <br />
                        <h2 className="text-center">
                            <strong>Details UMKM</strong>
                        </h2>
                        <div className="row justify-content-center mt-4">
                            <div className="col-10 ">
                            {/* Slides with indicators */}
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide "
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={0}
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={2}
                                    aria-label="Slide 3"
                                />
                                </div>
                                <div className="carousel-inner rounded-3">
                                <div className="carousel-item active">
                                    <Image
                                    src="/assets/img/campaign/1/banner2.jpeg"
                                    className="d-block w-100"
                                    alt="..."
                                    height={50}
                                    width={50}
                                    layout="responsive"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <Image
                                    src="/assets/img/campaign/1/banner1.jpeg"
                                    className="d-block w-100"
                                    alt="..."
                                    height={50}
                                    width={50}
                                    layout="responsive"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <Image
                                    src="/assets/img/campaign/1/banner3.jpeg"
                                    className="d-block w-100"
                                    alt="..."
                                    height={50}
                                    width={50}
                                    layout="responsive"
                                    />
                                </div>
                                </div>
                                <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                                >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                />
                                <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                                >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                />
                                <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            {/* End Slides with indicators */}
                            <br />
                            <h4>
                                <strong>Terkumpul</strong>
                            </h4>
                            <div className="progress mt-3">
                                <div
                                className="progress-bar progress-bar-striped bg-primary progress-bar-animated"
                                role="progressbar"
                                style={{ width: "30%" }}
                                aria-valuenow={30}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                >
                                %30
                                </div>
                            </div>
                            <div className="row d-flex justify-content-between pt-2">
                                <div className="col-7">
                                <h5>Rp. 16.000.000 dari Rp. 4.800.00</h5>
                                </div>
                            </div>
                            <br />
                            <hr />
                            <h2>
                                <strong>Kreatif Ceria Crafts</strong>
                            </h2>
                            <p>
                            "Kreatif Ceria Crafts" adalah UMKM yang berfokus pada produksi kerajinan tangan unik dan kreatif. Kami menggabungkan keahlian tradisional dengan desain modern untuk menciptakan produk-produk yang memukau. Bisnis ini bertujuan untuk melestarikan seni dan kerajinan lokal sambil memberikan peluang ekonomi kepada para pengrajin lokal.
                            </p>
                            <hr />
                            {/* Tab informasi */}
                            <div className="card">
                                <div className="card-body">
                                <h4 className="card-title">Informasi UMKM</h4>
                                {/* Pills Tabs */}
                                <ul
                                    className="nav nav-pills mb-3"
                                    id="pills-tab"
                                    role="tablist"
                                >
                                    <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-informasi"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-informasi"
                                        aria-selected="true"
                                    >
                                        Informasi
                                    </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-benefit"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-benefit"
                                        aria-selected="false"
                                    >
                                        Benefit
                                    </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-penerbit"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-penerbit"
                                        aria-selected="false"
                                    >
                                        Tentang Penerbit
                                    </button>
                                    </li>
                                </ul>
                                <div className="tab-content pt-2" id="myTabContent">
                                    {/* Tab informasi */}
                                    <div
                                    className="tab-pane fade show active"
                                    id="pills-informasi"
                                    role="tabpanel"
                                    aria-labelledby="inforamsi-tab"
                                    >
                                    <ul>
                                        <li>Total Pendanaan: Rp.16.000.000</li>
                                        <li>Minimal Investasi: Rp.100.000</li>
                                        <li>Suku Bunga (Per-tahun): 3% </li>
                                        <li>Masa Tenor: 12 Bulan</li>
                                        <li>Pengembalian Dana: Saat Jatuh Tempo</li>
                                        <li>Deadline Kampaye: 12 Agustus 2023</li>
                                    </ul>
                                    {/* Button to link bisnis &  Proposal Bisnis*/}
                                    <div className="link-bisnis m-2">
                                        <a
                                        className="btn btn-primary"
                                        href="#"
                                        role="button"
                                        >
                                        Link Bisnis
                                        </a>
                                        <a
                                        className="btn btn-primary"
                                        href="#"
                                        role="button"
                                        >
                                        Proposal Bisnis
                                        </a>
                                    </div>
                                    </div>
                                    {/* Tab Benefit */}
                                    <div
                                    className="tab-pane fade"
                                    id="pills-benefit"
                                    role="tabpanel"
                                    aria-labelledby="benefit-tab"
                                    >
                                    <ul>
                                        <li>Keuntungan Finansial</li>
                                        <li>Diskon Produk</li>
                                        <li>Sertifikat Kontributor</li>
                                    </ul>
                                    </div>
                                    {/* Tab Tentang Penerbit */}
                                    <div
                                    className="tab-pane fade"
                                    id="pills-penerbit"
                                    role="tabpanel"
                                    aria-labelledby="penerbit-tab"
                                    >
                                    <div className="container">
                                        <h4>Tentang Penerbit</h4>
                                        <br />
                                        <div className="row info-publisher">
                                        <div className="col-2 text-center">
                                            <Image
                                            loading="lazy"
                                            decoding="async"
                                            src="/assets/img/avatar/Avatar3.png"
                                            alt="Penerbit Thumbnail"
                                            className="img-fluid rounded-2"
                                            width={100}
                                            height={100}
                                            layout="responsive"
                                            />
                                        </div>
                                        <div className="col-7">
                                            <h3 className="mb-3">Sarah Nurul Hidayah</h3>
                                            <div className="describe_publisher">
                                            <strong>Deskripsi Penerbit</strong>
                                            <p className="text-black mt-2">
                                              Sarah Nurul Hidayah adalah seorang pengusaha muda yang berkomitmen untuk mendukung perkembangan UMKM lokal. Dengan latar belakang di bidang seni dan desain, Sarah mendirikan "Kreatif Ceria Crafts" dengan visi untuk menciptakan peluang bagi pengrajin lokal dan memperkenalkan keindahan seni kerajinan tangan kepada masyarakat lebih luas. Dengan pengalaman dan semangat kewirausahaan, Sarah berharap dapat membawa UMKM ini mencapai puncak kesuksesan melalui dukungan para investor.
                                            </p>
                                            <a
                                                className="btn btn-primary mt-3"
                                                href="#"
                                                role="button"
                                            >
                                                Link Penerbit
                                            </a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* End Pills Tabs */}
                                </div>
                            </div>
                            {/* End Tab informasi */}
                            <hr />
                            {/* Tab Review */}
                            <div className="card">
                                <div className="card-body">
                                <h5 className="card-title">Reviewer List</h5>
                                {/* Pills Reviewer */}
                                <ul
                                    className="nav nav-pills mb-3"
                                    id="pills-tab"
                                    role="tablist"
                                >
                                    <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                    >
                                        Reviewer 1
                                    </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-profile"
                                        aria-selected="false"
                                    >
                                        Reviewer 2
                                    </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-contact"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        Reviewer 3
                                    </button>
                                    </li>
                                </ul>
                                <div className="tab-content pt-2" id="myTabContent">
                                    <div
                                    className="tab-pane fade show active"
                                    id="pills-home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                    >
                                    <h4>Amanda Setiawan</h4>
                                    {/* <br> */}
                                    <p>
                                    Saya sangat terkesan dengan kampanye "Kreatif Ceria Crafts". Mereka berhasil menyajikan bisnisnya dengan cara yang jelas dan menggugah minat saya sebagai calon investor. Deskripsi bisnis yang sedang dibangun terlihat sangat menarik, terutama fokus pada penggabungan keahlian tradisional dengan desain modern dalam produksi kerajinan tangan.
                                    </p>
                                    <div id="rating_review">
                                        <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                                    </div>
                                    <a className="btn btn-primary" href="">
                                        Kunjungi Profile
                                    </a>
                                    </div>
                                    <div
                                    className="tab-pane fade"
                                    id="pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                    >
                                    <h4>Budi Prasetyo</h4>
                                    {/* <br> */}
                                    <p>
                                    Kampanye "Kreatif Ceria Crafts" sangat menginspirasi. Mereka berhasil menarik perhatian saya dengan konsep bisnis yang unik dan berfokus pada pengembangan seni dan kerajinan lokal. Deskripsi bisnis yang mereka sampaikan sangat informatif dan membantu saya memahami visi mereka.
                                    </p>
                                    <div id="rating_review">
                                        <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                                    </div>
                                    <a className="btn btn-primary" href="">
                                        Kunjungi Profile
                                    </a>
                                    </div>
                                    <div
                                    className="tab-pane fade"
                                    id="pills-contact"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                    >
                                    <h4>Putri Rahayu</h4>
                                    {/* <br> */}
                                    <p>
                                    Kampanye "Kreatif Ceria Crafts" menarik perhatian saya sejak awal. Mereka berhasil menyampaikan visi dan misi bisnis dengan cara yang sangat menyentuh hati. Konsep produk yang unik dan keberpihakan terhadap pengrajin lokal adalah poin yang membuat saya tertarik untuk berinvestasi.
                                    </p>
                                    <div id="rating_review">
                                        <p>Review UMKM: ⭐⭐⭐⭐⭐5/5 </p>
                                    </div>
                                    <a className="btn btn-primary" href="">
                                        Kunjungi Profile
                                    </a>
                                    </div>
                                </div>
                                {/* End Pills Tabs */}
                                </div>
                            </div>
                            <hr />
                            <div className="card">
                                <div className="card-body">
                                <h2 className="card-title">Link Bisnis</h2>
                                <ul>
                                    <li>
                                    <a href="#">Link Bisnis</a>
                                    </li>
                                   
                                </ul>
                                </div>
                            </div>
                            <hr />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <TransactionForm/>

                </div>
                </section>

            </main>

        </PreviewLayout>
    )

}
