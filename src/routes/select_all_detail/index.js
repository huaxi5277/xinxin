import React, { Component } from 'react'
import axios from 'axios'
import { manage_select_all_order ,manage_check_order ,manage_delete_order } from '../../utils/Regexp'
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
        axios.get(manage_select_all_order).then((res) => {
            res.data.data.forEach((item, index) => {
                console.log(item)
                let temp = {
                    key: item.apply_person.id,        // 申请人
                    orderid : item.id,               // 订单id
                    "姓名": item.apply_person.name,
                    images: [item.image.iaddress],
                    tags: item.orderStatus.o_name == "审核中" ? ['审核中'] : item.orderStatus.o_name == "已审核" ? ["已审核"] : item.orderStatus.o_name == "进行中" ? ['已审核'] : ['已完成'],
                    "物品": item.recycle.r_name,
                    "重量": item.weight.w_kilo
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
    delete_info(text){
        
        axios(manage_delete_order,{
            params : {
                orderId : text.orderid
            }
        }).then((res)=>{
           window.location.reload()
        })

    }


    pass_info(text){
      axios(manage_check_order,{
          params : {
            id : text.key,
            orderId : text.orderid
          }
      }).then((res)=>{
          console.log(res)
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
                                    {tags.map(tag => {
                                        let color = ""
                                        if(tag == "审核中" ){
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
                                        return(
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
                                        <a onClick={() => { this.pass_info(text) }}>Pass</a> &nbsp; &nbsp; &nbsp;
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