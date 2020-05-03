import React, { Component } from 'react'
import axios from 'axios'
import { manage_select_all_order, manage_delete_order } from '../../utils/Regexp'
import { Table, Tag, Spin, Message } from 'antd'
import style from '../change_avatar/index.scss'
const { Column, ColumnGroup } = Table;
class index extends Component {
    constructor() {
        super()
        this.state = {
            init_arr: [],
            is_loading: false,
            isTables: false,
        }
    }
    componentDidMount() {
        let arr = []
        this.setState({
            is_loading: true
        })
        let current_id = localStorage.getItem("current_id")
        axios.get(manage_select_all_order).then((res) => {
            console.log(res)
            res.data.data.forEach((item, index) => {

                if (item.apply_person.id == current_id && item.apply_person.address != "") {
                    console.log(item)
                    let temp = {

                        key: item.id,
                        "姓名": item.apply_person.name,
                        images: [item.image.iaddress],
                        tags: item.orderStatus.o_name == "审核中" ? ['审核中'] : item.orderStatus.o_name == "已审核" ? ["已审核"] : item.orderStatus.o_name == "进行中" ? ['进行中'] : ['已完成'],
                        "物品": item.recycle.r_name,
                        "重量": item.weight.w_kilo,
                        "地址": item.apply_person.address

                    }
                    arr.push(temp)
                }

            })
            this.setState({
                init_arr: arr,
                is_loading: false,
                isTables: true
            })
            console.log(this.state.init_arr)
        })
    }

    delete_info(text) {
            axios.get(manage_delete_order, {
                params: {
                    orderId: text.key
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
    render() {
        return (
            <div className="detail_box">
                <div className="loading" style={{ display: this.state.is_loading == true ? "flex" : "none" }}>
                    <Spin tip="Loading..." size="large">
                    </Spin>
                </div>
                <div className="table" style={{ display: this.state.isTables == true ? "block" : "none" }} >
                    <Table dataSource={this.state.init_arr} >
                        <Column title="姓名" dataIndex="姓名" key="10" />
                        <Column title="物品" dataIndex="物品" key="11" />
                        <Column title="重量" dataIndex="重量" key="12" />
                        <Column title="地址" dataIndex="地址" key="13" />
                        <Column
                            title="状态"
                            dataIndex="tags"
                            key="15"
                            render={tags => (
                                <span>
                                    {tags.map(tag => {
                                        let color = ""
                                        if (tag == "审核中") {
                                            color = "red"
                                        }
                                        else if (tag == "已完成") {
                                            color = "grey"
                                        }
                                        else if (tag == "进行中") {
                                            color = "green"
                                        }
                                        else {
                                            color = "blue"
                                        }
                                        return (
                                            <Tag color={color} key={tag}>
                                                {tag}
                                            </Tag>
                                        )
                                    })}
                                </span>
                            )}
                        />
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
            </div>
        )
    }
}

export default index
