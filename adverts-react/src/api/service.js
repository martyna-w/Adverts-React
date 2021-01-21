import common from "./common"

class Service {

    getAllAdverts(){
        
        return common.get("/adverts")
    }

    getAdvertById(id) {
        return common.get(`/adverts/${id}`)
    }

    getUserAdverts(id) {
        return common.get(`/adverts/user/${id}`)
    }

    postAdvert(data, token) {
        const formData = new FormData();
        formData.append('title', data.title)
        formData.append('description', data.description)
        formData.append('advertImage', data.advertImage)
        console.log("Data succesfully appended")
        return common.post("/adverts/", formData, {
            headers: {
                Authorization: 'Bearer ' + token,
                'content-type': 'multipart/form-data'
            }
        }).then().catch(err => console.log(err))
    }

    deleteAdvert(id, token){
        return common.delete(`/adverts/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        })
    }

    patchAdvert(data, token){
        const formData = new FormData();
        const id = data.id
        formData.append('title', data.title)
        formData.append('description', data.description)
        if (data.advertImage !== null)
            formData.append('advertImage', data.advertImage)
        console.log("Data succesfully appended")
        console.log(formData)
        return common.patch(`/adverts/${id}`, formData ,{
            headers: {
                Authorization: 'Bearer ' + token,
                'content-type': 'multipart/form-data'
            }
        }).then().catch(err => {console.log(err)})
    }

    register(user){
        return common.post("/users/register/", user) 
    }

    login(user) {
        return common.post("/users/login/", user)
    }

    accountDelete(id, token) {
        return common.delete(`/users/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

}

export default new Service