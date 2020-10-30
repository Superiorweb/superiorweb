import React, {Component} from "react";
import style from '../css/style.module.css'



class FiveSection extends Component {
    render() {
        return (
            <section className={style.Heigytfive + " row mr-0 ml-0 bg-secondary text-white"}>
                <div className="col-lg-4 col-md-12 align-items-center d-flex justify-content-center">
                    <div className="p-5">
                        <h2 className="">
                            <b className={style.yellowcolor}>
                                درباره ی ما
                            </b><br/>
                        </h2>
                        <p className={style.fontsize}>
                            ما یک تیم طراحی سایت و بازاریابی بصری هستیم که دارای انگیزه فوق العاده برای دستیابی به SEO و طراحی سایت ، اپلیکیشن هستیم
                            <br/>
                            ما ، در سوپریور وب ، علاقه زیادی به شفافیت ، قابلیت اطمینان ، اعتماد و مراقبت از مشتری برجسته
                            داریم . ما به شدت مراقب نیازهای شما
                            هستیم. ما اهداف تجاری شما را درک می کنیم و آنها را مطابق با ارزشهای تجاری شما تحویل می دهیم.
                           هدف ما رساندن شما به موفقیت است
                        </p>

                    </div>
                </div>
                <div className="col-lg-8 col-md-12">

                    <div className="row mr-0 ml-0">

                        <div
                            className={style.FiveHeightImg + " col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"}>
                                <img className="w-100 h-50" src="/img/index/aboutustwo.jpg" alt="team"/>
                        </div>

                        <div
                            className={style.FiveHeightImg + " col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"}>
                                <img className="w-100 h-50" src="/img/index/aboutusone.jpeg" alt="team"/>
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}
export default FiveSection