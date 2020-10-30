import React, {Component} from "react";
import stCo from '../component/css/ConnectUs.module.css'
import Menu from "../header/menu";
import axios from "axios";
import Head from "next/head";


class ConnectUs extends Component {
    state={
        connect:[
            {id:"name",value:""},
            {id:"email",value:""},
            {id:"massage",value:""},
        ],
        response:null
    };

    SendData=()=>{
      axios.post('api/Connectus/Insert',{
          Name:this.state.connect[0].value,
          Email:this.state.connect[1].value,
          Family:this.state.connect[0].value,
          Massage:this.state.connect[2].value,
          PhoneNumber:this.state.connect[1].value,
        }).then(
          reponse=>{
              this.setState({response:reponse.data})
          }
      )
    };

    sender=(event,id)=>{
        const inp = this.state.connect.findIndex(i=>{
           return  i.id === id
        });
        const input = {...this.state.connect[inp]};
         input.value = event.target.value;
        const inputs = [...this.state.connect];
        inputs[inp]=input;
        this.setState({connect:inputs})
    };
    render() {
        return (
            <section className={stCo.section}>
                <Menu/>
                <Head>
                    <title>{"طراحی سایت | ارتباط با ما"}</title>
                    <meta name="description" content="لطفا نظرات و پیشنهادات خود را با ما در میان بگزارید " />
                    <meta name="keywords" content="ارتباط با ما"/>
                    <meta name="author" content="majid javadi"/>

                    <meta property="og:url" content="https://superiorweb.ir/"/>
                    <link rel="shortcut icon" href="./logo.ico" />
                </Head>
                <div className="row mr-0 ml-0 justify-content-center">
                    <div className="col-lg-5 col-sm-12 bg_primary">
                        <div className={stCo.height100vh + " d-flex justify-content-center align-items-center"}>
                            <form className={stCo.formconnect + " w-50"}>

                                <h1 className={stCo.titleform + " text-center mt-lg-0 mt-5"}>
                                    ارتباط با ما
                                </h1>
                                {this.state.response != null ? ( <div className="alert mt-5 alert-success text-center">پیام با موفقیت ارسال شد</div>) : (<div></div>)  }

                                <label className="w-100 mt-2 mt-lg-5">
                                    <input onChange={(event)=>this.sender(event,this.state.connect[0].id)} required type="text" placeholder="نام خانوادگی" className={stCo.ConnectI + " w-100"}/>
                                </label>
                                <label className="w-100 mt-2 mt-lg-5">
                                    <input onChange={(event)=>this.sender(event,this.state.connect[1].id)} required type="email" placeholder="ایمیل" className={stCo.ConnectI + " w-100"}/>
                                </label>
                                <label className="w-100 mt-2 mt-lg-5">
                                    <textarea onChange={(event)=>this.sender(event,this.state.connect[2].id)} required className={stCo.ConnectTextarea + " w-100"}>پیام شما</textarea>
                                </label>
                                <button onClick={this.SendData} type="button" className={stCo.btnSuBmit + " btn-success"}>ارسال</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className={stCo.height100vh + " w-100 d-flex justify-content-center align-items-center"}>
                            <div className="w-50">
                                <table className="text-center mt-5 mt-lg-0 w-100">
                                    <tbody>
                                    <tr className={stCo.trtable}>
                                        <td className={stCo.tdphone+" p-3"}>
                                            شماره
                                        </td>
                                        <td className={stCo.tdphoneNu}>
                                            09905611874
                                        </td>
                                    </tr>
                                    <tr className={stCo.trtable}>
                                        <td className={stCo.tdphone+" p-3"}>
                                            تلگرام
                                        </td>
                                        <td className={stCo.tdphoneNu}>
                                           @powerjavadi
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}

export default ConnectUs