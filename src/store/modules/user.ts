import { VuexModule, Module, getModule, MutationAction } from 'vuex-module-decorators'
import store from '@/store'
import { User, Profile, UserSubmit } from '../models'
import { loginUser } from '../api';


@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true,
})
class UsersModule extends VuexModule {
  user: User | null = null 
  profile?: Profile | null = null

  @MutationAction({ mutate: ['user']})
  async login(UserSubmit: UserSubmit) {
    const user = await loginUser(UserSubmit)
    return { user }
  }
}

export default getModule(UsersModule)