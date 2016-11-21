/**
 * Created by weimin on 16/6/2.
 */
//引入系统模块

import React from 'react';
import ReactDOM from 'react-dom';

//引入自定义组件

import Slide from './components/Slide'


//渲染

ReactDOM.render(
    <Slide slides={slides} time='5000' />,
    document.getElementById('slide')
)