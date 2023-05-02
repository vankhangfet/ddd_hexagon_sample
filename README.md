# How to implement Hexagon Archiecture and apply DDD

Quick note: 

This is sample to implment Hexagon architecture and apply DDD.

![Hexagon](/hexagonal-architecture_img.png)

[**Domain Objects**]
- Domain objects can contain both state and behavior. 
- Domain objects don’t have any outward dependency. They’re pure code (Java, C#,etc.) and provide an API for use cases to operate on them.

```
class Order
{
   price!: number;
   id!: number; 
   orderItems!: Array<OrderItem>;
   orderStatus!:OrderStatus;

   complete():void
   {
     /* TODO */
   }
   
   removeOrder(id:number):void
   {
     /* TODO */
   }

   addOrder(product:Product):void 
   {
      /* TODO */
   }
}
```

[**Use Cases**]
- As abstract descriptions of what users are doing with software.
- Similar to the domain objects, a use case class has no dependency on outward components.

```
class DomainOrderService implements OrderService
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
```

[**Input and Output Ports**]
- An input port is a simple interface that can be called by outward components and that is implemented by a use case.
```
interface OrderService
{

    createOrder(product:Product):number;

    addProduct(product:Product):void;

    completeOrder(id:number):void;

    deleteProduct(id:number,productId:number):void;
}
```
- An output port is again a simple interface that can be called by our use cases if they need something from the outside (database access, for instance).
```
interface OrderRepository 
{
    findById(id: number):Order;
    save(order:Order):void;
}
```

[**Adapters**]
- Input adapters or “driving” adapters call the input ports to get something done. An input adapter could be a web interface, for instance. When a user clicks a button in a browser, the web adapter calls a certain input port to call the corresponding use case.

- Output adapters or “driven” adapters are called by our use cases and might, for instance, provide data from a database. An output adapter implements a set of output port interfaces.
