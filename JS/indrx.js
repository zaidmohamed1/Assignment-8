
var recipes = [
  {
    title: "Teriyaki Chicken Bowl",
    desc: "Sweet and savory chicken over rice with vegetables",
    difficulty: "Easy",
    category: "Asian",
    rating: 4.7,
    reviews: 367,
    img: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    prep: 15,
    cook: 20,
    servings: "2 people",
    ingredients: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "1 tbsp sesame oil",
      "Sesame seeds for topping"
    ],
    instructions: [
      "Marinate chicken in teriyaki sauce for 15 minutes.",
      "Cook chicken in sesame oil until browned.",
      "Add vegetables and stir-fry until tender.",
      "Serve over rice and sprinkle sesame seeds."
    ],
    nutrition: {
      Calories: "480 kcal",
      Protein: "32g",
      Carbohydrates: "42g",
      Fat: "14g",
      Fiber: "5g",
      Sodium: "860mg"
    },
    tips: [
      "Add a few chili flakes for extra heat.",
      "Top with fresh green onions before serving."
    ]
  },
  {
    title: "Margherita Pizza",
    desc: "Classic Italian pizza with fresh mozzarella and basil",
    difficulty: "Intermediate",
    category: "Italian",
    rating: 4.9,
    reviews: 512,
    img: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
    prep: 90,
    cook: 12,
    servings: "2 people",
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 250°C.",
      "Spread tomato sauce on the dough evenly.",
      "Add mozzarella slices and fresh basil leaves.",
      "Bake until crust is golden and cheese is melted."
    ],
    nutrition: {
      Calories: "580 kcal",
      Protein: "24g",
      Carbohydrates: "68g",
      Fat: "22g",
      Fiber: "4g",
      Sodium: "920mg"
    },
    tips: [
      "Use a pizza stone for a crispier crust.",
      "Drizzle olive oil on top after baking."
    ]
  },
  {
    title: "Beef Stir Fry",
    desc: "Tender beef slices with colorful vegetables in soy sauce",
    difficulty: "Intermediate",
    category: "Asian",
    rating: 4.8,
    reviews: 290,
    img: "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
    prep: 20,
    cook: 15,
    servings: "3 people",
    ingredients: [
      "250g beef strips",
      "1 bell pepper, sliced",
      "1 onion, sliced",
      "2 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tsp minced garlic",
      "1 tbsp oil"
    ],
    instructions: [
      "Heat oil in a wok.",
      "Add garlic and beef, stir-fry until browned.",
      "Add vegetables and sauces.",
      "Serve hot with steamed rice."
    ],
    nutrition: {
      Calories: "530 kcal",
      Protein: "40g",
      Carbohydrates: "28g",
      Fat: "18g",
      Fiber: "3g",
      Sodium: "790mg"
    },
    tips: [
      "Use flank steak for best tenderness.",
      "Don’t overcook vegetables to keep them crisp."
    ]
  },
  {
    title: "Chicken Caesar Salad",
    desc: "Crisp romaine lettuce with grilled chicken and creamy dressing",
    difficulty: "Easy",
    category: "Salad",
    rating: 4.6,
    reviews: 198,
    img: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    prep: 10,
    cook: 0,
    servings: "2 people",
    ingredients: [
      "2 cups romaine lettuce",
      "1 grilled chicken breast, sliced",
      "Croutons",
      "Parmesan cheese",
      "Caesar dressing"
    ],
    instructions: [
      "Chop the lettuce and place it in a bowl.",
      "Add grilled chicken and croutons.",
      "Drizzle with Caesar dressing.",
      "Top with Parmesan cheese and serve."
    ],
    nutrition: {
      Calories: "420 kcal",
      Protein: "36g",
      Carbohydrates: "12g",
      Fat: "26g",
      Fiber: "3g",
      Sodium: "640mg"
    },
    tips: [
      "Use Greek yogurt for a lighter dressing.",
      "Add boiled eggs for extra protein."
    ]
  },
  {
    title: "Pancakes",
    desc: "Fluffy pancakes served with maple syrup",
    difficulty: "Easy",
    category: "Breakfast",
    rating: 4.9,
    reviews: 520,
    img: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
    prep: 10,
    cook: 10,
    servings: "3 people",
    ingredients: [
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "2 tbsp sugar",
      "1 tbsp butter",
      "1 tsp baking powder"
    ],
    instructions: [
      "Mix dry ingredients together.",
      "Add milk and egg, whisk until smooth.",
      "Cook on medium heat until bubbles appear.",
      "Flip and cook until golden brown."
    ],
    nutrition: {
      Calories: "350 kcal",
      Protein: "10g",
      Carbohydrates: "54g",
      Fat: "10g",
      Fiber: "2g",
      Sodium: "310mg"
    },
    tips: [
      "Add blueberries or chocolate chips to the batter.",
      "Serve with honey for extra flavor."
    ]
  },
  {
    title: "Greek Salad",
    desc: "Refreshing salad with feta cheese, olives, and tomatoes",
    difficulty: "Easy",
    category: "Mediterranean",
    rating: 4.7,
    reviews: 278,
    img: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
    prep: 12,
    cook: 0,
    servings: "2 people",
    ingredients: [
      "1 cucumber, sliced",
      "2 tomatoes, diced",
      "1/2 onion, sliced",
      "Feta cheese cubes",
      "Black olives",
      "Olive oil, oregano, salt"
    ],
    instructions: [
      "Combine all vegetables in a large bowl.",
      "Add feta cheese and olives.",
      "Drizzle with olive oil and sprinkle oregano.",
      "Mix gently and serve chilled."
    ],
    nutrition: {
      Calories: "310 kcal",
      Protein: "8g",
      Carbohydrates: "16g",
      Fat: "24g",
      Fiber: "3g",
      Sodium: "580mg"
    },
    tips: [
      "Use cherry tomatoes for a sweeter flavor.",
      "Add grilled chicken for a full meal."
    ]
  }
];

var img = document.getElementById("recipe-img");
var title = document.getElementById("recipe-title");
var desc = document.getElementById("recipe-desc");
var difficulty = document.getElementById("difficulty");
var category = document.getElementById("category");
var rating = document.getElementById("rating");
var reviews = document.getElementById("reviews");
var prep = document.getElementById("prep-time");
var cook = document.getElementById("cook-time");
var servings = document.getElementById("servings");
var warning = document.getElementById("warning");
var nextBtn = document.getElementById("next-recipe");
var tabButtons = document.querySelectorAll(".tab");
var tabContent = document.getElementById("tab-content");

let currentRecipe = 0;

function renderNutrition(nutrition) {
  return `
    <div class="nutrition-grid">
      ${Object.entries(nutrition).map(([key, val]) => `
        <div class="nutrition-item">
          <span>${key}</span>
          <span>${val}</span>
        </div>
      `).join("")}
    </div>`;
}

function showRecipe(recipe) {
  document.querySelector(".container").classList.remove("fade");
  void document.querySelector(".container").offsetWidth;
  document.querySelector(".container").classList.add("fade");

  img.src = recipe.img;
  title.textContent = recipe.title;
  desc.textContent = recipe.desc;
  difficulty.textContent = recipe.difficulty;
  category.textContent = recipe.category;
  rating.textContent = recipe.rating;
  reviews.textContent = `${recipe.reviews} reviews`;
  prep.textContent = `${recipe.prep} min`;
  cook.textContent = `${recipe.cook} min`;
  servings.textContent = recipe.servings;

  difficulty.className = `tag ${recipe.difficulty.toLowerCase()}`;
  if (recipe.prep > 45) warning.classList.remove("hidden");
  else warning.classList.add("hidden");

  showTab("ingredients");
}

function showTab(type) {
  var recipe = recipes[currentRecipe];
  let html = "";
  if (type === "ingredients") {
    html = `<ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>`;
  } else if (type === "instructions") {
    html = `<ol>${recipe.instructions.map(i => `<li>${i}</li>`).join("")}</ol>`;
  } else if (type === "nutrition") {
    html = renderNutrition(recipe.nutrition);
  } else if (type === "tips") {
    html = `<ul>${recipe.tips.map(i => `<li>${i}</li>`).join("")}</ul>`;
  }
  tabContent.innerHTML = html;
  tabButtons.forEach(b => b.classList.remove("active"));
  document.querySelector(`[data-tab='${type}']`).classList.add("active");
  lucide.createIcons();
}

nextBtn.addEventListener("click", () => {
  currentRecipe = (currentRecipe + 1) % recipes.length;
  showRecipe(recipes[currentRecipe]);
  lucide.createIcons();
});

tabButtons.forEach(btn =>
  btn.addEventListener("click", () => showTab(btn.dataset.tab))
);

showRecipe(recipes[0]);

