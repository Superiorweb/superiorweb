import React, {Component} from "react";
import styleC from '../component/css/Catgorys.module.css'
import Menu from "../header/menu";

export default class Layouts extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <section
                    className={styleC.bgsection + " row justify-content-center align-items-center text-white mr-0 ml-0"}>

                    <div className="col-12 pr-0 pl-0">
                        <div className="w-100 h-100 d-flex justify-content-center align-items-center text-center">
                            <div style={{width:"90%"}}>
                                <h1 className={styleC.titleslide}>
                                    مقالات
                                </h1>

                                <p className={styleC.textslide}>

                               تیم سنیور وب در تلاش است تا با قرار دادن مطالب اموزنده در حوزه ی برنامه نویسی و طراحی سایت و SEO به شما در حل مشکلات و سوالات شما کمک کند
                                    </p>
                                <div>
                                    <a href={"#posts"}>
                                    <button className={styleC.btnslide}>
                                        دیدن پست ها
                                    </button>
                                    </a>
                                </div>

                                <div
                                    className={styleC.items + " row justify-content-center mr-0 ml-0 align-items-center"}>
                                    <div
                                        className="col-lg-2 col-3 d-flex justify-content-end justify-content-lg-center">
                                        <div className={styleC.item}>
                                            <i className="fab fa-java"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-3 d-flex justify-content-center">
                                        <div className={styleC.item}>
                                            <i className="fab fa-microsoft"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-3 d-flex justify-content-center text-center">
                                        <div className={styleC.item}>
                                            <i className="fab fa-php"></i>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-2 col-3 d-flex justify-content-start justify-content-lg-center">
                                        <div className={styleC.item}>
                                            <i className="fab fa-react"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {this.props.children}
            </div>
        )
    }
}
