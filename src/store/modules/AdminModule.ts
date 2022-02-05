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
            data.success ? resolve(data.data) : reject(data);
          })
          .catch(({ response }) => {
            reject(response.data);
          });
      });
    }
  }

  @Action
  [Actions.NEW_USER]() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise<void>((resolve, reject) => {
        ApiService.get("admin/users/new")
          .then(({ data }) => {
            data.success ? resolve(data.data) : reject(data);
          })
          .catch(({ response }) => {
            reject(response.data);
          });
      });
    }
  }

  @Action
  [Actions.CREATE_USER](payload) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise<void>((resolve, reject) => {
        ApiService.post("admin/users", payload)
          .then(({ data }) => {
            data.success ? resolve(data.data) : reject(data);
          })
          .catch(({ response }) => {
            reject(response.data);
          });
      });
    }
  }

  @Action
  [Actions.DELETE_USER](userId) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise<void>((resolve, reject) => {
        ApiService.delete(`admin/users/${userId}`)
          .then(({ data }) => {
            data.success ? resolve(data.data) : reject(data);
          })
          .catch(({ response }) => {
            reject(response.data);
          });
      });
    }
  }

  @Action
  [Actions.SERVER_LIST](params) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise<void>((resolve, reject) => {
        ApiService.query("admin/servers", { params })
          .then(({ data }) => {
            resolve(data);
          })
          .catch(({ response }) => {
            reject(response.data);
          });
      });
    }
  }
  @Action
  [Actions.PLAN_LIST]() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise<void>((resolve, reject) => {
        ApiService.get("admin/plans")
          .then(({ data }) => {
            data.success ? resolve(data.data) : reject(data);
          })
          .catch(({ response }) => {
            reject(response.data);
          });
      });
    }
  }

  @Action
  [Actions.CREATE_PLAN](payload) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise<void>((resolve, reject) => {
        ApiService.post("admin/plans", payload)
          .then(({ data }) => {
            data.success ? resolve(data.data) : reject(data);
          })
          .catch(({ response }) => {
            reject(response.data);
          });
      });
    }
  }

  @Action
  [Actions.DELETE_PLAN](planId) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise<void>((resolve, reject) => {
        ApiService.delete(`admin/plans/${planId}`)
          .then(({ data }) => {
            data.success ? resolve(data.data) : reject(data);
          })
          .catch(({ response }) => {
            reject(response.data);
          });
      });
    }
  }
}
