// import '../public/css/bootstrap.min.css'
import React, { useState } from 'react';
import OneSection from "./component/index/OneSection";
import TwoSection from "./component/index/TwoSection";
import ThreeSection from "./component/index/ThreeSection";
import FourSection from "./component/index/FourSection";
import style from "./component/css/style.module.css";
import FiveSection from "./component/index/FiveSection";
import BlogSection from "./component/index/BlogSection";
import Page from "./component/index/BlogSection";
import ReactHtmlParser from "react-html-parser";
import Link from 'next/link'


export default function Home({data}) {
    console.log(data)
  return (
      <div>
      <OneSection/>
      <TwoSection/>
      <ThreeSection/>
      <FourSection/>
      <FiveSection/>

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
                      {
                          data.map(text=>{
                              return(
                                  <li className={style.limenublog}>
                                      <Link href={{ pathname: '/Article', query: { pts: text.id } }}><div>
                                      <h4 className="mt-2 mb-3 d-block">
                                          {ReactHtmlParser(  text.title)}
                                      </h4>
                                      <p className="mt-2">
                                          {ReactHtmlParser(  text.description)}

                                          <br/>
                                          <i className="d-block mt-2">
                                              {ReactHtmlParser(  text.date)}
                                          </i>
                                      </p>
                                      </div></Link>
                                  </li>
                              )
                          })
                      }


                  </ul>
              </div>
          </section>


      {/*<BlogSection data={data} />*/}


      </div>
  )
}

export async function getStaticProps() {
    const res = await fetch('https://api.superiorweb.ir/api/post/resultpost',{
        method:"GET",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWppZCIsImp0aSI6Ik1hamlkMDk5ME0iLCJ1bmlxdWVfbmFtZSI6Im1hamlkIiwiZXhwIjoxNjM0ODkyMjc3LCJpc3MiOiJKd3RFeGFtcGxlIiwiYXVkIjoiamF2YWRpLmNvbSJ9.gugJJgtODLU4FiuTlNErfrEEx7ZY3z8Lp2qtJOqPtdE"

        },
    })
    const datas = await res.json()
    const data = datas.slice(0,5)
    return { props: { data } }
}

