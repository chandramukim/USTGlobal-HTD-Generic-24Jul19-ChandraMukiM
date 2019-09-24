export class User {
    constructor(
        public brand: string,
        public model: string,
        public yop: Date,
        public cost: number,
        public num: number,
        public id ?: string
    ){}
}