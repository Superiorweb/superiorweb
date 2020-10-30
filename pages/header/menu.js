import React, {Component} from 'react'
import stmn from '../component/css/menu.module.css'
import axios from "axios";
import Link from "next/link";

class Menu extends Component {
    state={
        result:[],
        notfound:[]
    };
    closemenu = () => {

        const menu = document.getElementById('menures');
        menu.classList.add('d-none')


    };
    openmenu = () => {

        const menu = document.getElementById('menures');
        menu.classList.remove('d-none')
    };

    search =(value)=>{
        const resulsearch = document.querySelector("#resulsearch");
        if (value != null && value != "" && value != " ") {
            resulsearch.classList.remove("d-none")
            axios.get(`api/post/search?str=${value}`).then(res => {
                if (res.data.length > 0) {
                    this.setState({result: res.data})
                    this.setState({notfound:" "})
                }else {
                    this.setState({result: res.data})
                    this.setState({notfound:"Not Found"})

                }
            })
        }else {
            resulsearch.classList.add("d-none");
        }

    };

    render() {

        const search = this.state.result.map(
          result =>{

                  return(<li><NavLink to={'/post/'+ result.id}>{result.title}</NavLink></li>);
          }
        );

        return (
            <header className="bg-dark mt-0 pt-3 pb-3 pt-lg-0 pb-lg-0 text-white">
                <div className="row mr-0 ml-0">
                    <div className="col-4 col-lg-6">

                        <ul className={stmn.ulmenu + " d-none d-lg-flex mt-2 mb-0"}>


                            <li className={stmn.limenu + " ml-2 text-center"}>
                                <Link href="/">
                                   خانه
                                </Link>
                            </li>
                            <li className={stmn.limenu + " ml-2 text-center"}>
                                <Link href="/Cv">
                                    رزومه
                                </Link>
                            </li>
                            <li className={stmn.limenu + " ml-2 text-center"}>
                                <Link href="/Articles">
                                    بلاگ
                                </Link>
                            </li>
                            <li className={stmn.limenu + " ml-2 text-center"}>
                                <Link href="/ConnectUs">
                                    ارتباط با ما
                                </Link>
                            </li>
                        </ul>
                        <button onClick={this.openmenu} className={stmn.btnmenuopen}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                        <div>
                            <ul id="menures" className={stmn.ulmenuresponsive + " mt-2 mb-0 d-none"}>
                                <li className={stmn.limenuresponsive + " ml-2 text-center"}>
                                    <button onClick={this.closemenu} id="close" className={stmn.btnclose}>
                                        <i className="fas text-dark fa-times"></i>
                                    </button>
                                </li>
                                <li className={stmn.limenuresponsive + " ml-2 text-center"}>
                                    <Link href="/">
                                        خانه
                                    </Link>
                                </li>
                                <li className={stmn.limenuresponsive + " ml-2 text-center"}>
                                    <Link href="/Cv">
                                        رزومه
                                    </Link>
                                </li>
                                <li className={stmn.limenuresponsive + " ml-2 text-center"}>
                                    <Link href="/posts">
                                        بلاگ
                                    </Link>
                                </li>
                                <li className={stmn.limenuresponsive + " ml-2 text-center"}>
                                    <Link href="/ConnectUs">
                                        ارتباط با ما
                                    </Link>
                                </li>
                                <li className={stmn.limenuresponsive + " ml-2 text-center"}>
                                    <img src="/img/index/logotext.png" className="w-100"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-8 col-lg-6 justify-content-end align-items-center d-flex">
                        <div className="">
                            <form style={{marginLeft:"2vw"}}>
                                {/*<input className={stmn.search}/>*/}
                                <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Username</label>
                                <div style={{direction: "ltr"}} className="input-group">
                                    <div className="input-group-prepend">
                                        <button type="submit" className={"input-group-text h-100 " + stmn.btnsearch}>
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                    </div>

                                    <input onChange={(event)=>this.search(event.target.value)} type="text" className={"form-control " + stmn.search}
                                           id=""
                                           placeholder="search"/>
                                    </div>




                                            <div style={{zIndex:"100000"}} id={"resulsearch"} className={stmn.resulsearch + "  bg-dark d-none"}>
                                                <ul>
                                                    {search}
                                                    <li style={{listStyle:"none",textAlign:"center"}}>{this.state.notfound}</li>
                                                </ul>
                                            </div>

                            </form>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Menu
