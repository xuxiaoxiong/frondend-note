// menuStore.js

import { defineStore, acceptHMRUpdate } from "pinia";
import {
  sessionStorageGetItem,
  sessionStorageSetItem,
  isSessionStorageGetItem
} from "@/utils/storage.js";
import { isEmpty } from "lodash";

export const useOptionsStore = defineStore({
  id: "options",
  state: () => ({}),
  getters: {},
  actions: {
    setOptions(name) {
      if (!isSessionStorageGetItem(name)) {
        // 延时器模拟接口
        new Promise(resolve => {
          setTimeout(() => {
            resolve({
              code: 200,
              data: [
                {
                  label: "男",
                  value: "1"
                },
                {
                  label: "女",
                  value: "2"
                }
              ]
            });
          }, 5000);
        }).then(data => {
          this[name] = data.data;
          sessionStorageSetItem(name, data.data);
          // return data.data;
        });
      } else {
        this[name] = sessionStorageGetItem(name);
        // return sessionStorageGetItem(name);
      }
    },
    getOptions(name) {
      if (isEmpty(this.$state)) {
        const data = this.setOptions(name);
        return data;
      } else if (this[name]) {
        return this[name];
      }
      return [];
    }
  }
});

//Pinia的热更新
/**
 * acceptHMRUpdate
 * 参数1：你需要热更新的仓库
 * 参数2： 热更新
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useOptionsStore, import.meta.hot));
}
