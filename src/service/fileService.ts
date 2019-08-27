import Vue from "vue";

import basicService from "@/service/basicService";
import store from "@/store/store";
const vue = new Vue();

class FileService {
  public static async createCatalog(
    projectID: string,
    path: string[],
    name: string
  ) {
    const rsp = await basicService.postRequest("/file/catalog", {
      projectID,
      path,
      name
    });
    if (rsp.msg === "success") {
      // @ts-ignore
      vue.$snackbar.show("创建成功");
    }
    return rsp;
  }

  public static async renameCatalog(
    projectID: string,
    path: string[],
    name: string
  ) {
    const rsp = await basicService.putRequest("/file/catalog", {
      projectID,
      path,
      name
    });
    if (rsp.msg === "success") {
      // @ts-ignore
      vue.$snackbar.show("重命名成功");
    }
    return rsp;
  }

  public static async getFile(projectID: string, path: string[]) {
    const rsp = await basicService.getRequest("/file/catalog", {
      projectID,
      path
    });
    store.commit("file/updateFileList", rsp.fileList);
    return rsp;
  }
}

export default FileService;