//create object
const movie  = {
    title : "muvi",
    rating : 4,
    releaseYear : 200
};

showProperties(movie);

function showProperties (obj) {
    for (let key in obj) {
        console.log(key + " "+obj[key]);
    }
}


//object definition
let circle = {
    radius : 1,

    location: {
        x: 1,
        y: 1,
    },

    isVisible: true,
    draw: function() {
        console.log('drawing biaatch');
    }

};

circle.draw();

//factory functions
function createCircle(leRadius,isVisible) {
    return {
        radius: leRadius,
        location : {
            x: 1,
            y: 2,
        },
        isVisible,
        draw() {
            console.log("fooock");
        }
    };
}

//create another circle
let circle2 = createCircle(2)

//constructor function
function Circlee (radius){
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle3 = new Circlee(1);