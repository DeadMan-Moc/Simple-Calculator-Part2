class Calculator{

    constructor(){
      this.arr = [];
      this.lastAns = 0;
    }
  
    add(){

      let sum = 0;
      for (let i = 0; i < arguments.length; i++){
        if (arguments[i] === "LAST"){
            arguments[i] = this.lastAns;
        }
        if (arguments[i] === "SLOT_1"){
            arguments[i] = this.get_slot(1);
        }
        if (arguments[i] === "SLOT_2"){
            arguments[i] = this.get_slot(2);
        }
        sum = sum + arguments[i];
      }
      this.lastAns = sum;
      return sum;
    }
  
    multiply(){
  
      let product = 1;
      for (let i = 0; i < arguments.length; i++){
        if (arguments[i] === "LAST"){
          if (arguments[i] === "SLOT_1"){
            arguments[i] = this.get_slot(1);
          }
          if (arguments[i] === "SLOT_2"){
            arguments[i] = this.get_slot(2);
          }
          arguments[i] = this.lastAns;
        }
        product = product * arguments[i];
      }
      this.lastAns = product;
      return product;
    }
  
    last(){
      return this.lastAns;
    }
    set_slot(n){
      this.arr.push(this.lastAns);
      return this.arr[n - 1];
    }
  
    get_slot(n){
      return this.arr[n - 1];
    }
  
  }

  let calculator_instance = new Calculator();
