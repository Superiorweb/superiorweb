import React, { useState } from 'react';
import Layouts from "./Layouts";
import styleC from '../component/css/Catgorys.module.css'
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';
import Head from "next/head";
import Link from "next/link";

//
//
//
//
// class Indexx extends Component {
//     state = {
//         postcard: [],
//         lenght: null,
//         paginationUl: [],
//         catgoryes: []
//     };
//
//
//     componentDidMount() {
//         axios.get('/api/post/resultpost', {}).then(res => {
//             this.setState({lenght: res.data.length})
//         });
//         axios.get("/api/post/rsultpagin?count=1", {}).then(res => {
//             // console.log(res.data);
//             console.log(res.data.length)
//             this.setState({postcard: res.data})
//         });
//         axios.get('/api/Catgory/result', {
//         }).then(
//             reponse => {
//                 this.setState({catgoryes:reponse.data});
//             }
//         )
//     }
//
//     setcatgory=(catgory)=>{
//         axios.get(`/api/post/CatgoryFinder?catgory=${catgory}`, {}).then(res => {
//             console.log(res.data);
//             this.setState({postcard: res.data})
//         })
//     };
//
//     pagehandler = (event, id) => {
//
//         console.log(id)
//         axios.get(`/api/post/rsultpagin?count=${id}`, {}).then(res => {
//             // console.log(res.data);
//             console.log(res.data.length)
//             this.setState({postcard: res.data})
//         });
//
//     };
//
//     static async getInitialProps() {
//         const res = await fetch('https://api.superiorweb.ir/api/post/resultpost',{
//             method:"GET",
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 'Content-Type': 'application/json',
//                 'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWppZCIsImp0aSI6Ik1hamlkMDk5ME0iLCJ1bmlxdWVfbmFtZSI6Im1hamlkIiwiZXhwIjoxNjM0ODkyMjc3LCJpc3MiOiJKd3RFeGFtcGxlIiwiYXVkIjoiamF2YWRpLmNvbSJ9.gugJJgtODLU4FiuTlNErfrEEx7ZY3z8Lp2qtJOqPtdE"
//
//             },
//         })
//         const datas = await res.json()
//         const data = datas.slice(0,5)
//         return { stars: data }
//     }
//
//
//     render() {
//         let z = Math.round(this.state.lenght / 12);
//         const cards = this.state.postcard.map((card) => {
//             return (
//                 <div
//                     className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 d-flex text-white justify-content-center m-lg-4 m-0 p-2">
//                     <div className={styleC.card + " card border-0"}>
//                         <img src={"https://api.superiorweb.ir//postimage/" + card.img} className="card-img-top" alt={card.title}/>
//
//                         <ul className={styleC.iconcard + " d-flex pr-1 pl-1 w-50"}>
//                             <li>
//                                 <i className="fas fa-2x fa-angle-right"></i>
//                             </li>
//                             <li style={{marginRight: " -1vw", background: "#ff0000a3"}}>
//                                 <i className="fa fa-share-alt" aria-hidden="true"></i>
//                             </li>
//                         </ul>
//                         <div className="card-body">
//                             <h5 className="card-title">{card.title}</h5>
//                             <p className="card-text">      {ReactHtmlParser(card.description)}
//
//                             </p>
//                             {/*<Link as={`/Article/${card.id}`} href="/Article/">*/}
//
//                             {/*</Link>*/}
//                             <Link href={{ pathname: '/Article', query: { pts: card.id } }}>
//                                 <button className="btn btn-primary">
//                                     Read Post
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             )
//         });
//         return (
//             <Layouts>
//             <section className="bg-dark" style={{height: "auto"}}>
//                 <Head>
//                     <title>بلاگ | طراحی سایت | مقالات </title>
//                     <meta name="description" content="اخرین و به روزترین اخبار و مقالات را با ما دنبال کنید " />
//                     <meta name="keywords" content={this.state.catgoryes.map(p=>{return(p.name)})}/>
//                     <meta name="author" content="majid javadi"/>
//                 </Head>
//                 <div className={"w-100 mb-5 d-flex justify-content-center"}>
//                     <div className={styleC.customwith}>
//                         <h1 onClick={console.log("error")} className={styleC.titleT + " text-center text-white"}>
// مقالات سوپریور وب
//                         </h1>
//                         <p className={"w-100 text-white text-center mt-4 " + styleC.textslidetwo}>
//                             شما میتوانید اخرین مقالات و اخبار مربوط به دنیای فناوری اطلاعات و طراحی وب سایت را با ما دنبال کنید و همچنین سوالات خود را از ما بپرسید
//                         </p>
//                     </div>
//                 </div>
//
//                 {/*....one....*/}
//
//                 <div id="posts" className={styleC.bg_primary + " row justify-content-center mt-5 pt-5 pb-5 mr-0 ml-0"}>
//                     <div className="row w-100 justify-content-center mb-5">
//                         <div className="col-3">
//                             <div className={styleC.select}>
//                                 <select onChange={(event)=>this.setcatgory(event.target.value)} className="w-100 text-center" name="slct" id="slct">
//                                     <option selected disabled>موضوع مورد نظر را جست و جو کنید</option>
//                                     {
//                                         this.state.catgoryes.map((cat)=>{
//                                             return (
//                                                 <option>{cat.name}</option>
//                                             )
//                                         })
//                                     }
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     {cards}
//                     <div className="d-flex justify-content-center w-100 position-relative mb-3 mt-3">
//                         <nav aria-label="Page navigation example">
//                             <ul className="pagination">
//                                 <li className="page-item"><a className="page-link">Previous</a></li>
//                                 {[
//                                     ...new Array(z)
//                                 ].map((item, index) => {
//                                     return (<li className="page-item"><a
//                                         onClick={(event) => this.pagehandler(event, index + 1)}
//                                         className="page-link">{index + 1}</a></li>)
//                                 })}
//                                 <li className="page-item"><a className="page-link">Next</a></li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </section>
//             </Layouts>
//         );
//     }
// }
//







export default function ({data, catgories}) {
    const [posting, setpost] = useState(data);

    function setcatgory(catgory){
      let rerult = axios.get(`/api/post/CatgoryFinder?catgory=${catgory}`, {}).then(res => {
         return res.data
        })
        const asynchronousFunction = async () => {
            let x = await rerult
            setpost(x)
        }
        asynchronousFunction()
    }

    function pagehandler (event, id) {
        let rest = axios.get(`/api/post/rsultpagin?count=${id}`, {}).then(res => {
           return res.data
        });
        const asynchronousFunction = async () => {
            let x = await rest
            setpost(x)
        }
        asynchronousFunction()
    }


    data = posting
    let z = Math.round(data.length / 12);
    return (
        <Layouts>
            <section className="bg-dark" style={{height: "auto"}}>
                <Head>
                    <title>بلاگ | طراحی سایت | مقالات </title>
                    <meta name="description" content="اخرین و به روزترین اخبار و مقالات را با ما دنبال کنید "/>
                    <meta name="keywords" content={catgories.map(p => {
                        return (p.name)
                    })}/>
                    <meta name="author" content="majid javadi"/>

                    <meta property="og:url" content="https://superiorweb.ir/"/>
                    <link rel="shortcut icon" href="./logo.ico" />
                </Head>
                <div className={"w-100 mb-5 d-flex justify-content-center"}>
                    <div className={styleC.customwith}>
                        <h1 onClick={console.log("error")} className={styleC.titleT + " text-center text-white"}>
                            مقالات سوپریور وب
                        </h1>
                        <p className={"w-100 text-white text-center mt-4 " + styleC.textslidetwo}>
                            شما میتوانید اخرین مقالات و اخبار مربوط به دنیای فناوری اطلاعات و طراحی وب سایت را با ما
                            دنبال کنید و همچنین سوالات خود را از ما بپرسید
                        </p>
                    </div>
                </div>

                {/*....one....*/}

                <div id="posts" className={styleC.bg_primary + " row justify-content-center mt-5 pt-5 pb-5 mr-0 ml-0"}>
                    <div className="row w-100 justify-content-center mb-5">
                        <div className="col-12 col-lg-4">
                            <div className={styleC.select}>
                                <select onChange={(event) =>setcatgory(event.target.value)}
                                        className="w-100 text-center" name="slct" id="slct">
                                    <option selected disabled>موضوع مورد نظر را جست و جو کنید</option>
                                    {
                                        catgories.map((cat) => {
                                            return (
                                                <option>{cat.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    {data.map(card => {
                        return (
                            <div style={{cursor:"pointer"}}
                                className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 d-flex text-white justify-content-center m-0 p-2">
                                <Link href={{pathname: '/Article', query: {pts: card.id}}}>
                                <div className={styleC.card + " card border-0"}>
                                    <img src={"https://api.superiorweb.ir//postimage/" + card.img}
                                         className="card-img-top" alt={card.title}/>

                                    <ul className={styleC.iconcard + " d-flex pr-1 pl-1 w-50"}>
                                        <li>
                                            <i className="fas fa-2x fa-angle-right"></i>
                                        </li>
                                        <li style={{marginRight: " -1vw", background: "#ff0000a3"}}>
                                            <i className="fa fa-share-alt" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                    <div className="card-body">
                                        <h5 className="card-title">{card.title}</h5>
                                        <p style={{textAlign:"justify"}} className="card-text">
                                            {ReactHtmlParser(card.description)}
                                        </p>
                                        <Link href={{pathname: '/Article', query: {pts: card.id}}}>
                                            <button className="btn btn-primary">
                                                Read Post
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )
                    })}
                    <div className="d-flex justify-content-center w-100 position-relative mb-3 mt-3">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link">Previous</a></li>
                                {[
                                    ...new Array(z)
                                ].map((item, index) => {
                                    return (<li className="page-item"><a
                                        onClick={(event) => pagehandler(event, index + 1)}
                                        className="page-link">{index + 1}</a></li>)
                                })}
                                <li className="page-item"><a className="page-link">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </Layouts>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.superiorweb.ir/api/post/resultpost', {
        method: "GET",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWppZCIsImp0aSI6Ik1hamlkMDk5ME0iLCJ1bmlxdWVfbmFtZSI6Im1hamlkIiwiZXhwIjoxNjM0ODkyMjc3LCJpc3MiOiJKd3RFeGFtcGxlIiwiYXVkIjoiamF2YWRpLmNvbSJ9.gugJJgtODLU4FiuTlNErfrEEx7ZY3z8Lp2qtJOqPtdE"

        },
    })

    const catgory = await fetch('https://api.superiorweb.ir/api/Catgory/result', {
        method: "GET",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWppZCIsImp0aSI6Ik1hamlkMDk5ME0iLCJ1bmlxdWVfbmFtZSI6Im1hamlkIiwiZXhwIjoxNjM0ODkyMjc3LCJpc3MiOiJKd3RFeGFtcGxlIiwiYXVkIjoiamF2YWRpLmNvbSJ9.gugJJgtODLU4FiuTlNErfrEEx7ZY3z8Lp2qtJOqPtdE"

        },
    })

    const data = await res.json()
    const catgories = await catgory.json()
    return {props: {data, catgories}}
}

