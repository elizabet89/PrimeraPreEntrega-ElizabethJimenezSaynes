class ProductManager {
  constructor() {
    this.products = [];
    this.Id = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Validar campos obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      return "Todos los campos son obligatorios";
    }

    // Verificar si el producto ya existe
    for (let product of this.products) {
      if (product.code === code) {
        return "El producto ya existe";
      }
    }

    let producto = {
      id: this.Id,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };

    this.products.push(producto);
    this.Id++;

    return "Producto agregado exitosamente";
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    for (let product of this.products) {
      if (product.id === id) {
        return product;
      }
    }

    console.error("Not found");
  }
}


const manager = new ProductManager();



