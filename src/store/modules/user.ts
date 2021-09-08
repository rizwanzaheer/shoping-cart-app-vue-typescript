import store from '@/store';
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
export interface IUserState {
  firstName: string;
  lastName: string;
  email: string;
}
@Module({ dynamic: true, store, namespaced: true, name: 'user' })
class User extends VuexModule implements IUserState {
  public firstName = 'Rizwan';
  public lastName = 'Zaheer';
  public email = 'test@gmail.com';

  @Mutation
  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }
  @Mutation
  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  @Mutation
  public setEmail(email: string): void {
    this.email = email;
  }

  @Action
  public updateName(newName: string): void {
    this.context.commit('setName', newName);
  }
}

export const UserModule = getModule(User);
