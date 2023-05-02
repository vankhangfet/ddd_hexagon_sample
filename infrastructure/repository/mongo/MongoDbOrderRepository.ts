import Order from "../../../domain/Order";
import OrderRepository from "../../../domain/repository/OrderRepository";

export default class MongoDbOrderRepository implements OrderRepository
{
    findById(id: number): Order {
        throw new Error("Method not implemented.");
    }
    save(order: Order): void {
        throw new Error("Method not implemented.");
    }
    
}