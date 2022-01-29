<template>
  <!--begin::Dashboard-->
  <div class="row gy-5 gx-xl-8">
    <div class="col-xxl-12">
      <div class="card card-xxl-stretch mb-5 mb-xl-8">
        <!--begin::Header-->
        <div class="card-header border-0 pt-5">
          <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder fs-3 mb-1">Users</span>

            <span class="text-muted mt-1 fw-bold fs-7">Over 500 users</span>
          </h3>

          <div
            class="card-toolbar"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-trigger="hover"
            title="Click to add a user"
          >
            <a
              href="#"
              class="btn btn-sm btn-light-primary"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_invite_friends"
            >
              <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
              </span>
              New User
            </a>
          </div>
        </div>
        <!--end::Header-->

        <!--begin::Body-->
        <div class="card-body py-3">
          <!--begin::Table container-->
          <div class="table-responsive">
            <!--begin::Table-->
            <table
              class="
                table table-row-dashed table-row-gray-300
                align-middle
                gs-0
                gy-4
              "
            >
              <!--begin::Table head-->
              <thead>
                <tr class="fw-bolder text-muted">
                  <th class="w-25px">
                    <div
                      class="
                        form-check
                        form-check-sm
                        form-check-custom
                        form-check-solid
                      "
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="1"
                      />
                    </div>
                  </th>
                  <th class="min-w-150px">Name</th>
                  <th class="min-w-140px">Email</th>
                  <th class="min-w-120px">Company</th>
                  <th class="min-w-100px text-end">Actions</th>
                </tr>
              </thead>
              <!--end::Table head-->

              <!--begin::Table body-->
              <tbody>
                <template v-for="(item, index) in userList" :key="index">
                  <tr>
                    <td>
                      <div
                        class="
                          form-check
                          form-check-sm
                          form-check-custom
                          form-check-solid
                        "
                      >
                        <input
                          class="form-check-input widget-9-check"
                          type="checkbox"
                          :value="index"
                        />
                      </div>
                    </td>

                    <td>
                      <div class="d-flex align-items-center">
                        <!-- <div class="symbol symbol-45px me-5">
                          <img :src="item.image" alt="" />
                        </div> -->
                        <div class="d-flex justify-content-start flex-column">
                          <a
                            href="#"
                            class="text-dark fw-bolder text-hover-primary fs-6"
                            >{{ item.username }}</a
                          >

                          <span
                            class="text-muted fw-bold text-muted d-block fs-7"
                            >{{ item.skills }}</span
                          >
                        </div>
                      </div>
                    </td>

                    <td class="text-end">
                      <div class="d-flex flex-column w-100 me-2">
                        <div class="d-flex flex-stack mb-2">
                          <span class="text-muted me-2 fs-7 fw-bold">
                            {{ item.email }}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <a
                        href="#"
                        class="
                          text-dark
                          fw-bolder
                          text-hover-primary
                          d-block
                          fs-6
                        "
                        >{{ item.companyName }}</a
                      >
                      <span
                        class="text-muted fw-bold text-muted d-block fs-7"
                        >{{ item.companySkills }}</span
                      >
                    </td>

                    <td class="text-end">
                      <a
                        href="#"
                        class="
                          btn
                          btn-icon
                          btn-bg-light
                          btn-active-color-primary
                          btn-sm
                          me-1
                        "
                      >
                        <span class="svg-icon svg-icon-3">
                          <inline-svg
                            src="media/icons/duotune/general/gen019.svg"
                          />
                        </span>
                      </a>

                      <a
                        href="#"
                        class="
                          btn
                          btn-icon
                          btn-bg-light
                          btn-active-color-primary
                          btn-sm
                          me-1
                        "
                      >
                        <span class="svg-icon svg-icon-3">
                          <inline-svg
                            src="media/icons/duotune/art/art005.svg"
                          />
                        </span>
                      </a>

                      <a
                        href="#"
                        class="
                          btn
                          btn-icon
                          btn-bg-light
                          btn-active-color-primary
                          btn-sm
                        "
                      >
                        <span class="svg-icon svg-icon-3">
                          <inline-svg
                            src="media/icons/duotune/general/gen027.svg"
                          />
                        </span>
                      </a>
                    </td>
                  </tr>
                </template>
              </tbody>
              <!--end::Table body-->
            </table>
            <!--end::Table-->
          </div>
          <!--end::Table container-->
        </div>
        <!--begin::Body-->
      </div>
    </div>
  </div>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Actions } from "@/store/enums/StoreEnums";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import { useStore } from "vuex";

export default defineComponent({
  name: "users",
  components: {},
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    const store = useStore();
    setCurrentPageTitle("Users");
    store
      .dispatch(Actions.USER_LIST, { page: 1, size: 10 })
      .then((data) => {
        if (data.success) {
          this.userList = data.data.users;
        }
        console.log("users-success", data.data.users);
      })
      .catch((data) => {
        console.log("users-catch", data);
      });
  },
});
</script>
