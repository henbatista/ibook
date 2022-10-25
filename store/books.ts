import { Module, VuexModule } from 'vuex-module-decorators'

@Module({name: 'books', stateFactory: true, namespaced: true})
export default class Books extends VuexModule {
  book = ['livro 1', 'livro 2']
}