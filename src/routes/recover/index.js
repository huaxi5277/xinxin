import React, { Component } from 'react'
import axios from 'axios'
import {frist_second_get_msg,init_recover1_thing} from '../../utils/Regexp'
 class index extends Component {
     componentDidMount(){
    //    axios.get(frist_second_get_msg,{params:{
    //        type : 1,
    //        detail_type : 2
    //    }}).then((res)=>{
    //        console.log(res)
    //    })
    axios.get(init_recover1_thing)
    .then((res)=>{
        console.log(res)
    })
     }
    render() {
        return (
            <div>
                回收
            </div>
        )
    }
}
export default index