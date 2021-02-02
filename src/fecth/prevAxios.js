import Vue from "vue";
import axios from "axios";
// import md5 from 'js-md5'

export default {
  /**
   * POST 请求
   */
  POST: async function(url, requestData) {
    return await axios({
      url: url,
      params: requestData,
      method: "post",
      config: {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    });
  },
  /**
   * GET 请求
   */
  GET: async function(url, requestData) {
    return await axios({
      url: url,
      params: requestData,
      method: "get"
    });
  }
};

/**
 * axios 相关设置
 */

// 设置请求的baseURL
axios.defaults.baseURL = process.env.VUE_APP_API;

// axios 请求前拦截，处理相关内容
axios.interceptors.request.use(
  config => {
    Vue.prototype.$Loading.start();
    // 添加请求进度条
    return config;
  },
  error => {
    Vue.prototype.$Loading.error();
    return Promise.reject(error);
  }
);

// axios 响应后拦截，处理请求返回内容
axios.interceptors.response.use(
  response => {
    let data = response.data;
    if (data === undefined) {
      data = response;
    }
    data.requestAccess = data.status === 1;

    return data;
  },
  error => {
    let notice = Vue.prototype.$Notice;
    let response = error.response;
    let message = error.message;

    // 这里仅开发模式下使用
    if (process.env.NODE_ENV === "development") {
      if (message === "Network Error") {
        notice.error({
          title: `网络不通`,
          desc: `无法链接到API服务器，请API服务器配置是否正确`,
          duration: 3
        });
      } else if (response) {
        // 有服务器响应情况下，根据不同的状态码处理不同的结果
        let config = response.config;
        let statusCode = response.status;
        let method = config.method;
        let url = config.url.replace(config.baseURL, "");
        switch (statusCode) {
          case 405:
            notice.warning({
              title: `405：不支持“${method}”请求方式`,
              desc: `接口地址： ${url}`,
              duration: 0
            });
        }
      }
    } else {
      // 非开发模式下提供一般报错内容
      if (message === "Network Error") {
        notice.error({
          title: `网络不通`,
          desc: `无法链接到服务器，请检查网络是否通常`,
          duration: 3
        });
      } else {
        notice.warning({
          title: `请求出错了`,
          desc: `获取服务器资源出现错，请联系管理员`,
          duration: 3
        });
      }
    }
    Vue.prototype.$Loading.error();
    return Promise.reject(error);
  }
);

/**
 * 数据签名
 */
