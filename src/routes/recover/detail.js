import React, { Component } from 'react'
import axios from 'axios'
import { Table, Tag, Spin, Modal, Select, Message } from 'antd';
import { frist_second_get_msg, current_user_update_msg } from '../../utils/Regexp'
import style from './index.scss'
const { Column, ColumnGroup } = Table;
const { Option } = Select;

class detail extends Component {


    constructor() {
        super()
        this.state = {
            init_arr: [],
            is_loading: false,
            isTables: false,
            visible: false,
            current_id: "",
            data: "",
            weightId: "",
            articleId: "",
            email: ""
        }
    }
    handleOk = e => {
        const address = localStorage.getItem("address")
        if (address == "") {
            Message.error("请先实名认证")
            this.props.history.push("/user_msg/celebrity")
            return
        }
        else {
            axios.get(current_user_update_msg, {
                params: {
                    id: this.state.current_id,
                    weightId: this.state.weightId,
                    date: this.state.data,
                    articleId: this.state.articleId
                }
            }).then((res) => {
                console.log(res)
                if (res.data.code == 500) {
                    Message.error("参数错误,请重新选择")
                    this.setState({
                        visible: false,
                        articleId: ""
                    });
                    return
                }

                if (res.data.code == 200 && res.data.msg == "订单已创建") {
                    Message.success("订单创建成功")
                    this.setState({
                        visible: false,
                        articleId: ""
                    });
                    return
                }


            })
        }

    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    componentDidMount() {
        const current_id = localStorage.getItem("current_id")
        const email = localStorage.getItem("email")
        let arr = this.props.location.pathname.split('/')
        this.setState({
            is_loading: true,
            current_id: current_id,
            email: email
        })
        axios.get(frist_second_get_msg, {
            params: {
                type: arr[arr.length - 2],
                detail_type: arr[arr.length - 1]
            }
        }).then((res) => {
            console.log(res)
            let arr = []
            res.data.data.forEach((item, index) => {
                let temp = {
                    key: item.id,
                    "分类": item.r_detail.d_name,
                    "类别": item.r_moreDetail.m_name,
                    "物品": item.r_name,
                    images: [item.r_image.iaddress]
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
    recycle(text) {
        this.setState({
            visible: true,
            articleId: text.key
        })

    }
    handleChange1(value) {
        this.setState({
            weightId: value
        })
    }
    handleChange2(value) {
        this.setState({
            data: value
        })
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        }
    }
    render() {

        return (
            <div className="detail_wrap">
                <div className="loading" style={{ display: this.state.is_loading == true ? "flex" : "none" }}>
                    <Spin tip="Loading..." size="large">
                    </Spin>
                </div>
                <div className="table" style={{ display: this.state.isTables == true ? "block" : "none" }} >
                    <Table dataSource={this.state.init_arr} >
                        <Column title="分类" dataIndex="分类" key="分类" />
                        <Column title="类别" dataIndex="类别" key="类别" />
                        <Column title="物品" dataIndex="物品" key="物品" />
                        <Column
                            title="图片"
                            dataIndex="images"
                            key="images"
                            align="center"
                            render={images => (
                                <span>
                                    {images.map((tag, index) => (
                                        <img src={tag} alt="" key={index} style={{ width: "100px" }} />
                                    ))}
                                </span>
                            )}
                        />
                        <div></div>
                        <Column
                            title="回收"
                            key="action"
                            render={(text, record) => {
                                return (
                                    <span style={{ display: this.state.email == 1 ? "block" : "none" }}>
                                        <a onClick={() => { this.recycle(text) }}>回收</a>
                                    </span>
                                )
                            }}
                        />
                    </Table>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <Select defaultValue="请选择重量" onChange={(value) => { this.handleChange1(value) }} className="select_wrap" style={{ width: "100%", marginBottom: "50px" }}>
                            <Option value="1">5kg-10kg</Option>
                            <Option value="2">10-15kg</Option>
                            <Option value="3">15kg以上</Option>
                            <Option value="4">5kg一下</Option>
                        </Select>
                        <Select defaultValue="请选择上门回收日期" onChange={(value) => { this.handleChange2(value) }} className="select_wrap" className="select_wrap" style={{ width: "100%", marginBottom: "50px" }}>
                            <Option value="1">推迟一天取件</Option>
                            <Option value="2">推迟两天取件</Option>
                        </Select>

                    </Modal>
                </div>

            </div>
        )
    }
}

export default detail
