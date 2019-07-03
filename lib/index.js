import React from 'react'
import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types';
import './index.css'

class OverlayMask extends React.Component{
    render() {
        let { maskColor, direction, children, height, width } = this.props;

        if (!['left', 'right', 'top', 'bottom'].includes(direction)) {
            direction = 'left';
        }

        return (
            <div className="overlay-mask" style={{ height, width }}>
                <LazyLoad {...this.props}>
                    <React.Fragment>
                        <div 
                            className="mask-con" 
                            style={{
                                backgroundColor: maskColor,
                                animationName: `overLay-mask_${direction}`
                            }}
                        ></div>
                        <div className="content">
                            { children }
                        </div>
                    </React.Fragment>
                </LazyLoad>
            </div>
        )    
    }
}

// 默认props
OverlayMask.defaultProps = {
    width: 200,
    height: 200,
    maskColor: "#4dc6d2",
    direction: 'left'
}

// props类型检查
OverlayMask.propTypes = {
    height: PropTypes.number,
    maskColor: PropTypes.string
}

export default OverlayMask