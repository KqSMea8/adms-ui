import axios from 'axios'

let instance = axios.create({
    baseURL : '/',
    timeout:60*1000,
})

instance.interceptors.response.use(response => {
    return response
},error => {
    if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) { // 超时处理
        console.log('请求超时')
    } else if (error.response) {
        switch (error.response.status) {
            case 401:
            case 400:
                router.replace({
                    path: 'login',
                    query: {
                        redirect: router.currentRoute.fullPath
                    }
                })
                break;
        }
    }
    return Promise.resolve(error.response)
})

//post方法
const post = (url, params) => {
    return new Promise((resolve, reject) => {
        instance.post(url, qs.stringify(params), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    });
}
//get方法
const get = url => {
    return new Promise((resolve, reject) => {
        instance.get(url).then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error)
        })
    })
}

export default {
    get,
    post
}