import Product from "./Product";

export default class OrderItem
{
   productId!: number; 
   price!: number;
   quantity!: number;
   
   constructor(product:Product) {
    this.productId = product.id;
    this.price = product.price;
  }

   getProductId()
   {
     return this.productId;
   }

   getPrice()
   {
     return this.price;
   }

   getQuantity()
   {
     return this.quantity;
   }
}