import axios from 'axios'

const domain = 'https://5eed24da4cbc340016330f0d.mockapi.io/api';

axios.interceptors.request.use( async (config) => {
    return config;
}, async (error) => {
    return Promise.reject(error)
});

axios.interceptors.response.use( async (response) => {
    return response;
}, async (error) => {
    const resp =  error.response
    if (resp && resp.status === 401 || resp && resp.status === 419) {
      // if the system detects user is not logged, itll log out him
      // this.$store.logout()
      // store.dispatch('logout')
      // store.dispatch("auth/refreshApp")
    }
    return Promise.reject(resp);
})



export const Http = async (method, endpoint, data, options = {}) => {
  
  // const { token } = localStorage('csrfToken')
    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
        //   Authorization: 'Bearer ' + `${token}`,        
    }
    
    // if (!!options && !options.hasOwnProperty('headers')) 
    options.headers = defaultHeaders

    let serviceResponse = {}
    method = method.toLowerCase()
    const servicePromise = axios({
      method,
      url: `${domain}${endpoint}`,
      data,
      ...options,
    })
  
    try {
      // const [materializedPromise] = await Promise.all([servicePromise])
      serviceResponse = await servicePromise
      // serviceResponse = { ...materializedPromise }
    } catch (error) {
      serviceResponse = error
    }
    return serviceResponse
}
