class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('images/milk.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
}
bedroom(){
  background(bedroom,550,500);
}
washroom(){
  background(washroom,550,500);
}
garden(){
  background(garden,550,500);
}

    getFoodStock(){
      return this.foodStock;
    }

}