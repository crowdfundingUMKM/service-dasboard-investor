// Path: src/components/ContentSide.js 
// import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { YOUR_CAMPAIGN_ID_1, YOUR_CAMPAIGN_ID_2, YOUR_CAMPAIGN_ID_3, YOUR_CAMPAIGN_ID_4, YOUR_CAMPAIGN_ID_5 } from '@utils/constants';

// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function ContentSide (){
  // make dummy data for campaign YOUR_CAMPAIGN_ID_1, YOUR_CAMPAIGN_ID_2, YOUR_CAMPAIGN_ID_3, YOUR_CAMPAIGN_ID_4, YOUR_CAMPAIGN_ID_5


    return (
        <div className="col-lg-4">

            {/* Recent Activity */}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Aktifitas Investor <span>| Awal Mula</span></h5>
                    <div className="activity">
                    <div className="activity-item d-flex">
                      <div className="activite-label">Langkah 1</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                      <div className="activity-content">
                        Perbarui profil dengan melengkapi data yang diperlukan.
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">Langkah 2</div>
                      <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                      <div className="activity-content">
                        Melihat daftar campaign yang tersedia.
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">Langkah 3</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                      <div className="activity-content">
                        Melakukan pembayaran sesuai dengan campaign yang dipilih.
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">Langkah 4</div>
                      <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                      <div className="activity-content">
                        Melihat histori transaksi yang telah dilakukan.
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">Langkah 5</div>
                      <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                      <div className="activity-content">
                        Melihat profit yang telah didapatkan.
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">Langkah 6</div>
                      <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                      <div className="activity-content">
                        Melaporkan masalah yang terjadi pada platform kepada admin.
                      </div>
                    </div>
                    {/* End activity item*/}
                  </div>

                </div>
            </div>

            {/* Campaign Update */}
            <div className="card">
                <div className="card-body pb-0">
                    <h5 className="card-title">Campaign UMKM &amp; Update <span>| Terbaru</span></h5>
                    <div className="news">
                      <div className="post-item clearfix">
                        <Image src="/assets/img/news-1.jpg" alt="News 1" width={80} height={60} />
                        <h4>
                          <Link href={`/preview/11}`}>Nihil blanditiis at in nihil autem</Link>
                        </h4>
                        <p>
                          Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut
                          harum...
                        </p>
                      </div>
                      <div className="post-item clearfix">
                        <Image src="/assets/img/news-2.jpg" alt="News 2" width={80} height={60} />
                        <h4>
                          <Link href={`/preview/12}`}>Quidem autem et impedit</Link>
                        </h4>
                        <p>
                          Illo nemo neque maiores vitae officiis cum eum turos elan dries werona
                          nande...
                        </p>
                      </div>
                      
                      <div className="post-item clearfix">
                        <Image src="/assets/img/news-3.jpg" alt="News 3" width={80} height={60} />
                        <h4>
                          <Link href={`/preview/13}`}>Id quia et et ut maxime similique occaecati ut</Link>
                        </h4>
                        <p>
                          Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et
                          totam...
                        </p>
                      </div>
                      <div className="post-item clearfix">
                        <img src="/assets/img/news-4.jpg" alt="" />
                        <h4>
                          <Link href={`/preview/14}`}>Laborum corporis quo dara net para</Link>
                        </h4>
                        <p>
                          Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum
                          cuder...
                        </p>
                      </div>
                      <div className="post-item clearfix">
                        <Image src="/assets/img/news-5.jpg" alt="News 5" width={80} height={60} />
                        <h4>
                          <Link href={`/preview/15}`}>Et dolores corrupti quae illo quod dolor</Link>
                        </h4>
                        <p>
                          Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae
                          dignissimos eius...
                        </p>
                      </div>

                    </div>
                </div>
            </div>

        </div>
    );
}


