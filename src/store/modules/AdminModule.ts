import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { Actions } from "@/store/enums/StoreEnums";
import { Module, Action, VuexModule } from "vuex-module-decorators";

@Module
export default class AdminModule extends VuexModule {
  @Action
  [Actions.USER_LIST](params) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise<void>((resolve, reject) => {
        ApiService.query("admin/users", { params })
          .then(({ data }) => {
            resolve(data);
          })
          .catch(({ response }) => {
            reject(response.data);
          });
      });
    }
  }
}
