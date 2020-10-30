import style from '../css/style.module.css'


export default function ThreeSection(){

        return (

            <section className={style.Heigytthree + " row mr-0 ml-0 text-white"}>
                <div className="col-lg-3 col-md-12 pr-lg-5 d-flex align-items-center">
                    <div className="text-lg-right text-center text-md-center mt-lg-0 mt-5">

                            <h2 >
                                <span className={style.yellowcolor}> نقاط قوت</span><br/>
                                یک وب سایت خوب
                            </h2 >

                            <p className={style.fontsize}>
                                اگر شما می‌خواهید یک وب سایت قدرتمند ایجاد کنید که بتوانید با استفاده از آن خدمات، محصول
                                یا هر چیز دیگری را به صفحه اول گوگل بیاورید، باید تمام اصول فنی و ظاهری طراحی یک وب سایت
                                و سئو را رعایت کنید . طراحی سایت، استفاده از سئو و تکنیک‌های آن در وب سایت نیاز به دانش
                                ویژه‌ای دارد از این‌رو بهتر است طراحی وب سایت، افزایش رتبه و بهینه‌سازی آن را به یک تیم
                                متخصص بسپارید.
                            </p>

                        <hr className="w-25 bg-white mt-5"/>
                    </div>
                </div>

                <div style={{overflowX: "hidden"}} className="col-lg-9 col-md-12 col-12 d-flex align-items-center">

                    <div className={style.CardSecctionThree}>

                            <div className="row">

                                <div className="col-12 col-lg-6 col-md-6 col-sm-12  ">

                                    <div className="card bg-transparent text-white border-0 text-dark">
                                        <div className="card-header bg-transparent fa-4x border-0">
                                            <i className="fas fa-mobile-alt"></i>

                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">Responsive</h3>
                                            <p className="card-text">
                                                امروزه با فراگیر شدن گوشی های هوشمند و وب گردی توسط انها وب سایت ها
                                                به سمت طراحی هایی مخصوص و بهتر برای گوشی های هوشمند رفته اند . امروزه
                                                طبق انالیز های گوگل ریسپانسیو و یا واکنش گرا بودن یکی از ارکان اصلی سئو
                                                به شمار میرود که وجود ان در هر سایتی ضروری است

                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-12 col-lg-6 col-md-6 col-sm-12 ">
                                    <div className="card bg-transparent text-white border-0 text-dark">
                                        <div className="card-header bg-transparent fa-4x border-0 bg-white">
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title"> SEO </h3>
                                            <p className="card-text">
                                                ما معماری و اهداف وب سایت شما را تجزیه و تحلیل میکنیم.
                                                ما اطمینان حاصل میکنیم که وب سایت شما توسط موتور های جست جو در صفحات اول
                                                قرار بگیرد و موانع نرسیدن به این هدف را از سر راه شما بر میداریم
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-12 col-lg-6 col-md-6 col-sm-12 ">
                                    <div className="card bg-transparent text-white border-0 text-dark">
                                        <div className="card-header bg-transparent fa-4x border-0 bg-white">
                                            <i className="fas fa-shield-alt"></i>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">security</h3>
                                            <p className="card-text">
                                                امنیت برنامه وب ، فرآیند محافظت از وب سایت ها و سرویس های آنلاین در
                                                برابر تهدیدهای امنیتی مختلف است که از آسیب پذیری های کد برنامه سو
                                                استفاده می کند ما شما را در برابر این نوع تهدیدات ایمن میکنیم و امنیت
                                                برنامه ی شما را تضمین میکنیم
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-12 col-lg-6 col-md-6 col-sm-12 ">
                                    <div className="card bg-transparent text-white border-0 text-dark">
                                        <div className="card-header bg-transparent fa-4x border-0 bg-white">
                                            <i className="fas fa-comment-dollar"></i>                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">Digital Marketing</h3>
                                            <p className="card-text">

                                                ما می توانیم تجارت شما را از طریق سایت های رسانه های اجتماعی (توییتر
                                                ، فیس بوک ، TikTok و موارد دیگر) ، سیستم عامل های بازاریابی موتور جستجو
                                                (SEM) مانند Google Adwords و هر نقطه تماس دیگری که در اکوسیستم دیجیتال
                                                ظاهر می شود ، ارتقا دهیم.

                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                    </div>
                </div>

            </section>
        )
}

