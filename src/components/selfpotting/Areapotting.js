import React, { Component } from 'react'
import {Input } from 'antd'
import style from './index.scss'
const { TextArea } = Input;
class Areapotting extends Component {
    render() {
        return (
            
                <TextArea placeholder="请输入内容" rows={6} allowClear/>
           
        )
    }
}
export default Areapotting
