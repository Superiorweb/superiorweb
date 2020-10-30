import React, {Component} from "react";
import style from '../css/style.module.css'
import axios from "axios";
import ReactHtmlParser from "react-html-parser";


export default class BlogSection extends Component {
    state = {
        postcard: []
    };

    componentDidMount() {
        // const asynchronousFunction = async () => {
        //     let x = await getServerSideProps()

        // }
        // asynchronousFunction()
        this.setState({postcard:this.props.data})
        console.log(this.state.postcard)
    }

    render() {
        const cards = this.state.postcard.map((card) => {
            return (
                <li className={style.limenublog}>
                    <h4 className="mt-2 mb-3 d-block">
                        {ReactHtmlParser(  card.title)}
                    </h4>
                    <p className="mt-2">
                        {ReactHtmlParser(  card.description)}

                        <br/>
                        <i className="d-block mt-2">
                            {ReactHtmlParser(  card.date)}
                        </i>
                    </p>

                </li>
            )
        });
        return (
            <section className={style.heighvhdiv + " " + style.blogbg + " row mr-0 ml-0 bg-white"}>
                <div
                    className="col-lg-5 text-lg-right text-center mt-lg-0 mt-5 col-md-12 d-flex justify-content-center align-items-center">
                    <div className={style.withblogsection}>
                        <h2>
                            <b className={style.yellowcolor}>
                                مقالات
                            </b><br/>
                           سوپریور وب
                        </h2>
                        <p className={style.fontsize + " " + style.fonttextblog}>

                 شما میتوانید اخرین مقالات و اخبار مربوط به دنیای فناوری اطلاعات و طراحی وب سایت را با ما دنبال کنید و همچنین سوالات خود را از ما بپرسید

                        </p>

                    </div>


                </div>
                <div className="col-lg-7 col-md-12 d-flex justify-content-center align-items-center">
                        <ul className="w-100">

                            {cards}

                        </ul>
                </div>
            </section>
        )
    }
}




// export async function getAllPostIds() {
//
//     const res = await fetch('https://api.superiorweb.ir/api/post/resultpost',{
//         method:"GET",
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json',
//             'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWppZCIsImp0aSI6Ik1hamlkMDk5ME0iLCJ1bmlxdWVfbmFtZSI6Im1hamlkIiwiZXhwIjoxNjM0ODkyMjc3LCJpc3MiOiJKd3RFeGFtcGxlIiwiYXVkIjoiamF2YWRpLmNvbSJ9.gugJJgtODLU4FiuTlNErfrEEx7ZY3z8Lp2qtJOqPtdE"
//
//         },
//     })
//     return res.json()
// }
// export default BlogSection