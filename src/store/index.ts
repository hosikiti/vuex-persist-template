import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { getModule } from 'vuex-module-decorators'
import AppStore from '@/store/app.store'

// VuexPersistの初期化
// 保持したいストアは手動でmodulesに登録する
const vuexLocal = new VuexPersistence<any>({
  storage: window.localStorage,
  modules: ['app']
})

Vue.use(Vuex)

const store = new Vuex.Store<any>({
  plugins: [vuexLocal.plugin],
  modules: { app: AppStore }
})

// グローバルにモジュール取得
export const appModule = getModule(AppStore, store)

export default store
