//引入系统模块

import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,useRouterHistory,Redirect} from 'react-router';
import {createHashHistory} from 'history';
import chooseData from './data/choosedata.js';


//引入自定义组件
import Choose from './components/testtool/Wrapper';
import Result from './components/testtool/Result.js';

class ChooseWrapper extends React.Component {
    render() {
        return (
            <Choose data={chooseData} {...this.props}/>
        )
    }
}
// queryKey 去掉路由后随机 _k 参数
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

//渲染
ReactDOM.render(
    (
        <Router history={appHistory}>
            <Redirect from='/' to='/test' query={{pageIndex:0}}/>
            <Route path='/test' component={ChooseWrapper}/>
            <Route path='/result' component={Result}/>
        </Router>
    ),
    document.getElementById('choose')
)
