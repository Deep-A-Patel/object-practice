console.log("object.js");

const cupcake = {
    color : ["pink", "white", "brown"],
    flavor : "chocolate",
    size : "mini",
    calories : 0,
    icing : true,
    eatCupcake: () =>{
        console.log("yum");
    }
}

console.log("cupcake", cupcake);

console.log("what color do we have", cupcake.color);

for (let i = 0; i < cupcake.color.length; i++) {
    console.log("cupcake colors", cupcake.color[i]);
}

cupcake.color.forEach(color => {
    console.log("what is color", color);
    console.log("and this is the long way to get " + color + " and some more");
    console.log(`the color again is ${color} and that is a beautiful color`);
})



// Lighting Exercise 1:

const car = {
    make : "ford",
    model: "mustang",
    color: "red",
    year: "2015"
};

console.log("car", car);

// Lighting Exercise 2:

animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

console.log("animals", animals)

// Lighting Exercise 3:

var familyMember =[
    dad = {
        name: "Ashvin",
        age: "50",
        food: "pasta"
    },
    mom = {
        name: "Mamta",
        age: "49",
        food: "pizza"
    },
    brother = {
        name: "Harsh",
        age: "30",
        food: "burger"
    },
    sister = {
        name: "Anuradha",
        age: "31",
        food: "fries"
    }
]

console.log("familyMember", familyMember);


// Practice: Accessing Property Values

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log("beatles", beatles)


























