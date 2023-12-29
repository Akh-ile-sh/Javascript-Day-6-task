class UBER {
  constructor(distance, price = 15) {
    this.distance = distance;
    this.price = price;
  }

  cabPrice() {
    console.log(`the price for the cab is ${this.distance * this.price}`);
  }
}

const uber1 = new UBER(15);
uber1.cabPrice();
