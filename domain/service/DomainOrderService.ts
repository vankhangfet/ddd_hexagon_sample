import Product from "../Product";
import OrderRepository from "../repository/OrderRepository";
import OrderService from "./OrderService";

export default class DomainOrderService implements OrderService
{  
    orderRepository!: OrderRepository;

    constructor(orderRepository:OrderRepository)
    {
       this.orderRepository = orderRepository;
    }


    createOrder(product: Product): number {
        throw new Error("Method not implemented.");
    }
    addProduct(product: Product): void {
        throw new Error("Method not implemented.");
    }
    completeOrder(id: number): void {
        throw new Error("Method not implemented.");
    }
    deleteProduct(id: number, productId: number): void {
        throw new Error("Method not implemented.");
    }

    
}