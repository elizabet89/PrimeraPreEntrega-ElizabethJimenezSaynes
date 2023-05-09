class ProductManager{

  constructor(){
    this.products=[];
    this.Id=1;
  }
  
  addProduct(title, description,price,thumbnail, code, stock){

    if(!title  || !description || !price || !thumbnail || !code || !stock ){
      console.log("todos los campos son obligatorios")
    }

    for(let product of this.products){
      
      if(product.code === code){
        console.log("el producto ya existe")
        return
       }
      
    }
   

    let producto = {
      id: this.Id,
      title: title,
      description: description,
      price:price,
      thumbnail:thumbnail,
      code: code,
      stock:stock
    };
       let valor=this.products
       valor.push(producto)
       this.Id++;
       console.log(valor);


  }



}
let Producto1=new ProductManager();
Producto1.addProduct("mesa","para escritorio",30, "esta imdg" ,20,10);

Producto1.addProduct("silla","para escritorio",30, "esta imdg" ,20,10);
