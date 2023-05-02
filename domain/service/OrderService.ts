import Product from "../Product";

export default interface OrderService
{

    createOrder(product:Product):number;

    addProduct(product:Product):void;

    completeOrder(id:number):void;

    deleteProduct(id:number,productId:number):void;
}