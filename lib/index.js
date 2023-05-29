
import AkDataTable from "./AkDataTable/src/AkDataTable.vue";
import AkRequestButton from "./AkRequestButton/src/AkRequestButton.vue";
import AkRequestDataDialog from "./AkRequestDataDialog/src/AkRequestDataDialog.vue";
import AkPagination from "./AkPagination/src/AkPagination.vue";
import "./styles/index.css";
const componentsMap = {
  AkDataTable,
  AkRequestButton,
  AkRequestDataDialog,
  AkPagination
};
export function install(Vue) {
  Object.keys(componentsMap).map((componentName) => {
    console.info("install----all----");
    if (componentsMap[componentName].name) {
      Vue.component(componentsMap[componentName].name, componentsMap[componentName]);
    }
  });
}

export {
  AkDataTable,
  AkPagination,
  AkRequestDataDialog,
  AkRequestButton
};
export default {
  AkDataTable,
  AkRequestButton,
  AkRequestDataDialog,
  AkPagination,
  install
};
