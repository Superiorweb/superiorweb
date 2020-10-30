import Link from "next/link";
import style from '../css/style.module.css'
import Head from "next/head";



export default function OneSection(){

    const menuOPCL = () => {
        const xc = document.getElementById("menu");
        const bars = document.getElementById("bars");
        if (xc.classList.contains("disnone")) {
            xc.classList.remove("disnone",);
            xc.classList.remove(style.displaynone,);
            xc.classList.add(style.dnone);
            xc.classList.remove(style.dclose);
            bars.classList.remove("fa", "fa-bars");
            bars.classList.add("fas", "fa-times")
        } else {
            xc.classList.add("disnone");
            xc.classList.remove(style.dnone);
            xc.classList.add(style.dclose);
            bars.classList.add("fa", "fa-bars");
            bars.classList.remove("fas", "fa-times")
        }
    }

        return (

            <section>
                <Head>
                    <title>طراحی سایت | سنیور وب | SEO | وب سایت</title>
                    <meta name="description" content="طراحی انواع وب سایت های فروشگاهی ، خبری ، اختصاصی در بستر وردپرس و cms های اختصاصی همراه با سنیور وب "/>
                    <meta name="keywords" content="طراحی سایت, طراحی اپلیکیشن, سنیور وب, SEO , سایت فروشگاهی"/>
                    <meta name="author" content="majid javadi"/>

                    <meta property="og:url" content="https://superiorweb.ir/"/>
                    <link rel="shortcut icon" href="./logo.ico" />
                </Head>
                <header id="menu" className={style.header+" "+style.displaynone + " disnone"}>
                    <div className={style.menu }>

                    </div>
                    <nav className={style.navheader}>
                        <ul className={style.ulmenuresponsive}>
                            <li className={style.limenureposnsive}>
                                <Link href="/">
                                    خانه
                                </Link>
                            </li>
                            <li className={style.limenureposnsive}>
                                <Link href="/Cv">
                                    رزومه
                                </Link>
                            </li>
                            <li className={style.limenureposnsive}>
                                <Link href="/Articles">
                                    بلاگ
                                </Link>
                            </li>

                            <li className={style.limenureposnsive}>
                                <Link href="/ConnectUs">
                                    ارتباط با ما
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={style.cardmenu}>
                        <div style={{background: "rgba(0,0,0,0)", maxWidth: "18rem"}}
                             className={style.CardMenu + " card border-0 mt-5 mt-xxl-0 text-white mr-5"}>
                            <div className="card-body">
                                <img src="/img/index/logotext.png" className="w-100"/>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="row mr-0 ml-0">
                    <div className="col-12 pl-0 pr-0">
                        <div className={style.backone}>
                            <div className="row mr-0 ml-0">
                                <div className="col-8 col-lg-1 col-md-10 col-sm-10 col-xl-1 mt-5">
                                    <button onClick={menuOPCL} className={style.btnmenu}>
                                        <i id="bars" className={style.fontbars + " fa fa-bars"}></i>
                                    </button>
                                </div>
                                <div className="col d-none d-lg-block col-lg-10 col-md-8 col-sm-8">
                                    <div className="w-100 d-none d-md-block">
                                        <ul className={style.ulmenu}>
                                            <li className={style.limenu}>
                                                <a>
                                                    windows
                                                </a>
                                            </li>
                                            <li className={style.limenu}>
                                                <a>
                                                    android
                                                </a>
                                            </li>
                                            <li className={style.limenu}>
                                                <a>
                                                    ios
                                                </a>
                                            </li>
                                            <li className={style.limenu}>
                                                <a>
                                                    website
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-1 col-md-2 col-sm-2 col-xl-1 mt-3">
                                    <img src="/img/index/logotext.png" className={style.logo + " w-100 h-100"}/>
                                </div>
                            </div>

                            <div className={style.centertopte + " row justify-content-center mr-0 ml-0"}>

                                <div className="col-8 text-center">

                                        <h1 className={style.title + " mt-5 animate__animated animate__bounceInDown"}>
                                            <span className="text-danger">

                                              مشاوره و توسعه

                                            </span>
                                            <br/>
                                            سایت و اپلیکیشن با استاندارد های روز دنیا
                                        </h1>


                                        <h4 className={style.undertitle + " text-white mt-4"}>
                                            ما افتخار می کنیم که تنها تیم طراحی وب با کیفیت مشتری مدار هستیم که می تواند
                                            تمام نیازهای وب سایت شما را پشتیبانی کند.
                                        </h4>
                                        <div className="mt-lg-5">
                                            <button className={style.btnstoper}>
                                                <a href="#nmonekar">نمونه کار</a>
                                            </button>
                                            <button className={style.btnstoper}>
                                                <a href="#khadamat">خدمات ما</a>
                                            </button>
                                        </div>
                                </div>

                            </div>

                            <div className="row mr-0 ml-0 justify-content-center mt-5">
                                <div
                                    className={style.centerclass + " col-4 col-sm-4 col-md-2 col-lg-1 mt-lg-5 mt-sm-2 mt-1"}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )

}

