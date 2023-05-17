class ProductManager{

  constructor(){
    this.products=[];
    this.Id=1;
  }

  addProduct(title, description,price,thumbnail, code, stock){

    if(!title  || !description || !price || !thumbnail || !code || !stock ){
      return "todos los campos son obligatorios"
    }

    for(let product of this.products){
      
      if(product.code === code){
    
        return "el producto ya existe"
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

  }

}
let Producto1=new ProductManager();

