import axios from "axios"

export function request(config) {
  const instance = axios.create({
    baseURL:"http://123.207.32.32:8000",
    timeout:5000
  })



  instance.interceptors.request.use(config => {
    // console.log(config);
    const token = store.state.token;
    if (token) {
      config.headers.Authorization = token;
    }

    return config
  },error => {
    // console.log(error);
  })


  instance.interceptors.response.use(res => {
    return res.data
  },error => {
    // console.log(error);
  })


  return instance(config)
}



export function request1(config) {
  const instance1 = axios.create({
    baseURL:"",
    timeout:5000
  })



  instance1.interceptors.request.use(config => {
    // console.log(config);
    return config
  },error => {
    // console.log(error);
  })


  instance1.interceptors.response.use(res => {
    return res.data
  },error => {
    // console.log(error);
  })


  return instance1(config)
}

// 3.ES6 Promise 封装方式
// export function request(options) {
//   return new Promise((resolve, reject) => {
//     // 1.创建 axios 的实例对象
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 50000
//     })
//
//     // 3.过滤器(拦截器)
//     instance.interceptors.response.use(res => {
//       return res.data
//     }, err => {
//       console.log('来到了response拦截failure中');
//       console.log(err);
//       if (err && err.response) {
//         switch (err.response.status) {
//           case 400:
//             err.message = '请求错误'
//             break
//           case 401:
//             err.message = '未授权的访问'
//             break
//         }
//       }
//       return err
//     })
//
//
//     // 2.通过实例发送网络请求
//     instance(options)
//         .then(res => {
//           resolve(res)
//         }).catch(err => {
//       reject(err)
//     })
//   })
// }
//

