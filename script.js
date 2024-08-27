for (let i=1; i <= 10; i++) {
    console.log(i);
}

for (let i=10; i >= 1; i--) {
    console.log(i);
}

let i = 0;

while (i < 10) {
    i++;
    console.log(i);
}

let t = 11;

while (t > 1) {
    t--;
    console.log(t);
}

let n = 0;

do {
    n++;
    console.log(n);
}
while (n < 10);

let h = 11;

do {
    h--;
    console.log(h);
}
while (h > 1);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const x of numbers) {
    console.log(x);
}

let word = prompt("Type a word less than 10 characters long");
let padding = word.padStart(10, " ");

do {
    word.padStart(10, " ");
    console.log(padding);
}
while (padding < 10);






