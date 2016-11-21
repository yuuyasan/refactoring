/**
 * @introduction  action
 * @authors       weimin
 * @date          16/7/6
 * @update        下午5:50
 */
import Dispatcher from '../dispatcher/Dispatcher.js';

export default {
    selectItem(data){
        Dispatcher.dispatch({
            action: 'SELECT_ITEM',
            data: data
        });
    },
    deleteItem(data){
        Dispatcher.dispatch({
            action: 'DELETE_ITEM',
            data: data
        });
    },
    saveInfo(data){
        Dispatcher.dispatch({
            action: 'SAVE_INFO',
            data: data
        });
    }
}