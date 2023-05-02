import DomainException from "./DomainException";
import OrderItem from "./OrderItem";
import Product from "./Product";

export default class Order
{
   price!: number;
   id!: number; 
   orderItems!: Array<OrderItem>;
   orderStatus!:OrderStatus;

   complete()
   {
       this.orderStatus = OrderStatus.COMPLETED;
      
   }
   
   removeOrder(id:number)
   {
     return this.orderItems.pop();
   }

   addOrder(product:Product)
   {
     this.validateState();
     this.orderItems.push( new OrderItem(product));
   }
   
   getOrderItems(id:number)
   {
     return this.orderItems.filter(item => item.productId = id);
   }

   validateState()
   {
     if (OrderStatus.COMPLETED == this.orderStatus) {
        throw new DomainException("The order is in completed state.");
     }

   }
}