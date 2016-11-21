/**
 * Created by weimin on 16/5/30.
 */
import React from 'react';
import css from '../../../css/choose.scss';
import Left from './Left';
import Right from './Right';
import Bottom from './Bottom';
import Result from './Result';
import store from '../../store/DataSave.js';

export default class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        store.initAllData(props.data);
        store.initOpitions(props.data);
    }

    render() {
        let currentIndex = this.props.location.query.pageIndex;
        let lastIndex = store.getLastPageIndex();
        let opts = {
            currentIndex: currentIndex,
            lastIndex: lastIndex
        };

        return (
            <div className='choose-wrapper'>
                <Left {...opts}/>
                <Right {...opts}/>
                <Bottom {...opts}/>
            </div>
        )
    }
}


