/**
 * Created by weimin on 16/5/25.
 */
import React from 'react';
import css from '../../css/slide.scss'

export default class Mainslide extends React.Component {
    constructor() {
        super();
        this.state = {
            nowIndex: 0
        }
    }

    responseChild(index) {
        this.setState({
            nowIndex: index
        })
    }

    getClass(index) {
        return this.state.nowIndex === index ? 'slide-item show' : 'slide-item';

    }

    render() {
        return (
            <div className='main-slide-wrapper'>
                <div className='main-slide clearfix'>
                    {
                        this.props.slides.map((item, index)=> {
                            return (
                                <a key={'slide'+index} href={item.url} className={this.getClass(index)}>
                                    <img src={item.src}/>
                                </a>
                            )
                        })
                    }
                </div>
                <Switch index={this.state.nowIndex} time={this.props.time}
                        tellParent={this.responseChild.bind(this)} slides={this.props.slides}/>
            </div>
        )
    }
}
class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    getClass(index) {
        return this.state.currentIndex === index ? 'nav-item active' : 'nav-item';

    }

    componentDidMount() {
        this.timer = setInterval(this.nextSlide.bind(this), this.props.time)

    }

    gotoSlide(e, index) {
        this.setState({
            currentIndex: index
        });
        this.props.tellParent(index);
    }

    prevSlide() {
        let index = this.state.currentIndex;
        let length = this.props.slides.length;
        index = (--index + length) % length;
        this.gotoSlide(null, index);
    }

    nextSlide() {
        let index = this.state.currentIndex;
        let length = this.props.slides.length;
        index = (++index + length) % length;
        this.gotoSlide(null, index);
    }

    render() {
        return (
            <div className='switch-wrapper'>
                <div className='switch-btn left' onClick={this.prevSlide.bind(this)}></div>
                <div className='switch-btn right' onClick={this.nextSlide.bind(this)}></div>
                <div className='nav-wrapper'>
                    {
                        this.props.slides.map((item, index)=> {
                            return (
                                <span key={'switch'+index} className={this.getClass(index)}
                                      onClick={this.gotoSlide.bind(this,null,index)}></span>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


