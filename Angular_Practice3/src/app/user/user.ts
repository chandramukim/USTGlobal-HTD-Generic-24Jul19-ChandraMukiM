// ng g class class_name 
export class User{
    constructor(
        public name : String,
        public email : String,
        public phno : number,
        public id ?: String
    ){}
}