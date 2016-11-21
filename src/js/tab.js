/**
 * Created by weimin on 16/6/2.
 */
//引入系统模块

import React from 'react';
import ReactDOM from 'react-dom';

//引入自定义组件

import Tab from './components/Tab';


//渲染

ReactDOM.render(
    <Tab data={tab} />,
    document.getElementById('tab')
)