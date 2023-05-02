import Product from "../../domain/Product";
import OrderService from "../../domain/service/OrderService";

export default class CliOrderController 
{
    orderService!:OrderService;
    constructor(orderService:OrderService)
    {
      this.orderService = orderService;
    }
    
    createCompleteOrder():void
    {


    }

    createOrder():number{

        let mobile1:Product = new Product(1, 300, "Apple");
        //let mobile2:Product = new Product(1, 200, "Samsung");
        this.orderService.addProduct(mobile1);
        //this.orderService.addProduct(mobile2);

        let orderId:number = this.orderService.createOrder(mobile1);

        return orderId; 
    }
}