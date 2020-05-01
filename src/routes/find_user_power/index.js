import React, { Component } from 'react'
import { Select, Button, Table, Tag, Spin, Alert ,Message } from 'antd';
import { user_profile_access ,will_user_black_house } from '../../utils/Regexp'
import style from '../change_avatar/index.scss'
import axios from 'axios'
const { Option } = Select;
const { Column, ColumnGroup } = Table;




class index extends Component {

    constructor() {
        super()
        this.state = {
            use_profile_arr: [],
            last_use_profile_arr: [],
            page: 1,
            is_loading : false,
            msg : ""
        }
    }

    delete_info(text){
        axios.get(will_user_black_house,{params : {
            id : text.id
        }}).then((res)=>{
            console.log(res.data.code)
            if(res.data.code == 200){
             this.handleChange(this.state.msg)
              
            }
            else{
                Message.error('失败')
            }
        })

    }



    handleChange(value) {
        let timeId = null;
        this.setState({
            use_profile_arr: [],
            last_use_profile_arr: [],
            page: 1,
            is_loading : true,
            msg : value
        })
        timeId = setInterval(() => {
            axios.get(user_profile_access, {
                params: {
                    page: this.state.page,
                    access: value
                }
            }).then((response) => {
                let arr = []
                if (response.data.code == 500) {
                    clearInterval(timeId)

                    this.state.use_profile_arr.forEach((item, index) => {
                        let temp = {
                            id : item.id,
                            key: index + 1,
                            username: item.name,
                            real_name: item.realName,
                            address: item.address,
                            phone: item.phone,
                            tags: item.access == 1 ? ['普通人员'] : ['工作人员']
                        }

                        arr.push(temp)
                    })

                   console.log(arr)
                    this.setState({
                        page: 0,
                        use_profile_arr: [],
                        last_use_profile_arr: arr,
                        is_loading : false
                    })
                    return
                }
                this.setState({
                    use_profile_arr: [...this.state.use_profile_arr, ...response.data.data.list],
                    page: this.state.page + 1,
                })
            })
        }, 500);

    }



    render() {
        return (
            <div className="find_user_profile">
                {/* 用户权限 */}
                <div className="user_profile">
                    <Select defaultValue="请选择" onChange={(value) => { this.handleChange(value) }}>
                        <Option value="1">普通人员</Option>
                        <Option value="2">工作人员</Option>
                    </Select>
                </div>
                <div className="loading" style={{display : this.state.is_loading  == true ? "flex" : "none"}}>
                    <Spin tip="Loading..." size="large">
                    </Spin>
                </div>
                <div className="table" style={{display : this.state.last_use_profile_arr.length > 0  ? "block" : "none"}}>
                    <Table dataSource={this.state.last_use_profile_arr}>
                        <ColumnGroup title="Name">
                            <Column title="Username" dataIndex="username" key="username" />
                            <Column title="real_name" dataIndex="real_name" key="real_name" />
                        </ColumnGroup>
                        <Column title="phone" dataIndex="phone" key="phone" />
                        <Column title="address" dataIndex="address" key="address" />
                        <Column
                            title="Tags"
                            dataIndex="tags"
                            key="tags"
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
                    </Table>
                </div>

            </div>
        )
    }
}
export default index

