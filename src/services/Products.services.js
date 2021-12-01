import http from "../http-common/http-common";


class ProductDaraService {
    getProducts(){
        return http.get("/products")
    }
}
export default new ProductDaraService();