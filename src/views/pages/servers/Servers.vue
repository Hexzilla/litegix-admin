<template>
  <!--begin::Dashboard-->
  <div class="row gy-5 gx-xl-8">
    <div class="col-xxl-12">
      <div class="card card-xxl-stretch mb-5 mb-xl-8">
        <!--begin::Header-->
        <div class="card-header border-0 pt-5">
          <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder fs-3 mb-1">Servers</span>

            <span class="text-muted mt-1 fw-bold fs-7">Over 500 servers</span>
          </h3>

          <div
            class="card-toolbar"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-trigger="hover"
            title="Click to add a user"
          >
            <router-link
              to="/servers/create"
              class="btn btn-sm btn-light-primary"
            >
              <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
              </span>
              New User
            </router-link>
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
                  <th class="min-w-140px">Address</th>
                  <th class="min-w-120px">Web Server</th>
                  <th class="min-w-120px">Database</th>
                  <th class="min-w-100px text-end">Actions</th>
                </tr>
              </thead>
              <!--end::Table head-->

              <!--begin::Table body-->
              <tbody>
                <template v-for="(item, index) in serverList" :key="index">
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
                            class="text-dark fw-bolder text-hover-primary fs-6"
                            >{{ item.name }}</a
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
                            {{ item.address }}
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
                        >{{ item.webserver }}</a
                      >
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
                        >{{ item.database }}</a
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
import Pagination from "@/components/Pagination.vue";

export default defineComponent({
  name: "servers",
  components: {
    Pagination,
  },
  data() {
    return {
      serverList: [],
    };
  },
  mounted() {
    const store = useStore();
    setCurrentPageTitle("Servers");
    store
      .dispatch(Actions.SERVER_LIST, { page: 1, size: 10 })
      .then((data) => {
        if (data.success) {
          this.serverList = data.data.servers;
        }
        console.log("servers-success", data.data.servers);
      })
      .catch((data) => {
        console.log("servers-catch", data);
      });
  },
});
</script>
