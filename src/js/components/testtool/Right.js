/**
 * Created by weimin on 16/5/30.
 */
import React from 'react';
import Action from '../../action/Action.js'
import store from '../../store/DataSave.js';

export default class Right extends React.Component {

    addImg(e, img) {
        let pageIndex = this.props.currentIndex;
        Action.selectItem({
            img: img,
            pageIndex: pageIndex
        });
    }

    componentDidMount() {
        store.on('change', () => this.forceUpdate());
    }

    componentWillUnmount() {
        store.removeAllListeners('change');
    }

    render() {
        let currentIndex = this.props.currentIndex;
        let pageData = store.getPageData(currentIndex);
        let leftData = store.getLeftData(currentIndex);
        let selectedIds = store.getSelectedIds(leftData);
        return (
            <div className='right-container clearfix'>
                <ul className='option-wrapper'>
                    {
                        pageData.imgs.map((img, index)=> {
                            let idStr = ',' + img.id + ',';
                            return (
                                <li key={'option'+index} className='option-item'>
                                    <div className={store.isInArray(idStr,selectedIds)?'add hide':'add'}
                                         onClick={this.addImg.bind(this,null,img)}>+
                                    </div>
                                    <img src={img.src}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

