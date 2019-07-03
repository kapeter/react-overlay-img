import React from 'react'
import ReactDom from 'react-dom'
import OverlayMask from '../lib'

const imgUrl =  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562151099350&di=d2b9c75c979b73bf341999e792a9b31a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F28%2F20160928030243_2B4PY.thumb.700_0.jpeg";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <div style={{margin: 20,float: "left"}}>
                    <OverlayMask width={300} height={300} direction="left">
                        <img src={imgUrl} style={{width: "100%"}} />
                    </OverlayMask> 
                </div>
                <div style={{margin: 20,float: "left"}}>
                    <OverlayMask width={300} height={300} direction="right">
                        <img src={imgUrl} style={{width: "100%"}} />
                    </OverlayMask> 
                </div>      
                <div style={{margin: 20,float: "left"}}>
                    <OverlayMask width={300} height={300} direction="bottom">
                        <img src={imgUrl} style={{width: "100%"}} />
                    </OverlayMask> 
                </div>
                <div style={{margin: 20,float: "left"}}>
                    <OverlayMask width={300} height={300} direction="top">
                        <img src={imgUrl} style={{width: "100%"}} />
                    </OverlayMask> 
                </div>           
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById("app")
)

