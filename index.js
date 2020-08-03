var react = require("./rectangle");

function solveRect(l,b){
    console.log("Solving for REctangle with l ="+ l + " "+ "b= "+b);

    react(l,b,(err,rectangle) =>{
        if (err){
            console.log("ERROR : ", err.message);
        } else{
            console.log("The area of the rectangle of dimensions l = "+ l+"and b = " +b + " is "+ rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "+ l+"and b = " +b + " is "+ rectangle.Perimeter());
        }
    });
    console.log("This statement is after the call to react");

}

solveRect(10,9);
solveRect(-10,9);