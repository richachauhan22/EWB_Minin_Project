console.log("---Inializing Inventory System----")

 const inventory=[
    {
        name:"Laptop", price:800
    },
    {name:"Mouse", price:25}
 ];

 console.log("Inventory:", inventory);

  const productName=prompt("enter product name:");
   const productPrice= Number(prompt("enter product price"));
 console.log("product name:", productName);
 console.log("product price:",productPrice);

 if(
    productName !=null &&
    productName.trim()!="" &&
    Number.isFinite(productPrice)&&
    productPrice>=0
 ){
    inventory.push({
        name:productName.trim(),
        price:productPrice
    });
    console.log("product add sucess");
 }
 else{
    console.log("invalid name and price");
 }


 console.log(inventory);

 function getCategory(price){
    let category;
     if (price<100){
        category="Budget";
     }
     else if(price<500){
        category="Standard";
     }
     else{
        category="Premium";
     }


     switch(category){
        case"Budget":
        return "Budget";

         case"Standard":
        return "Standard";
         case"Premium":
        return "Premium";
        default:
            return"unknown";

     }
 }


  console.log("------Processing Inventory Roaster-----");
  inventory.forEach(function(product){
    const category=getCategory(product.price);
    console.log(
        `Item:${product.name} ($${product.price})->category: ${category}`
    );
  });


  function calculateTotal(items){
    let total=0;
    for(let i=0; i<items.length;i++){
        total+= items[i].price;
    }
     return total;
  }
  console.log("-----Financial Analysis---");
  console.log("Total Inventory Values:$" + calculateTotal(inventory));

  
const calculateFinalPrice = (price, taxRate, discountRate) => {
    const discountedPrice = price - (price * discountRate / 100);
    const finalPrice = discountedPrice + (discountedPrice * taxRate / 100);

    return finalPrice;
};

console.log(
    "Final price after tax and discount:",
    calculateFinalPrice(800, 18, 10)
);



const affordableProducts = inventory.filter(function (product) {
    return product.price < 200;
});

console.log(
    "Filtered Affordable Items (Under $200):",
    affordableProducts.map(product => product.name)
);




const reportList = inventory.map(product => {
    return `${product.name.toUpperCase()}: $${product.price}`;
});

console.log("Formatted Report List:", reportList);






function searchProduct(searchName) {

      if (searchName === null || searchName.trim() === "") {
        console.log("Please enter a valid product name.");
        return;
    }

    for (let i = 0; i < inventory.length; i++) {
        if (!inventory[i].name) {
            continue;
        }

        if (
            inventory[i].name.toLowerCase() ===
            searchName.trim().toLowerCase()
        ) {
            console.log("Product found:", inventory[i]);
            return;
        }
    }
    console.log("Product not found:", searchName);
}

//searchProduct("Monitor");




