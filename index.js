class Product {
    constructor(food, cal) {
        this.food = food;
        this.calories = cal;
    }
}

class Dish {
    constructor(food) {
        this.product = [];
        this.food = food;
    }
    addProduct(ing, cal) {
        this.product.push({ing, cal});
    }
}

class getCaloriesCalculator {
    constructor() {
        this.dishes = [];
    }
    
    addDish(dish) {
        this.dishes.push(dish);
    }
    
    getComputeCalories(product) {
        return product.cal / 100 * product.ing.calories;
    }
    
    getDishCalories(dish) {
        return dish.product
            .reduce( (pr, cal) =>
                pr + this.getComputeCalories(cal), 0);
    }
    
    getTotalCalories() {
        return this.dishes
            .reduce( (pr, cal) => 
                pr + this.getDishCalories(cal), 0);
    }

    getDishInfo(dish) {
        let cal = this.getDishCalories(dish);
        console.log(dish.food + ' - 1 порция, ' + cal + ' ккал');
        dish.product.forEach((product) => {
            console.log(product.ing.food + ' ' + product.cal + ' гр, ' + this.getComputeCalories(product) + ' ккал')
        });
        console.log('\n');
    }
    
    getAllDishesInfo() {
        console.log('==========================');
            this.dishes.forEach( (dish) => {
                this.getDishInfo(dish);
            });
        console.log('==========================');
    }
}

const meat = new Product('Филе говядина', 158);
const rice = new Product('Рис', 130);
const onion = new Product('Лук', 40);
const carrot = new Product('Морковь', 41);

const plov = new Dish('Плов');
plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);

const calculator = new getCaloriesCalculator();
calculator.addDish(plov);
calculator.addDish(plov);
const calories = calculator.getTotalCalories();
console.log(calories);
const totals = calculator.getAllDishesInfo();
console.log(totals);