import http from "@/http-common";

class HttpServices{
    getData(path){
        return http.get(path);
    }

    postData(path, data) {
        return http.post(path, data);
    }

    putData(path, data) {
        return http.put(path, data);
    }

    deleteData(path) {
        return http.delete(path);
    }
}

export default new HttpServices();