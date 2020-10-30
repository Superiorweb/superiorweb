import React, {Component} from "react";
import style from '../css/style.module.css'
import axios from "axios";
import {error} from "next/dist/build/output/log";


export default class FourSection extends Component {

    state = {
        result : []
    }

    componentDidMount() {
       const asynchronousFunction = async () => {
            let x = await getSortedPostsData()
           this.setState({result:x})
        }
        asynchronousFunction()
    }

    render() {
        console.log(this.state.result)
        const link = this.state.result.map((result)=>{
            return(
                <li className={style.limenuFour}>
                    <a href={result.link}> {result.name}</a>
                </li>
            )
        });
        const imgproject = this.state.result.map((result)=>{
            return(
                <div className={style.catgoryes + " col-md-6 col-lg-6 col-sm-6 col-12 pr-0 pl-0 "}>
                    <a style={{textDecoration:"none"}} href={result.link}>
                    <img className={style.imgfour + " w-100 h-100"} src={"https://api.superiorweb.ir/postimage/"+result.image} alt={result.name}/>
                    <h3 className={style.h3tozihat}>{result.catgory}</h3>
                    </a>
                </div>
            )
        });
        return (
            <section id="nmonekar" className={style.HeigytFour + " row mr-0 ml-0"}>

                <div className="col-lg-6 col-12 bg-gradient bg-white">
                    <div className="row justify-content-end">
                        <div className="col-12 text-center col-lg-12 mt-5 text-left">
                            <div className="mt-5">
                                <h2 className="text-center">
                         <span className={style.yellowcolor}>
                             نمونه
                         </span>
                                    <br/>
                                    کار های ما
                                </h2>
                            </div>
                            <div className={style.HelightListFour + " d-flex align-items-center justify-content-end"}>
                                <ul className={style.ulmenuFour}>
                                    {link}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12 bg-primary">

                    <div className="row">
                        {imgproject}
                    </div>

                </div>

            </section>
        )
    }
}
export async function getSortedPostsData() {
    const res = await fetch('https://api.superiorweb.ir/api/Projects/result',{
        method:"GET",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWppZCIsImp0aSI6Ik1hamlkMDk5ME0iLCJ1bmlxdWVfbmFtZSI6Im1hamlkIiwiZXhwIjoxNjM0ODkyMjc3LCJpc3MiOiJKd3RFeGFtcGxlIiwiYXVkIjoiamF2YWRpLmNvbSJ9.gugJJgtODLU4FiuTlNErfrEEx7ZY3z8Lp2qtJOqPtdE"

        },
    })

    return res.json()
}