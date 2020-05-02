import React, { Component } from 'react'
import styles from './index.scss'
import { Link } from 'dva/router'
import { Card } from 'antd'
import { Input } from 'antd'
import {main_view_seach_by_input} from '../../utils/Regexp'
import bg1 from '../../assets/img_bg_1.jpg'
import bg2 from '../../assets/img_bg_2.jpg'
import bg3 from '../../assets/img_bg_3.jpg'
import Tree_5 from '../../assets/tree_5.jpg'
import axios from 'axios'
const { Search } = Input;
const arr = [
    {
        img: bg1
    },
    {
        img: bg2
    },
    {
        img: bg3
    }
]
export default class index extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    componentDidMount() {
        let secondElement = document.getElementsByClassName("main-module-second")[0];
        let main_module_third_title_box = document.getElementsByClassName("main-module-third-title-box")[0];
        let secondElementPosition = document.getElementsByClassName("main-module-second-position")[0];
        let main_module_third_show_left = document.getElementsByClassName("main-module-third-show-left")[0];
        let main_module_third_show_right = document.getElementsByClassName("main-module-third-show-right")[0];
        let title_h1 = document.getElementsByClassName("title_h1")[0];
        let title_p = document.getElementsByClassName("title_p")[0];
        let title_p_a = document.getElementsByClassName("title_p_a")[0];
        let main_module_five_one = document.getElementsByClassName("main-module-five_one")[0];
        let main_module_five_two = document.getElementsByClassName("main-module-five_two")[0];
        let main_module_five_three = document.getElementsByClassName("main-module-five_three")[0];
        let main_module_five_four = document.getElementsByClassName("main-module-five_four")[0];
        let one = document.getElementsByClassName("one")[0];
        let two = document.getElementsByClassName("two")[0];
        let three = document.getElementsByClassName("three")[0];
        let four = document.getElementsByClassName("four")[0];
        let last_h2 = document.getElementsByClassName("last_h2")[0];
        let last_p = document.getElementsByClassName("last_p")[0];
        let client_width_view = document.documentElement.clientWidth
        window.onresize = function () {
            client_width_view = document.documentElement.clientWidth
        }
        window.onscroll = function () {

            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if (client_width_view > 986) {
                if (scrollTop > 300) {

                    secondElementPosition.className = "main-module-second-position active"
                }
                if (scrollTop > 1000) {
                    main_module_third_title_box.className = "main-module-third-title-box active"
                }
                if (scrollTop > 1200) {
                    main_module_third_show_left.className = "main-module-third-show-left active"
                    main_module_third_show_right.className = "main-module-third-show-right active"
                }

                if (scrollTop > 2000) {
                    title_h1.className = "title_h1 active"

                }
                if (scrollTop > 2200) {
                    title_p.className = "title_h1 active"

                }
                if (scrollTop > 2300) {

                    title_p_a.className = "title_p_a active"
                }
                if (scrollTop > 2517) {
                    main_module_five_one.className = "main-module-five_one active"
                    main_module_five_two.className = "main-module-five_two active"
                }
                if (scrollTop > 2860) {
                    main_module_five_three.className = "main-module-five_three active"
                    main_module_five_four.className = "main-module-five_three active"
                }
                if (scrollTop > 3325) {
                    last_h2.className = "last_h2 active"
                }
                if(scrollTop > 3430){
                    last_p.className = "last_p active"
                }
                if(scrollTop > 3648){
                    one.className = " main-module-six-item one active"
                    two.className = " main-module-six-item two active"
                    three.className = " main-module-six-item three active"
                    four.className = " main-module-six-item four active"
                }
            }
            else {
                if (scrollTop > 666) {
                    secondElement.className = "main-module-second active"
                    secondElementPosition.className = "main-module-second-position active"
                }
                if (scrollTop > 1344) {
                    main_module_third_title_box.className = "main-module-third-title-box active"
                }
                if (scrollTop > 1722) {
                    main_module_third_show_left.className = "main-module-third-show-left active"

                }
                if (scrollTop > 2217) {
                    main_module_third_show_right.className = "main-module-third-show-right active"
                }

                if (scrollTop > 2876) {
                    title_h1.className = "title_h1 active"
                }
                if (scrollTop > 2910) {
                    title_p.className = "title_p active"

                }
                if (scrollTop > 3010) {
                    title_p_a.className = "title_p_a active"
                }
                if (scrollTop > 3325) {
                    main_module_five_one.className = "main-module-five_one active"
                    
                }
                if(scrollTop > 3435){
                    main_module_five_two.className = "main-module-five_two active"
                }
                if(scrollTop > 3546){
                    main_module_five_three.className = "main-module-five_three active"
                }
                if (scrollTop > 3600) {
                    main_module_five_four.className = "main-module-five_four active"
                }
                if (scrollTop > 4046) {
                    last_h2.className = "last_h2 active"
                    last_p.className = "last_p active"
                }
                if(scrollTop > 4347){
                    one.className = " main-module-six-item one active"
                }
                if(scrollTop > 5090){
                    two.className = " main-module-six-item two active"
                }

                if(scrollTop > 5796){
                    three.className = " main-module-six-item three active"
                }
                if(scrollTop > 6052){
                    four.className = " main-module-six-item four active"
                }
            }



        }
    }
    _handle(event, kindex) {
        event.persist();
        this.setState({
            index: event._targetInst.index
        })

    }
    onSearch(value){
      console.log(value)
      axios.get(main_view_seach_by_input,{params:{
          name : value
      }}).then((res)=>{
          console.log(res)
      })
    }
    render() {
        return (
            <div className="main-view">
                <div className="main-module-first  " ref={(node) => this.firstElement = node}>
                    <section className="main-module-first-box">
                        <h1>Creativity Is A Wild Mind & A Disciplined Eye</h1>
                        <h2>Free html5 templates Made by xinxin </h2>

                    </section>
                </div>
                <div className="main-module-second" ref={(node) => this.secondElement = node}>
                    <div className="main-module-second-box">
                        <div className="main-module-second-left">
                            <h2>
                                Download Our Latest Free HTML5 Bootstrap Template
                        </h2>
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                        </p>
                        </div>
                        <div className="main-module-second-right">
                            <ul className="my_list-pointer" onClick={(event, kindex) => { this._handle(event, kindex) }} ref={(node) => this.ul_list = node}>
                                {
                                    arr.map((item, kindex) => {
                                        return (
                                            <li className={` my_list-pointer_item ${kindex === this.state.index ? "active" : ""}`} key={kindex}  ></li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="img-wrap">
                                {
                                    arr.map((item, index) => {
                                        return (
                                            <img className={`my_img  ${index === this.state.index ? "active" : ""}    `} src={item.img} alt="" key={index} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div className="main-module-second-position">
                        <h2>
                            Download Our Latest Free HTML5 Bootstrap Template
                        </h2>
                        <p>
                            Ink is a free html5 bootstrap and a multi-purpose template perfect for any type of websites. A combination of a minimal and modern design template. The features are big slider on homepage, smooth animation, product listing and many more
                        </p>
                    </div>

                </div>
                <div className="main-module-third" ref={(node) => this.thirdElement = node}>
                    <section className="main-module-third-title">
                        <div className="main-module-third-title-box">
                            Wireframe Connects the Underlying Conceptual Structure
                        </div>
                    </section>
                    <div className="main-module-third-show">
                        <section className="main-module-third-show-left">

                            <div className="main-module-third-show-left-containter">
                                <h2>Wireframe Connects the Underlying Conceptual Structure</h2>

                                <p>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                                <span>Louie Jie Mahusay</span>
                                <br />
                                <small>CEO, Founder</small>
                            </div>
                        </section>
                        <section className="main-module-third-show-right">
                            <Search
                                placeholder="input search text"
                                enterButton="Search"
                                size="large"
                                onSearch={value =>{this.onSearch(value)}}
                            />
                        </section>
                    </div>
                </div>
                <div className="main-module-four" ref={(node) => this.fourElement = node}>
                    <div className="main-module-four-title">
                        <h1 className="title_h1">Hire Us!</h1>
                        <p className="title_p">Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                        <p className="title_p_a"><Link to="/recover" className="go_recover">回收</Link></p>
                    </div>
                </div>
                <div className="main-module-five" ref={(node) => this.fiveElement = node}>
                    <div className="main-module-five_one item ">
                        <section>
                            <div className="img-box">
                                <img src={Tree_5} alt="" />
                            </div>
                            <div className="item-content">
                                <h3>Marketing</h3>
                                <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                            </div>
                        </section>
                    </div >
                    <div className=" main-module-five_two item">
                        <section>
                            <div className="img-box">
                                <img src={Tree_5} alt="" />
                            </div>
                            <div className="item-content">
                                <h3>Marketing</h3>
                                <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                            </div>
                        </section>
                    </div>
                    <div className="main-module-five_three item">
                        <section>
                            <div className="img-box">
                                <img src={Tree_5} alt="" />
                            </div>
                            <div className="item-content">
                                <h3>Marketing</h3>
                                <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                            </div>
                        </section>
                    </div>
                    <div className="main-module-five_four item">
                        <section>
                            <div className="img-box">
                                <img src={Tree_5} alt="" />
                            </div>
                            <div className="item-content">
                                <h3>Marketing</h3>
                                <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="main-module-six" ref={(node) => this.sixElement = node}>
                    <div className="main-module-six-title">
                        <h2 className="last_h2">Recent Post</h2>
                        <p className="last_p">Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                    </div>
                    <div className="main-module-six-container">
                    <div className="main-module-six-item one">
                        <div className="img-box">
                            <img src={Tree_5} alt="" />
                        </div>
                        <div className="content-box">
                            <h3>Photoshoot On The Street</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className="content-box-bottom">
                                <p>还有东西 是图标 </p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="main-module-six-item two">
                        <div className="img-box">
                            <img src={Tree_5} alt="" />
                        </div>
                        <div className="content-box">
                            <h3>Photoshoot On The Street</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className="content-box-bottom">
                                <p>还有东西 是图标 </p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="main-module-six-item three">
                        <div className="img-box">
                            <img src={Tree_5} alt="" />
                        </div>
                        <div className="content-box">
                            <h3>Photoshoot On The Street</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className="content-box-bottom">
                                <p>还有东西 是图标 </p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="main-module-six-item four">
                        <div className="img-box">
                            <img src={Tree_5} alt="" />
                        </div>
                        <div className="content-box">
                            <h3>Photoshoot On The Street</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className="content-box-bottom">
                                <p>还有东西 是图标 </p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    

                </div>
                <div className="place"></div>
            </div>
        )
    }
}
