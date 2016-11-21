/**
 * Created by weimin on 16/5/30.
 */
import React from 'react';
import Action from '../../action/Action.js'
import store from '../../store/DataSave.js';

export default class Left extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        store.on('change', () => this.forceUpdate());
    }

    componentWillUnmount() {
        store.removeAllListeners('change');
    }

    deleteItem(e, itemIndex) {
        let pageIndex = this.props.currentIndex;
        Action.deleteItem({
            pageIndex: pageIndex,
            itemIndex: itemIndex
        })
    }

    //存储选择理由
    saveInfo(itemIndex, value) {
        let pageIndex = this.props.currentIndex;
        Action.saveInfo({
            pageIndex: pageIndex,
            itemIndex: itemIndex,
            value: value
        })
    }


    render() {
        let currentIndex = this.props.currentIndex;
        let pageData = store.getPageData(currentIndex);
        let leftData = store.getLeftData(currentIndex);
        let placeholderImg = 'src/img/placeholder.png';

        return (
            <div className="left-container">
                <p className="tip">
                    右侧是一些描述“{pageData.title}”的图片，请您选出三张最能代表“{pageData.title}”的图片（从内容、色彩、氛围等不同角度考量），并陈述理由
                </p>

                <h2 className="head-title">{pageData.title}</h2>
                <ul className="selected">
                    {leftData.items.map((item, index)=> {
                        return (
                            <li key={'select-item'+index} className="selected-item">
                                <div className="img-wrapper">
                                    <div className={item.src !== placeholderImg ?'delete':'hide'}
                                         onClick={this.deleteItem.bind(this,null,index)}>×
                                    </div>
                                    <img src={item.src}/>
                                </div>
                                <textarea className="selected-info" placeholder='可填写选择理由' value={item.info}
                                          onChange={(e)=>{let val=e.target.value;this.saveInfo(index,val);}}></textarea>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}

