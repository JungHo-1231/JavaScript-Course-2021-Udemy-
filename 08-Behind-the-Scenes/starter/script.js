'use strict';

const jonas ={
    firstname :'Jonas',
    year: 1991,
    calcAge :function (){
        console.log(this);
        console.log(2037 - this.year);

        const isMillenial = () => {
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet : () => console.log(`Hey ${this.firstname}`),
};


jonas.greet();
jonas.calcAge()

// arguments keyword
const addExpr = function (a,b) {
    return a + b;
};

var addArrow = (a,b) => a + b;