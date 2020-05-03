import React, { Component } from 'react'
import axios from 'axios'
import { Table, Tag, Spin, Affix, Row, Col, Button, Input, Select, Message } from 'antd';
import style from '../change_avatar/index.scss'
import Add from '../../assets/增加.png'
import { manage_select_recycle, manage_insert_recycle, manage_delete_recycle ,init_recover1_thing ,init_recover2_thing } from '../../utils/Regexp'
const { Column, ColumnGroup } = Table;
const { Option } = Select;
class index extends Component {

    constructor() {
        super()
        this.state = {
            init_arr: [],
            is_loading: false,
            isTables: false,
            status: true,
            type: 0,
            detailType : 0,
            init_list_first : [],
            init_list_second : []

        }
    }

    componentDidMount() {
        let arr = [];
        let init_page = 1;
        let timeId = null;
        this.setState({
            is_loading: true
        })
        timeId = setInterval(() => {
            axios.get(manage_select_recycle, {
                params: {
                    page: init_page
                }
            }).then((res) => {
                if (res.data.code == 500) {
                    clearInterval(timeId)
                    this.setState({
                        init_arr: arr,
                        is_loading: false,
                        isTables: true
                    })
                    return
                }
                res.data.data.list.forEach((item, index) => {
                    console.log(item)
                    let temp = {
                        key: item.id,
                        "分类": item.r_detail.d_name,
                        "类别": item.r_moreDetail.m_name,
                        "物品": item.r_name,
                        images: [item.r_image.iaddress],
                    }
                    arr.push(temp)
                })
                init_page++;
            })
        }, 500)
        axios.get(init_recover1_thing)
            .then((res) => {
                this.setState({
                    init_list_first: res.data.data
                })
            })
        axios.get(init_recover2_thing).then((res) => {
            this.setState({
                init_list_second: res.data.data
            })
        })
    }
    add() {
        this.setState({
            status: !this.state.status
        })
    }
    handleChange1(value) {
        this.setState({
            type: value
        })
    }
    handleChange2(value) {
        this.setState({
            detailType: value
        })
    }
    delete_info(text) {
        axios.get(manage_delete_recycle, {
            params: {
                id: text.key
            }
        }).then((res) => {
            console.log(res.data.code)
            if (res.data.code == 200) {
                Message.success('删除成功')
                window.location.reload()
            }
            else {
                Message.error('失败')
            }
        })

    }
    submit() {
        console.log(this.state.type)
        console.log(this.state.detailType)
        let val = this._input.state.value
        if (val == "" || this.state.type == 0) {
            Message.error("有错误")
            return
        }
        axios(manage_insert_recycle, {
            params: {
               type : this.state.type,
               detailType : this.state.detailType,
               name : val
            }
        }).then((res) => {
            console.log(res)
            if (res.data.code == 200) {
                Message.success("插入成功")
                window.location.reload()
            }
        })
    }
    render() {
        return (
            <div className="select_artical_wrap">
                <Row>
                    <Col span={this.state.status ? 24 : 18} className=""  >
                        <div className="loading" style={{ display: this.state.is_loading == true ? "flex" : "none" }}>
                            <Spin tip="Loading..." size="large">
                            </Spin>
                        </div>
                        <div className="table" style={{ display: this.state.isTables == true ? "block" : "none" }} >

                            <Table dataSource={this.state.init_arr} >
                                <Column title="分类" dataIndex="分类" key="10" />
                                <Column title="类别" dataIndex="类别" key="11" />
                                <Column title="物品" dataIndex="物品" key="12" />
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
                                <Column
                                    title="Action"
                                    key="action"
                                    render={(text, record) => {
                                        return (
                                            <span>
                                                <a onClick={() => { this.delete_info(text) }}>Delete</a>
                                            </span>
                                        )
                                    }}
                                />
                            </Table>
                        </div>
                    </Col>
                    <Col span={this.state.status ? 0 : 6} className="">
                        <div className="insert_wrap">

                            <Select defaultValue="请选择" onChange={(value) => { this.handleChange1(value) }} className="select_wrap">
                                {
                                    this.state.init_list_first.map((item,index)=>{
                                        return (
                                            <Option value={index+1} key={index}>{item.d_name}</Option>  
                                        )
                                    })
                                }
                            </Select>

                            <Select defaultValue="请选择" onChange={(value) => { this.handleChange2(value) }} className="select_wrap">
                                {
                                    this.state.init_list_second.map((item,index)=>{
                                        // 分成 三段 渲染
                                       
                                        if(this.state.type == 1){
                                            if(index > 5){
                                                return 
                                            }
                                            else {
                                                return (
                                                    <Option value={index+1} key={index}>{item.m_name}</Option>   
                                                )
                                            }
                                        }
                                        else if(this.state.type ==2) {
                                            if(index <6 || index > 18){
                                                return 
                                            }
                                            else {
                                                return (
                                                    <Option value={index+1} key={index}>{item.m_name}</Option>   
                                                )
                                            }
                                        }
                                        else if(this.state.type ==3) {
                                            if(index < 19){
                                                return 
                                            }
                                            else {
                                                return (
                                                    <Option value={index+1} key={index}>{item.m_name}</Option>   
                                                )
                                            }
                                        }
                                        else {
                                            return 
                                        }
                                    })
                                }
                            </Select>
                            <Input className="input_wrap" ref={(node)=>{this._input = node}} placeholder="请输入物品"></Input>


                            <Button type="primary" className="my_button" onClick={() => { this.submit() }}>提交</Button>
                        </div>
                    </Col>
                </Row>
                <Affix style={{ position: 'fixed', top: '640px', right: 50 }} onChange={affixed => console.log()} onClick={() => this.add()}>
                    <Button>ADD</Button>
                </Affix>

            </div>
        )
    }
}

export default index
