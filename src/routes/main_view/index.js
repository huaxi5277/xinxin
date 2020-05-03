import React, { Component } from 'react'
import styles from './index.scss'
import { Link } from 'dva/router'
import { Input ,Table } from 'antd'
import { main_view_seach_by_input } from '../../utils/Regexp'
import bg1 from '../../assets/mount.jpg'
import bg3 from '../../assets/water.jpg'
import bg2 from '../../assets/star.jpg'
import bg4 from '../../assets/see.jpg'
import you1 from '../../assets/you1.png'
import ke1 from '../../assets/ke1.png'
import qi1 from '../../assets/qi1.png'
import chu1 from '../../assets/chu1.png'
import  love from '../../assets/喜欢.png'
import hot from '../../assets/热度.png'
import Tree_5 from '../../assets/tree_5.jpg'
import harm from '../../assets/harm.jpg'
import huishou from '../../assets/huishou.jpg'
import chu3 from '../../assets/chu3.jpg'
import other from '../../assets/other.jpg'
import axios from 'axios'
const { Search } = Input;
const { Column } = Table;
const arr = [
    {
        img: bg1
    },
    {
        img: bg2
    },
    {
        img: bg3
    },
    {
        img: bg4
    }
]
export default class index extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            init_arr: [],
            is_loading: false,
            isTables: false
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
                    main_module_five_four.className = "main-module-five_four active"
                }
                if (scrollTop > 3325) {
                    last_h2.className = "last_h2 active"
                }
                if (scrollTop > 3430) {
                    last_p.className = "last_p active"
                }
                if (scrollTop > 3648) {
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
                if (scrollTop > 3435) {
                    main_module_five_two.className = "main-module-five_two active"
                }
                if (scrollTop > 3546) {
                    main_module_five_three.className = "main-module-five_three active"
                }
                if (scrollTop > 3600) {
                    main_module_five_four.className = "main-module-five_four active"
                }
                if (scrollTop > 4046) {
                    last_h2.className = "last_h2 active"
                    last_p.className = "last_p active"
                }
                if (scrollTop > 4347) {
                    one.className = " main-module-six-item one active"
                }
                if (scrollTop > 5090) {
                    two.className = " main-module-six-item two active"
                }

                if (scrollTop > 5796) {
                    three.className = " main-module-six-item three active"
                }
                if (scrollTop > 6052) {
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
    onSearch(value) {
        let arr = []
        axios.get(main_view_seach_by_input, {
            params: {
                name: value
            }
        }).then((res) => {
            res.data.data.forEach((item, index) => {
                if (item.length > 0) {
                    item.forEach((s_item, s_index) => {
                        let temp = {
                            key: s_item.id,
                            "名称": s_item.a_name,
                            "说明": s_item.stardard.s_detail,
                            "类别": s_item.stardard.s_name,
                            images: [s_item.stardard.s_image.iaddress],
                        }
                        arr.push(temp)
                    })
                }
            })
            this.setState({
                init_arr: arr,
                is_loading: false,
                isTables: true
            })
        })
    }
    render() {
        return (
            <div className="main-view">
                <div className="main-module-first  " ref={(node) => this.firstElement = node}>
                    <section className="main-module-first-box">
                        <h1> Design and Implementation of the guidance system </h1>
                        <h2>for the classification and recovery of household old things </h2>

                    </section>
                </div>
                <div className="main-module-second" ref={(node) => this.secondElement = node}>
                    <div className="main-module-second-box">
                        <div className="main-module-second-left">
                            <h2>
                            The most beautiful scenery on earth
                        </h2>
                            <p style={{color : "#c0d3ff"}}>
                            high mountain blue water starry sky polar light
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
                        The importance of protecting the environment
                        </h2>
                        <p>
                        There are many reasons for environmental pollution. For example, the plastic bags and paper scraps that we can see everywhere in our lives can pollute the environment. There are also some factories that discharge waste gas 
                        </p>
                    </div>

                </div>
                <div className="main-module-third" ref={(node) => this.thirdElement = node}>
                    <section className="main-module-third-title">
                        <div className="main-module-third-title-box">
                              Query garbage classification
                        </div>
                    </section>
                    <div className="main-module-third-show">
                        <section className="main-module-third-show-left">

                            <div className="main-module-third-show-left-containter">
                                <h2>Now let's understand the harm of each kind of garbage</h2>

                                <p>
                                Please input the content you want to query on the right side, and you will know the harm of this kind of garbage in a second

But if you input something, we will match it for you as much as possible. Thank you for your use
                        </p>
                                <span>XIn XIn</span>
                                <br />
                                <small>Student, environmental protection</small>
                            </div>
                        </section>
                        <section className="main-module-third-show-right">
                            <Search
                                placeholder="input search text"
                                enterButton="Search"
                                size="large"
                                onSearch={value => { this.onSearch(value) }}
                            />
                            {/* 渲染的表单 */}
                            <div className="table" style={{ display: this.state.isTables == true ? "block" : "none" ,marginTop : "50px" }} >

                                <Table dataSource={this.state.init_arr}
                                pagination={{defaultPageSize:3}}
                                >
                                    <Column title="名称" dataIndex="名称" key="10" />
                                    <Column title="类别" dataIndex="类别" key="11" />
                                    <Column title="说明" dataIndex="说明" key="12" />
                                    <Column
                                        title="图片"
                                        dataIndex="images"
                                        key="images"
                                        render={images => (
                                            <span>
                                                {images.map((tag, index) => (
                                                    <img src={tag} alt="" key={index} style={{ width: "100px" }} />
                                                ))}
                                            </span>
                                        )}
                                    />
                                </Table>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="main-module-four" ref={(node) => this.fourElement = node}>
                    <div className="main-module-four-title">
                        <h1 className="title_h1">Be your own hero!</h1>
                        <p className="title_p">Now, let's recycle the idle things in our home</p>
                        <p className="title_p_a"><Link to="/recover" className="go_recover">Learn more</Link></p>
                    </div>
                </div>
                <div className="main-module-five" ref={(node) => this.fiveElement = node}>
                    <div className="main-module-five_one item ">
                        <section>
                            <div className="img-box">
                                <img src={chu1} alt="" />
                            </div>
                            <div className="item-content">
                                <h3>Kitchen Waste</h3>
                                <p>Kitchen waste refers to the waste generated in daily life, food processing, catering services, unit meals and other activities,</p>
                                <p>Including discarded vegetable leaves, leftovers, leftovers, peel, eggshell, tea dregs, bones, etc,</p>
                                <p>Its main sources are family kitchen, restaurant, restaurant, canteen, market and other industries related to food processing.</p>
                            </div>
                        </section>
                    </div >
                    <div className=" main-module-five_two item">
                        <section>
                            <div className="img-box">
                                <img src={qi1} alt="" />
                            </div>
                            <div className="item-content">
                                <h3>Other Waste</h3>
                                <p>Other wastes, such as construction wastes and domestic wastes, are generally disposed by landfill, incineration and sanitary decomposition,</p>
                                <p>Some of them can also be solved by means of biodegradation, such as earthworms.</p>
                                <p>His garbage is a kind of garbage that can be recycled, leftover kitchen garbage and harmful garbage.</p>
                            </div>
                        </section>
                    </div>
                    <div className="main-module-five_three item">
                        <section>
                            <div className="img-box">
                                <img src={you1} alt="" />
                            </div>
                            <div className="item-content">
                                <h3>Harmful waste</h3>
                                <p>Hazardous waste refers to the domestic wastes such as waste batteries, waste lamps, waste drugs, waste paints and their containers, which cause direct or potential harm to human health or natural environment.</p>
                                <p>Common hazardous wastes include waste batteries, waste fluorescent tubes, waste light bulbs, waste mercury thermometers, waste paint buckets, expired drugs, etc. Hazardous and toxic wastes need special and correct methods for safe disposal.</p>
                            </div>
                        </section>
                    </div>
                    <div className="main-module-five_four item">
                        <section>
                            <div className="img-box">
                                <img src={ke1} alt="" />
                            </div>
                            <div className="item-content">
                                <h3>Recyclable waste</h3>
                                <p>Recyclables are recyclable waste. Paper, cardboard, glass, plastic, metal and plastic packaging that can be reused by itself or materials can be recycled, such as newspapers, magazines, billboards and other clean paper related to these materials.</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="main-module-six" ref={(node) => this.sixElement = node}>
                    <div className="main-module-six-title">
                        <h2 className="last_h2">Waste classification guidance </h2>
                        <p className="last_p">Here is a guide to garbage classification</p>
                    </div>
                    <div className="main-module-six-container">
                        <div className="main-module-six-item one">
                            <div className="img-box">
                                <img src={chu3} alt="" />
                            </div>
                            <div className="content-box">
                                <h3>Kitchen waste guidance</h3>
                                <p>The wet garbage shall be drained and then put in.</p>
                                <p>Large bone, coconut shell and durian shell are not easy to be biodegraded, so they are not suitable for wet garbage, but can be put as dry garbage.</p>
                                <p>Pure liquid (such as milk) can be poured directly into the lower nozzle. Kitchen waste delivery guidance</p>
                                <p>The wet garbage shall be drained and then put in.</p>
                                <p>Large bone, coconut shell and durian shell are not easy to be biodegraded, so they are not suitable for wet garbage, but can be put as dry garbage.</p>
                                <div className="content-box-bottom">
                                    <div className="content-box-bottom_love">
                                        <img src={love} alt=""/>
                                        <span>114</span>
                                    </div>
                                    <div className="content-box-bottom_hot">
                                    <img src={hot} alt=""/>
                                        <span>116</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-module-six-item two">
                            <div className="img-box">
                                <img src={huishou} alt="" />
                            </div>
                            <div className="content-box">
                                <h3>Recyclable waste guidance</h3>
                                <p>For paper collection, please pay attention not to mix the contaminated paper items, avoid kneading, and unfold, press and stack them.</p>
                                <p>It is recommended to cut the milk box, juice box, yogurt box and other beverage packaging boxes, wash them and flatten them.</p>
                                <p>The product in the container shall be used up or poured out as much as possible, and put in after cleaning.</p>
                                <p>Glass items should be handled with care to avoid cutting and damage. It is better to put them in bags or containers.</p>
                                <p>For fabrics, please do not mix dirty fabrics.</p>
                     
                                <div className="content-box-bottom">
                                    <div className="content-box-bottom_love">
                                        <img src={love} alt=""/>
                                        <span>120</span>
                                    </div>
                                    <div className="content-box-bottom_hot">
                                    <img src={hot} alt=""/>
                                        <span>114</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-module-six-item three">
                            <div className="img-box">
                                <img src={harm} alt="" />
                            </div>
                            <div className="content-box">
                                <h3>Guidance on hazardous waste</h3>
                                <p>Please pack and fix the discarded fluorescent lamp when it is put into use to prevent the harmful mercury vapor from volatilizing to the environment due to the damage of the lamp.</p>
                                <p>In daily life, there are many kinds of batteries used. The secondary batteries produced at present have realized low mercury and mercury free, so they should be used as dry garbage / other garbage; the secondary batteries (commonly known as rechargeable batteries, including nickel cadmium, nickel hydrogen, lithium batteries and lead-acid storage batteries) and button batteries, in addition to the disposable batteries.</p>
                                <div className="content-box-bottom">
                                    <div className="content-box-bottom_love">
                                        <img src={love} alt=""/>
                                        <span>112</span>
                                    </div>
                                    <div className="content-box-bottom_hot">
                                    <img src={hot} alt=""/>
                                        <span>119</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-module-six-item four">
                            <div className="img-box">
                                <img src={other} alt="" />
                            </div>
                            <div className="content-box">
                                <h3>Other waste guidance</h3>
                                <p>The used napkins, diapers, etc. are stained with various stains and have no recycling value, so they should be treated as dry garbage.</p>
                                <p>Ordinary disposable batteries (alkaline batteries) basically do not contain heavy metals, so they should be used as dry garbage.</p>
                                <p>In daily life, articles that are complicated and difficult to separate and collect are recommended. Ask as a guide for dry garbage disposal or for Alipay garbage sorting guide. </p>
                                <p>Due to the expiration of the best use period, the chemical substances will become invalid or denatured, so the expired drugs and packaging materials.</p>
                                <div className="content-box-bottom">
                                    <div className="content-box-bottom_love">
                                        <img src={love} alt=""/>
                                        <span>111</span>
                                    </div>
                                    <div className="content-box-bottom_hot">
                                    <img src={hot} alt=""/>
                                        <span>117</span>
                                    </div>
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
