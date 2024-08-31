// Initialize inventory as an array of product objects
let inventory = [
    {
        brand: 'Apple',
        model: 'iPhone 14',
        price: 120000,
        quantity: 30,
        discount: 10
    },
    {
        brand: 'Apple',
        model: 'iPhone 15',
        price: 130000,
        quantity: 50,
        discount: 15
    }
];

// Function to display inventory
function displayInventory() {
    console.log("\nCurrent Inventory:");
    inventory.forEach((product, index) => {
        console.log(`${index + 1}. ${product.brand} ${product.model} - Price: ${product.price}, Quantity: ${product.quantity}, Discount: ${product.discount}%, After Discount: ${product.afterDiscount ? product.afterDiscount : 'Not Calculated'}`);
    });
}

// Function to add a new product
function addProduct(brand, model, price, quantity, discount) {
    inventory.push({ brand, model, price, quantity, discount });
    console.log(`\nAdded product: ${brand} ${model}`);
}

// Function to remove a product by index
function removeProduct(index) {
    if (index >= 0 && index < inventory.length) {
        let removedProduct = inventory.splice(index, 1);
        console.log(`\nRemoved product: ${removedProduct[0].brand} ${removedProduct[0].model}`);
    } else {
        console.log("\nProduct not found.");
    }
}

// Function to update product quantity
function updateQuantity(index, newQuantity) {
    if (index >= 0 && index < inventory.length) {
        inventory[index].quantity = newQuantity;
        console.log(`\nUpdated quantity for ${inventory[index].brand} ${inventory[index].model} to ${newQuantity}`);
    } else {
        console.log("\nProduct not found.");
    }
}

// Function to calculate after discount price
function calculateDiscountPrices() {
    inventory.forEach(product => {
        product.afterDiscount = product.price - (product.discount * product.price) / 100;
    });
    console.log("\nCalculated after discount prices for all products.");
}

// Function to compare products by price
function compareProducts() {
    let mostExpensive = inventory[0];
    let leastExpensive = inventory[0];
    
    inventory.forEach(product => {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
        if (product.price < leastExpensive.price) {
            leastExpensive = product;
        }
    });

    console.log(`\nMost expensive product: ${mostExpensive.brand} ${mostExpensive.model} - Price: ${mostExpensive.price}`);
    console.log(`Least expensive product: ${leastExpensive.brand} ${leastExpensive.model} - Price: ${leastExpensive.price}`);
}

// Function to delete a property from a product
function deleteProductProperty(index, property) {
    if (index >= 0 && index < inventory.length && inventory[index].hasOwnProperty(property)) {
        delete inventory[index][property];
        console.log(`\nDeleted property '${property}' from product: ${inventory[index].brand} ${inventory[index].model}`);
    } else {
        console.log("\nInvalid product index or property.");
    }
}

// Function to manage a 2D array layout of products
function manageInventoryLayout(rows, cols) {
    let layout = Array.from(Array(rows), () => new Array(cols).fill(null));
    
    inventory.forEach((product, i) => {
        let row = Math.floor(i / cols);
        let col = i % cols;
        if (row < rows) {
            layout[row][col] = `${product.brand} ${product.model}`;
        }
    });

    console.log("\nInventory Layout:");
    console.log(layout);
}

// User interaction functions
function promptUser() {
    let action = prompt("\nChoose an action: (1) Add Product, (2) Remove Product, (3) Update Quantity, (4) Calculate Discounts, (5) Display Inventory, (6) Compare Products, (7) Delete Property, (8) Manage Layout, (9) Exit");

    switch (action) {
        case '1':
            let brand = prompt("Enter brand:");
            let model = prompt("Enter model:");
            let price = parseFloat(prompt("Enter price:"));
            let quantity = parseInt(prompt("Enter quantity:"));
            let discount = parseFloat(prompt("Enter discount percentage:"));
            addProduct(brand, model, price, quantity, discount);
            break;
        case '2':
            let removeIndex = parseInt(prompt("Enter product index to remove:")) - 1;
            removeProduct(removeIndex);
            break;
        case '3':
            let updateIndex = parseInt(prompt("Enter product index to update quantity:")) - 1;
            let newQuantity = parseInt(prompt("Enter new quantity:"));
            updateQuantity(updateIndex, newQuantity);
            break;
        case '4':
            calculateDiscountPrices();
            break;
        case '5':
            displayInventory();
            break;
        case '6':
            compareProducts();
            break;
        case '7':
            let deleteIndex = parseInt(prompt("Enter product index to delete property:")) - 1;
            let property = prompt("Enter property to delete:");
            deleteProductProperty(deleteIndex, property);
            break;
        case '8':
            let rows = parseInt(prompt("Enter number of rows for layout:"));
            let cols = parseInt(prompt("Enter number of columns for layout:"));
            manageInventoryLayout(rows, cols);
            break;
        case '9':
            console.log("Exiting program...");
            return;
        default:
            console.log("Invalid action. Try again.");
    }

    promptUser(); // Recursively prompt the user for more actions
}

// Start the program
displayInventory();
promptUser();
