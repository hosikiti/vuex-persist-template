import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

interface AppState {
  name: string;
}

@Module({
  name: 'app',
  namespaced: true,
  stateFactory: true
})
export default class AppStore extends VuexModule implements AppState {
  name = ''

  @Mutation
  SET_NAME (name: string) {
    this.name = name
  }
}
