import axios from "axios";

export default class ServiceService {
    static getData(q="", city=333) {
        return axios.get('https://api.achareh.ir/v2/listings/categories/limited-services/',
            {
                params: {
                    limit : 9,
                    city
                }
            }).then(res => {
            return res.data.map(item=>item.services).flat().filter(item => item.title.includes(q))
        })
    }
}
