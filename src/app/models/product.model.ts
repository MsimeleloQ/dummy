export class Product {
    _id: number;
    name: string;
    quantity: number;
    price: Number;
    image: string;
    created_at: string;
    constructor() {
        this._id = 0;
        this.name = "";
        this.price = 0;
        this.quantity = 0;
        this.image = "";
        this.created_at = ""
    }
}