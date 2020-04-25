import React, { Component } from 'react'
import {Input} from 'antd'
 class inputpotting extends Component {
    render() {
        return (
            <div>
                <Input defaultValue={this.props.title} disabled></Input>
            </div>
        )
    }
}
export default inputpotting
