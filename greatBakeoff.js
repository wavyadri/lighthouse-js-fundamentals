// TO DO
// not working for case 2
const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  let finalRecipes = [];
  for (let i = 0; i < recipes.length - 1; i++) {
    // does A have it?
    let checkA = ingredientCheck(recipes[i].ingredients, bakeryA);
    // does B have it?
    let checkB = ingredientCheck(recipes[i].ingredients, bakeryB);
    // if they both have it, it qualifies as a finalRecipe
    if (checkA && checkB) {
      finalRecipes.push(recipes[i].name);
    }
  }
  return finalRecipes.join('');
};

const ingredientCheck = (ingredients, bakery) => {
  let finalIngredients = [];
  for (const ingredient of ingredients) {
    for (const item of bakery) {
      if (ingredient === item) {
        finalIngredients.push(item);
      }
    }
  }
  if (finalIngredients.length > 0) {
    return true;
  } else {
    return false;
  }
};

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for (let r of recipes) {
    let concatArray = bakeryA.concat(bakeryB);
    let filteredArray = concatArray.filter(
      (item, pos) => concatArray.indexOf(item) === pos
    );
    let bakeryArray = filteredArray;
    //console.log(r.ingredients)
    let match = 0;

    for (let i = 0; i < bakeryArray.length; i++) {
      //console.log(bakeryArray[i]);
      if (
        bakeryArray[i] === r.ingredients[0] ||
        bakeryArray[i] === r.ingredients[1]
      ) {
        match += 1;
      }
    }
    console.log(match);
  }
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base'],
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese'],
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate'],
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey'],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
