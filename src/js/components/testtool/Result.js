/**
 * Created by weimin on 16/6/2.
 */

import React from 'react';
import store from '../../store/DataSave.js';

export default class Result extends React.Component {

    render() {
        let allLeftData = store.getLeftData();
        return (
            <div className='result'>
                <table className="result-list">
                    <thead>
                    <tr>
                        <th colSpan="3" className="list-title">结果列表</th>
                    </tr>
                    <tr>
                        <th>词语</th>
                        <th>选择图片</th>
                        <th>选择理由</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        allLeftData.map((part, index)=> {
                            return (
                                <tr key={'part'+index} className="word-item">
                                    <td className="key-word">{part.title}</td>
                                    <td className="word-imgs">
                                        {
                                            part.items.map((item, index)=> {
                                                if (item.id !== '') {
                                                    return (
                                                        <img key={'img'+index} src={item.src}/>
                                                    )
                                                }
                                            })
                                        }
                                    </td>
                                    <td className="word-info">
                                        {
                                            part.items.map((item, index)=> {
                                                if (item.id !== '' && item.info != '') {
                                                    return (
                                                        <p key={'info'+index}>{item.info}</p>
                                                    )
                                                }
                                            })
                                        }
                                    </td>
                                </tr>
                            )

                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
