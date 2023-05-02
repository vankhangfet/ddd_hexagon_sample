import Order from "../Order";

export default interface OrderRepository 
{
    findById(id: number):Order;
    save(order:Order):void;
}