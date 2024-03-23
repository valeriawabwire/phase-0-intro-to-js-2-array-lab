let cats = {
cat1: "milo" ,
cat2: "otis",
cat3: "Garfield"
}
cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name) 
};
  destructivelyAppendCat(Ralph);

function destructivelyPrependCat(name) {
    cats.unshift(name)
};
destructivelyPrependCat(Bob)

cats = [ "Bob", "Milo", "Otis", "Garfield"];
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
};
destructivelyRemoveLastCat(Garfield)

function destructivelyRemoveFirstCat() {
  cats.shift();
};

function appendCat(name) {
    return [...cats,name]
}
appendCat(Broom)

function prependCat(name) {
  return [name,...cats]
};
prependCat(Arnold)
function removeLastCat() {
    return cats.slice(0,cats.length-1);
}


function removeFirstCat() {
return cats.slice(1)
};


