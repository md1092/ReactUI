class Product {
    constructor(
      id,
      categoryId,
      title,
      imageUrl,
      price,
      description,
      size,
      delivery,
      reviews,

    ) {
      this.id =id;
      this.categoryId=categoryId;
      this.title = title;
      this.imageUrl = imageUrl;
      this.price=price;
      this.description = description;
      this.size=size;
      this.delivery=delivery;
      this.reviews=reviews;
      this.total=this.price+this.delivery;

    } 
  }
  export default Product;
  