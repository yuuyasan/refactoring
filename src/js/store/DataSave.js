/**
 * @introduction  DataSave
 * @authors       weimin
 * @date          16/6/23
 * @update        上午10:12
 */
import React from 'react';
import Dispatcher from '../dispatcher/Dispatcher.js'
import {EventEmitter} from 'events';

/**
 * EventEmitter 提供了一些事件处理的方法
 * 比如:
 * `emit` 触发事件
 * `on` 订阅事件
 */

let options = {
    chooseNum: 3,
    data: []
}
let placeholderImg = 'src/img/placeholder.png';
let allData;

class DataSave extends EventEmitter {

    initAllData(pages) {
        allData = pages;
    }

    initOpitions(pages) {
        let num = options.chooseNum;
        options.data = pages.map(page=> {
                let title = page.title;
                let items = [];
                for (let i = 0; i < num; i++) {
                    items.push({
                        id: '',
                        src: placeholderImg,
                        info: ''
                    })
                }
                return {
                    title: title,
                    items: items
                }
            }
        )
    }

    isInArray(id, string) {
        return string.indexOf(id) === -1 ? false : true;
    }

    getSelectedIds(leftData) {
        let array = leftData.items.map((item)=> {
            return item.id
        })
        array = ',' + array.join(',') + ',';
        return array;
    }

    getLeftData(pageIndex) {
        if (pageIndex === undefined) {
            return options.data;
        }
        return options.data[pageIndex];
    }

    getPageData(pageIndex) {
        if (pageIndex === undefined) {
            return alldata;
        }
        return allData[pageIndex];
    }


    getLastPageIndex() {
        return allData.length - 1;
    }

    updateItem(id, src, info) {
        return {
            id: id,
            src: src,
            info: info
        }
    }

    selectItem(pageIndex, img) {
        let items = options.data[pageIndex].items;
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === '') {
                items[i] = this.updateItem(img.id, img.src);
                break;
            }
        }
        this.emit('change');
    }

    deleteItem(pageIndex, itemIndex) {
        let items = options.data[pageIndex].items;
        items[itemIndex] = this.updateItem('',placeholderImg,'');
        this.emit('change');
    }

    saveInfo(pageIndex, itemIndex, value) {
        let items = options.data[pageIndex].items;
        if (items[itemIndex].id !== '') {
            items[itemIndex].info = value;
        }
    }

}
let store = new DataSave();
Dispatcher.register((e) => {
    // 查找表，代替switchcase
    let actions = {
        SELECT_ITEM() {
            store.selectItem(e.data.pageIndex, e.data.img)
        },
        DELETE_ITEM(){
            store.deleteItem(e.data.pageIndex, e.data.itemIndex);
        },
        SAVE_INFO(){
            store.saveInfo(e.data.pageIndex, e.data.itemIndex, e.data.value)
        }
    };

    actions[e.action]();
});
export default store;