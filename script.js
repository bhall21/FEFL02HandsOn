let idealCar = {
    name: "Mustang",
    color: "Red",
    weightInPounds: 3600,
myCar: function(){
    console.log("My ideal car is a " + this.name+" with a color of "+ this.color+", but I do not wat it to be over "+ this.weightInPounds+" pounds.")
}
        }
        
idealCar.myCar();