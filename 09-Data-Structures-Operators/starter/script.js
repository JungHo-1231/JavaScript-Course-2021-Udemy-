'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    orderPizza: function (mainIngredient, ...
        otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// 1) Destructuring

// SPREAD,  because on Right side of =
const arr = [1, 2, ...[3, 4]];

// console.log(arr);

// REST,  because on Left side of =
const [a, b, ...other] = [1, 2, 3, 4, 5];

// console.log(a, b, other);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]

// console.log(pizza, risotto, otherFood);

// Objects

const {sat, ...weekdays} = restaurant.openingHours;

// console.log(weekdays);


// 2) functions
//
// const add = function (...nums) {
//     let total = 0;
//     for (const num of nums) {
//         total += num;
//     }
//     console.log(total);
//     return total;
// }
//
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
//
// const x  = [23, 5,7];
// add(...x);
//
//
// restaurant.orderPizza('mushrooms',
//     'onion', 'olives', 'spinach');
//
//
// // Use ANY data type, return Any date type, short-circuiting
// console.log(3 || "jonas");
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//
//
// // restaurant.numGuests = 23;
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests :10;
// console.log(guests1);
//
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
//
// console.log('---- And -----')
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'jonas');
//
// // Practical example
// if (restaurant.orderPizza()){
//     restaurant.orderPizza('mushrooms', 'spinach');
// }
//
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
//
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
//
// // Nullish : null and undefined (Not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1.
const [players1, players2] = game.players;
// console.log(players1)
// console.log(players2);

// 2.
const [gk, ...fieldPlayers] = players1;
// console.log('gk = ' +gk)
// console.log(fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4. During the game,
// Bayern Munich (team 1) used 3 substitute players.
// So create a new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

const [Thiago, Coutinho, Perisic] = players2;
const players1Final = [Thiago, Coutinho, Perisic, ...players1];


// 5. Based on the game.odds object,
// create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
    odds: {team1, x: draw, team2}
} = game;

// console.log(odds); // odds is not defined.

// console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', "Lewandowski", 'Kimmich');
// printGoals(...game.scored);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
    console.log(item);
}

for (const item of menu.entries()) {
    console.log(item);
}

for (const [i,el] of menu.entries()){
    console.log(`${i + 1} : ${el}`);
}














































