import React from "react";
import styleP from '../component/css/post.module.css'
import ReactHtmlParser from "react-html-parser";
import Menu from "../header/menu";
import Head from "next/head";




export default function({data}){

        let post = (
            <div className="d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <div className="text-center">
                <i className="fas fa-3x fa-spinner fa-pulse"></i>
                <h1 className="mt-5">در حال بارگذاری ... </h1>
                </div>
            </div>
        )
        if(data != null){
        post =  (
            <section>
                <Head>
                    <title>{data.title + "طراحی سایت |"}</title>
                    <meta name="description" content={data.description} />
                    <meta name="keywords" content={data.title}/>
                    <meta name="author" content="majid javadi"/>

                    <meta property="og:url" content="https://superiorweb.ir/"/>
                    <link rel="shortcut icon" href="./logo.ico" />
                </Head>
                <Menu/>
                <div className="row mr-0 ml-0">
                    <div className="col-12 pr-0 pl-0">
                        <h1 className={styleP.titleH1}>{data.title}</h1>
                        <img alt="عکس سر برگ" className={styleP.imgtop+" w-100"} src={"https://api.superiorweb.ir//postimage/" + data.img}/>
                        <div className={styleP.POST}>
                            <div className={styleP.textdiv+" bg-white"}>
                           <p>
                               {ReactHtmlParser(data.context)}
                           </p>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
        }

        return (post)
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://api.superiorweb.ir/api/post/choosepost?id=${context.query.pts}`,{
        method:"GET",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWppZCIsImp0aSI6Ik1hamlkMDk5ME0iLCJ1bmlxdWVfbmFtZSI6Im1hamlkIiwiZXhwIjoxNjM0ODkyMjc3LCJpc3MiOiJKd3RFeGFtcGxlIiwiYXVkIjoiamF2YWRpLmNvbSJ9.gugJJgtODLU4FiuTlNErfrEEx7ZY3z8Lp2qtJOqPtdE"

        },
    })
    const data = await res.json()
    return { props: { data } }
}


