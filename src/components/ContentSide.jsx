// Path: src/components/ContentSide.js 
import Image from 'next/image';
import Link from 'next/link';



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
                          <Link href={`/preview/11}`}>Kreatif Ceria Crafts</Link>
                        </h4>
                        <p>
                        "Kreatif Ceria Crafts" adalah UMKM yang berfokus pada produksi kerajinan tangan unik dan kreatif.
                        </p>
                      </div>
                      <div className="post-item clearfix">
                        <Image src="/assets/img/news-2.jpg" alt="News 2" width={80} height={60} />
                        <h4>
                          <Link href={`/preview/12}`}>Bumi Subur Agro</Link>
                        </h4>
                        <p>
                        "Bumi Subur Agro" adalah UMKM yang berfokus pada pengembangan pertanian organik. 
                        </p>
                      </div>
  

                    </div>
                </div>
            </div>

        </div>
    );
}


