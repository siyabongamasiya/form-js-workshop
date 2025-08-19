export default class NumberWork {
    constructor(num1){
        this.num1 = num1
    }

    displayNumber(){
        console.log(`This is num1 : ${this.num1}`)
    }

    posOrNeg(){
        if(this.num1 < 0){
            console.log("This is negative!!")
        }else{
            console.log("This is positive!!")
        }
    }
}
