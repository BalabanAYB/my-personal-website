import * as axios from 'axios'


export const taskAPI = {
   getList () {
return axios.get('/data.json')
}
}