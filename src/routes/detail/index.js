import React, { Component } from 'react'
import axios from 'axios'
import { manage_select_all_order } from '../../utils/Regexp'
import { Table, Tag, Spin } from 'antd'
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

                if (item.apply_person.id == current_id) {
                    let temp = {
                        key: item.apply_person.id,
                        "姓名": item.apply_person.name,
                        images: [item.image.iaddress],
                        tags: item.orderStatus.o_name == "审核中" ? ['审核中'] : item.orderStatus.o_name == "已审核" ? ["已审核"] : item.orderStatus.o_name == "进行中" ? ['已审核'] : ['已完成'],
                        "物品": item.recycle.r_name,
                        "重量": item.weight.w_kilo
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
                        <Column
                            title="状态"
                            dataIndex="tags"
                            key="15"
                            render={tags => (
                                <span>
                                    {tags.map(tag => (
                                        <Tag color="blue" key={tag}>
                                            {tag}
                                        </Tag>
                                    ))}
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
