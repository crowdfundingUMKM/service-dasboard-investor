import BlankLayout from '@/pages/blank_data/layout';


export default function BlankData() {
    return (
        <BlankLayout>
           <main id="main" className="main">
                <section className="section">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Not Have Data</h5>
                        <p>
                           Please, Select page in sidebar menu.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Not Have Data</h5>
                        <p>
                             Please, Select page in sidebar menu.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </main>
        </BlankLayout>
    )
}