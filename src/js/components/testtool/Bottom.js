/**
 * Created by weimin on 16/6/2.
 */
import React from 'react';
import {Link} from 'react-router';

export default class Bottom extends React.Component {

    render() {
        let currentIndex = parseInt(this.props.currentIndex);
        let lastIndex = this.props.lastIndex;
        return (
            <div className="page-turning">
                <Link className={currentIndex===0?'prev hide':'prev'}
                      to={{pathname:'/test',query:{pageIndex:currentIndex-1}}}>上一步</Link>
                <Link className={currentIndex===lastIndex?'next hide':'next'}
                      to={{pathname:'/test',query:{pageIndex:currentIndex+1}}}>下一步</Link>
                <Link className={currentIndex===lastIndex?'submit':'submit hide'} to='/result'>完成</Link>
            </div>
        )
    }
}
