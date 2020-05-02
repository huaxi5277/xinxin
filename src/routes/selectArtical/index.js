import React, { Component } from 'react'
import { manage_select_artical } from '../../utils/Regexp'
import axios from 'axios'
import { Table, Tag, Spin, Affix, Row, Col, Button, Input, Select, Message } from 'antd';
import style from '../change_avatar/index.scss'
import Add from '../../assets/增加.png'
import {manage_insert_artical,manage_delete_artical} from '../../utils/Regexp'
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
            type : 0
        }
    }

    componentDidMount() {
        let arr = []
        this.setState({
            is_loading: true
        })
        axios.get(manage_select_artical).then((res) => {
            res.data.data.list.forEach((item, index) => {
                console.log(item)
                let temp = {
                    key: item.id,
                    "名称": item.a_name,
                    "说明": item.stardard.s_detail,
                    "类别": item.stardard.s_name,
                    images: [item.stardard.s_image.iaddress],
                }
                arr.push(temp)
            })
            this.setState({
                init_arr: arr,
                is_loading: false,
                isTables: true
            })
        })
    }
    add() {
        this.setState({
            status: !this.state.status
        })
    }
    handleChange(value){
      this.setState({
          type : value
      })
    }
    delete_info(text){
        axios.get(manage_delete_artical,{params : {
            id : text.key
        }}).then((res)=>{
            console.log(res.data.code)
            if(res.data.code == 200){
                Message.success('删除成功')
                window.location.reload()
            }
            else{
                Message.error('失败')
            }
        })

    }
    submit(){
        let val = this._input.state.value
        if(val == "" || this.state.type == 0){
            Message.error("有错误")
            return
        }
        axios(manage_insert_artical,{
            params:{
                name : val,
                type : this.state.type
            }
        }).then((res)=>{
           if(res.data.code == 200){
               Message.success("插入成功")
               window.location.reload()
           }
        })
    }
    render() {
        return (
            <div className="select_artical_wrap">
                {/* <div className="insert" onClick={()=>{this.add()}}>
                    <img src={Add} alt="" />
                </div> */}
                <Row>
                    <Col span={this.state.status ? 24 : 18} className=""  >
                        <div className="loading" style={{ display: this.state.is_loading == true ? "flex" : "none" }}>
                            <Spin tip="Loading..." size="large">
                            </Spin>
                        </div>
                        <div className="table" style={{ display: this.state.isTables == true ? "block" : "none" }} >

                            <Table dataSource={this.state.init_arr} >
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
                                  <Column
                            title="Action"
                            key="action"
                            render={(text, record) => {
                                return (
                                    <span>
                                        <a onClick={()=>{this.delete_info(text)}}>Delete</a>
                                    </span>
                                )
                            }}
                        />
                            </Table>
                        </div>
                    </Col>
                    <Col span={this.state.status ? 0 : 6} className="">
                        <div className="insert_wrap">
                          
                            <Input className="input_wrap" ref={(node)=>{this._input = node}}></Input>
                            <Select defaultValue="请选择" onChange={(value) => { this.handleChange(value) }} className="select_wrap">
                                <Option value="1">可回收物</Option>
                                <Option value="2">有害垃圾</Option>
                                <Option value="3">厨余垃圾</Option>
                                <Option value="4">其他垃圾</Option>
                            </Select>
                           
                           

                            <Button type="primary" className="my_button" onClick={()=>{this.submit()}}>提交</Button>
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
