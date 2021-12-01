import http from "../http-common/http-common";

export class CustomersServices {
    getCustomer(){
        return http.get("/customers");
    }
    static addCustomer(customer) {
        return http.post("/customers", customer);
    }
    deleteCustomer(id ){
        return http.delete("/customers/" +id);
    }
}
export default new CustomersServices();