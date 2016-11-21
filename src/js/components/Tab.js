import React from 'react';
import css from '../../css/tab.scss';


module.exports = React.createClass({
    getInitialState: function () {
        return {
            nowIndex: 0
        }
    },
    getClass: function (index) {
        return index === this.state.nowIndex ? 'selected tab-item' : 'tab-item';
    },
    getContent: function () {
        let index = this.state.nowIndex;
        return this.props.data[index].content;
    },
    render: function () {
        return (
            <div className='tab-wrapper'>
                <ul className='tab-item-wrapper'>
                    {
                        this.props.data.map((element, index)=> {
                            return (
                                <li key={'tab'+index} onClick={()=>{this.setState({nowIndex:index})}}
                                    className={this.getClass(index)}>{element.name}</li>
                            )
                        })
                    }
                </ul>
                <div className='tab-content'>
                    {
                        this.getContent()
                    }
                </div>
            </div>
        )
    }
})




