var react = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l,b){
    console.log("Solving for REctangle with l ="+ l + " "+ "b= "+b);

    if(l <=0 || b<=0){
        console.log("Dimensions must be greater than zero");
    }else{
        console.log("The area of the rectangle is " + react.area(l ,b));
        console.log("The perimeter of the rectangle is " + react.perimeter(l ,b));
    }
}

solveRect(10,9);
solveRect(-10,9);
solveRect(0,9);