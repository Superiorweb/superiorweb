import React, {Component} from "react";
import stcv from '../component/css/Cv_Style.module.css'
import Head from "next/head";


class Cv_Person extends Component {
    render() {
        return (
            <section>

                <Head>
                    <title>طراحی سایت | سنیور وب | SEO | وب سایت</title>
                    <meta name="description" content="                                            تیم طراحی سنیور وب با توانایی تبدیل قالب های PSD به HTML و با استفاده از تجربه ی خود در راساتای ایجاد متفاوت ترین و زیبا ترین و کاربردی ترین UI & UX و استفاده از صفحات SPA و طراحی قالب های اختصاصی وردپرس اماده ی همکاری میباشد
"/>
                    <meta name="keywords" content="php , laravel , c# , java , python  , javascript , asp.net core 3 , sql , html , css , less , sass , React,js , vue.js , typescript , next.js
"/>
                    <meta name="author" content="superiorweb.ir"/>

                    <meta property="og:url" content="https://superiorweb.ir/"/>
                    <link rel="shortcut icon" href="./logo.ico"/>
                </Head>

                <div className="row mr-0 ml-0">
                    <div className="col-11 pr-0 pl-0">

                        <div className={stcv.rowhight + " row mr-0 ml-0"}>
                            <div className="col-lg-8 col-12 bg-dark">

                                <div style={{textAlign: "justify"}} className="row">
                                    <div className="col-12 p-4 p-lg-4">
                                        <h1 className={stcv.About}>
                                            درباره ی من
                                        </h1>
                                        <span className={stcv.Specifications}>
                                    3 سال سابقه / کرج /
                                </span>
                                        <p className={stcv.Description}>

                                            تیم فنی سنیور وب ، با داشتن افراد متخصص در حوزه ی Front-end
                                            &
                                            Back-end
                                            و با چندین سال سابقه ی برنامه نویسی ، مسلط به زبان , فریم ورک های
                                            php , laravel , c# , java , python , javascript , asp.net core 3 , sql ,
                                            html , css , less , sass , React,js , vue.js , typescript , next.js
                                            و همچنین مسلط به ابزار و راهکار های افزایش رتبه ی SEO سایت
                                            اماده ی همکاری در هر یک از مینه های مذکور میباشد تا به شما در رونق کسب و
                                            کارتان کمک کند
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-12 pr-4 pl-4">
                                        <i className={stcv.iconcv + " fa fa-desktop"} aria-hidden="true"></i>
                                        <h2 className={stcv.titleskill}>فرانت اند</h2>
                                        <p className={stcv.Descriptionskikk}>
                                            تیم طراحی سنیور وب با توانایی تبدیل قالب های PSD به HTML و با استفاده از
                                            تجربه ی خود در راساتای ایجاد متفاوت ترین و زیبا ترین و کاربردی ترین UI & UX
                                            و استفاده از صفحات SPA و طراحی قالب های اختصاصی وردپرس اماده ی همکاری میباشد
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-12 pr-4 pl-4">
                                        <i className={stcv.iconcv + " fa fa-desktop"} aria-hidden="true"></i>
                                        <h2 className={stcv.titleskill}>بک اند</h2>
                                        <p className={stcv.Descriptionskikk}>
                                            تیم سنیور وب مسلط به فریمورک و زبان های بک اند مانند java , django, c# ,
                                            asp.net core 3 ,laravel , php
                                            مشتاقانه منتظر چالش های جدید طراحی وب سایت و اپلیکیشن و میکرو سرویس میباشد
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-12 pr-4 pl-4">
                                        <i className={stcv.iconcv + " fa fa-desktop"} aria-hidden="true"></i>
                                        <h2 className={stcv.titleskill}>اندروید , ios</h2>
                                        <p className={stcv.Descriptionskikk}>
                                            تیم سنیور وب با داشتن مهارت در تولید و ساخت اپلیکیشن های PWA و طراحی با
                                            React native و
                                            طراحی اپلیکیشن های اندرویدی با جاوا اماه ی پذیرش چالش های طراحی اپلیکیشن شما
                                            میباشد
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-12 pr-4 pl-4">
                                        <i className={stcv.iconcv + " fa fa-desktop"} aria-hidden="true"></i>
                                        <h2 className={stcv.titleskill}>SEO</h2>
                                        <p className={stcv.Descriptionskikk}>

                                            تیم سنیور وب در تلاش است تا با خدمات تضمینی خود فرآیند تبلیغات و برندینگ در
                                            راستای جذب مشتریان هر مجموعه را بصورت مجازی پذیرفته و به گونه ای شایسته هر
                                            مجموعه ای را به مخاطبان خاص خود معرفی نماید
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div style={{background: "#343a40"}} className="col-lg-4 col-12 pr-3 pl-3 pr-lg-0 pl-lg-0">
                                <div
                                    className={stcv.Name + " position-absolute d-flex justify-content-center align-items-end text-white"}>
                                    <div className="text-center">
                                        <h1>
                                            majid
                                        </h1>
                                        <p style={{textAlign: "center !important"}}>
                                            web developer
                                        </p>
                                    </div>
                                </div>
                                <img className={stcv.imging + " w-100 h-100"} src="/img/index/bussinesman.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div
                        className={"col-lg-1 col-1 bg-dark d-flex justify-content-center align-items-lg-center " + stcv.padcol}>

                        <div style={{zIndex: "55"}} className="text-white position-fixed">
                            <a href="http://superiorweb.ir/" className={stcv.icondashbord}>
                                <i className="fas fa-user"></i>
                            </a>
                            <br/>
                            <a href="http://superiorweb.ir/ConnectUs" className={stcv.icondashbord}>
                                <i className="fas fa-phone"></i>
                            </a>
                            <br/>
                            <a href="http://superiorweb.ir/ConnectUs" className={stcv.icondashbord}>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <br/>
                            <a href="http://superiorweb.ir/ConnectUs" className={stcv.icondashbord}>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Cv_Person