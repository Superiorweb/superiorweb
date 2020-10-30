import React, {Component} from "react";
import stid from '../css/style.module.css'

class TwoSection extends Component {

    render() {
        return (
            <section>
                <div className="container-lg">

                    <div id="khadamat" className="row mt-5 mb-5">
                        <div style={{borderLeft:"2px solid black"}} className="col-lg-6 col-12">
                            <ul>
                                <li className="d-flex mt-5 align-items-center">
                                    <div className={stid.sricon}>
                                        <i className="fas fa-shopping-basket"></i>                                    </div>
                                    <div className={stid.srtext}>
                                        <h3>
                                          وب سایت فروشگاهی
                                        </h3>
                                        <h6>
                                         طراحی انواع وب سایت های فروشگاهی
                                        </h6>
                                    </div>
                                </li>
                                <li className="d-flex mt-5 align-items-center">
                                    <div className={stid.sricon}>
                                        <i className="fas fa-newspaper"></i>                                    </div>
                                    <div className={stid.srtext}>
                                        <h3>
                                            وب سایت خبری
                                        </h3>
                                        <h6>
                                            طراحی وب سایت خبری و خبر خوان
                                        </h6>
                                    </div>
                                </li>
                                <li className="d-flex mt-5 align-items-center">
                                    <div className={stid.sricon}>
                                        <i className="fas fa-building"></i>                                    </div>
                                    <div className={stid.srtext}>
                                        <h3>
                                            وب سایت شرکتی
                                        </h3>
                                        <h6>
                                             طراحی حرفه ای وب سایت شرکتی گامی برای برند شدن
                                        </h6>
                                    </div>
                                </li>
                                <li className="d-flex mt-5 align-items-center">
                                    <div className={stid.sricon}>
                                        <i className="fas fa-people-arrows"></i>                                    </div>
                                    <div className={stid.srtext}>
                                        <h3>
                                            وب سایت شخصی
                                        </h3>
                                        <h6>
                                           طراحی وب سایت حرفه ای مطابق با نیاز های شما
                                        </h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
                            <div className="w-75 mt-5">
                                <h2 className="text-center"> چرا دشتن سایت اهمیت دارد </h2>
                                <h5 style={{textAlign:"justify"}} className={stid.TextSrZero+" mt-4"}>
                                    در دنیای دیجیتال امروز ، وب سایت شما اولین تعامل مصرف کنندگان با تجارت شما است.

                                    به همین دلیل است که تقریباً 95 درصد از اولین برداشت کاربر مربوط به طراحی وب است. همچنین به همین دلیل است که خدمات طراحی وب می توانند تأثیر زیادی بر خط اصلی شرکت شما داشته باشند.

                                    به همین دلیل شرکت های بیشتری نه تنها طراحی وب سایت خود را ارزیابی مجدد می کنند بلکه با آژانس های طراحی وب  همکاری می کنند.

                                    با داشتن بیش چند سال سابقه ، ما اطمینان داریم که می توانیم یک وب سایت سفارشی طراحی کنیم که فروش کسب و کار منحصر به فرد شما را هدایت کند.

                                    امروز با ما تماس بگیرید تا درباره کسب و کار خود بیشتر بگویید و طراحی وب سایت سفارشی خود را شروع کنید
                                </h5>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default TwoSection