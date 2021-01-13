import common from "./common"

class Service {
    getAllAdverts(){
        return common.get("/adverts/")
    }

    getAdvertById(id) {
        return common.get(`/adverts/${id}`)
    }

    getUserAdverts(id) {
        return common.get(`/adverts/user/${id}`)
    }

    postAdvert(data) {
        return common.post("/adverts/", data)
    }

    deleteAdvert(id){
        return common.delete(`/adverts/${id}`)
    }

    patchAdvert(id,data){
        return common.patch(`/adverts/${id}`, data)
    }

    register(user){
        return common.post("/users/register/", user) 
    }

    login(user) {
        return common.post("/users/login/", user)
    }

    accountDelete(id) {
        return common.delete(`/users/${id}`)
    }

}

export default new Service