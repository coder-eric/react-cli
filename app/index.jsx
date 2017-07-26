import React from 'react'
import ReactDom from 'react-dom'

import './static/css/common.less'

class Root extends React.Component {

    handleClick() {
        alert(123)
    }

    render() {
        return (
            <p onClick={this.handleClick.bind(this)}>hello world 111</p>
        )
    }
}

ReactDom.render(<Root/>,document.getElementById('root'))
