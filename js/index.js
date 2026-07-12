var recipes = [
  {
    name: "French Onion Soup",
    desc: "Rich and deeply flavorful classic French soup with caramelized onions, beef broth, and melted Gruyère cheese.",
    image: "images/French Onion Soup.avif",
    prepTime: "15 min",
    cookTime: "1 hour",
    servings: "4 people",
    review: "4.8 (340 reviews)",
    categories: ["Intermediate", "French", "Soup"],
    ingredients: ["4 large yellow onions, thinly sliced", "2 tbsp unsalted butter", "1 tbsp olive oil", "4 cups beef stock", "1/2 cup dry white wine", "2 garlic cloves, minced", "1 baguette, sliced into rounds", "1 cup Gruyère cheese, grated", "Fresh thyme leaves"],
    instructions: ["Melt butter and oil in a large pot, add onions, and cook slowly for 45 minutes.", "Add garlic and thyme, cooking for 2 more minutes.", "Pour in white wine to deglaze the pot, scraping up the browned bits.", "Add beef stock, bring to a simmer, and cook for 20 minutes.", "Top with bread and cheese, and broil until golden brown."],
    tips: ["Patience is key for the onions; do not rush the caramelization process.", "Use high-quality beef stock for the best flavor depth."],
    nutrition: { calories: "380 kcal", protein: "16g", carbohydrates: "32g", fat: "18g", fiber: "4g", sodium: "920 mg" }
  },
  {
    name: "Classic Beef Burger",
    desc: "Juicy double-patty beef burger with melted cheese, fresh lettuce, pickles, onions, and a signature sauce.",
    image: "images/Classic Beef Burger.avif",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: "2 people",
    review: "4.9 (680 reviews)",
    categories: ["Easy", "American", "Fast Food"],
    ingredients: ["400g ground beef", "2 brioche burger buns", "2 slices Cheddar cheese", "1/2 cup iceberg lettuce", "4 pickle slices", "1/2 white onion", "1 tomato, sliced", "2 tbsp mayonnaise", "1 tbsp ketchup"],
    instructions: ["Divide ground beef into 4 equal portions and shape into thin patties.", "Mix mayonnaise and ketchup to create the signature burger sauce.", "Heat a cast-iron skillet over high heat and sear patties for 2-3 mins per side.", "Place cheese on top during the last minute of cooking to melt.", "Toast buns, spread sauce, and layer all toppings."],
    tips: ["Do not press down on the patties while cooking to keep them juicy.", "Indent the center of the patties slightly before cooking to prevent swelling."],
    nutrition: { calories: "750 kcal", protein: "42g", carbohydrates: "40g", fat: "45g", fiber: "2g", sodium: "1150 mg" }
  },
  {
    name: "Beef Tacos",
    desc: "Vibrant and flavorful soft tacos loaded with seasoned beef, fresh avocados, diced vegetables, and a squeeze of lime juice.",
    image: "images/Beef Tacos.avif",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "3 people",
    review: "4.7 (420 reviews)",
    categories: ["Easy", "Mexican"],
    ingredients: ["300g lean ground beef", "6 small corn tortillas", "1 tbsp taco seasoning mix", "1 avocado, sliced", "1/2 cup cherry tomatoes", "1/4 cup red onion", "1 jalapeno, sliced", "1 lime wedges"],
    instructions: ["Brown the ground beef in a skillet over medium-high heat, draining excess fat.", "Add taco seasoning along with 1/4 cup of water, simmer until liquid reduces.", "Warm the tortillas in a dry skillet for a few seconds.", "Assemble tacos by adding seasoned beef to each tortilla.", "Top with avocado slices, tomatoes, red onions, and fresh lime juice."],
    tips: ["Warm the tortillas thoroughly to make them pliable and prevent tearing.", "Offer extra lime wedges on the side for a bright finish."],
    nutrition: { calories: "490 kcal", protein: "28g", carbohydrates: "38g", fat: "24g", fiber: "6g", sodium: "780 mg" }
  },
  {
    name: "Caprese Sandwich",
    desc: "A fresh and simple Italian sandwich featuring soft mozzarella cheese, juicy tomatoes, and vibrant greens on a crispy baguette.",
    image: "images/Caprese Sandwich.avif",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: "1 person",
    review: "4.6 (190 reviews)",
    categories: ["Easy", "Italian", "Vegetarian"],
    ingredients: ["1 individual baguette", "100g fresh mozzarella", "1 medium tomato, sliced", "1/2 cup arugula", "1 tbsp basil pesto", "1 tsp balsamic glaze", "1 tbsp olive oil"],
    instructions: ["Slice the baguette lengthwise and drizzle interior with olive oil.", "Spread a generous layer of basil pesto on the bottom half.", "Layer the fresh mozzarella slices and tomato slices alternately.", "Season tomatoes with a pinch of salt and black pepper.", "Top with salad greens, drizzle balsamic glaze, and close."],
    tips: ["Use ripe, room-temperature tomatoes for the best aromatic flavor.", "Toasting the bread beforehand adds a wonderful texture contrast."],
    nutrition: { calories: "510 kcal", protein: "22g", carbohydrates: "54g", fat: "22g", fiber: "3g", sodium: "650 mg" }
  },
  {
    name: "Pad Thai",
    desc: "Classic Thai stir-fried rice noodles with succulent shrimp, bean sprouts, eggs, and a tangy tamarind sauce.",
    image: "images/Pad Thai.avif",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2 people",
    review: "4.8 (580 reviews)",
    categories: ["Intermediate", "Thai", "Noodles"],
    ingredients: ["150g flat rice noodles", "200g large shrimp", "2 eggs, beaten", "1 cup bean sprouts", "3 green onions", "2 tbsp Pad Thai paste", "1 tbsp fish sauce", "1 tbsp brown sugar", "2 tbsp crushed peanuts"],
    instructions: ["Soak rice noodles in warm water for 30 minutes, then drain.", "Heat oil in a wok, cook shrimp until pink, then set aside.", "In the same wok, pour in eggs and scramble gently.", "Add noodles, Pad Thai paste, fish sauce, and sugar, stir-fry rapidly.", "Toss in cooked shrimp, bean sprouts, green onions, and peanuts."],
    tips: ["Prepare all ingredients beforehand as stir-frying happens very quickly.", "If the noodles seem too firm, add a splash of water during stir-frying."],
    nutrition: { calories: "580 kcal", protein: "29g", carbohydrates: "72g", fat: "18g", fiber: "4g", sodium: "1100 mg" }
  },
  {
    name: "Lasagna Bolognese",
    desc: "Layered comfort food at its finest, made with rich meat sauce, creamy béchamel, and melted cheese baked to perfection.",
    image: "images/Lasagna Bolognese.avif",
    prepTime: "30 min",
    cookTime: "50 min",
    servings: "6 people",
    review: "4.9 (720 reviews)",
    categories: ["Intermediate", "Italian", "Baking"],
    ingredients: ["12 lasagna noodle sheets", "400g Bolognese sauce", "2 cups béchamel sauce", "2 cups mozzarella, shredded", "1/2 cup Parmesan, grated"],
    instructions: ["Preheat oven to 180°C (350°F).", "Spread a thin layer of Bolognese sauce at the bottom of a baking dish.", "Arrange layers of lasagna sheets, Bolognese, béchamel, and mozzarella.", "Repeat layers until complete, finishing with a dense layer of cheeses.", "Bake for 40 minutes under foil, then 10 minutes uncovered."],
    tips: ["Let the lasagna rest for 15 minutes after baking so it cuts into clean layers.", "Ensure the béchamel is smooth to achieve a velvety texture throughout."],
    nutrition: { calories: "670 kcal", protein: "34g", carbohydrates: "48g", fat: "36g", fiber: "3g", sodium: "980 mg" }
  },
  {
    name: "Greek Moussaka",
    desc: "A traditional baked Greek specialty featuring layers of spiced minced meat and golden fried potato pastries.",
    image: "images/Greek Moussaka.avif",
    prepTime: "25 min",
    cookTime: "40 min",
    servings: "4 people",
    review: "4.7 (230 reviews)",
    categories: ["Intermediate", "Greek"],
    ingredients: ["8-10 pre-made potato samosas", "300g minced lamb", "1 onion, chopped", "2 garlic cloves, minced", "1 cup tomato puree", "1/2 tsp ground cinnamon", "1 cup Greek yogurt"],
    instructions: ["Sauté onions and garlic, add minced meat and brown completely.", "Stir in tomato puree, cinnamon, salt, and pepper; simmer for 15 mins.", "Arrange a foundation layer of crisp samosas into a baking dish.", "Pour the seasoned meat sauce evenly over the pastry layer.", "Top with a smooth layer of yogurt and bake at 190°C for 25 mins."],
    tips: ["Ensure the meat mixture is relatively dry so the pastry base stays crisp.", "A pinch of cinnamon gives the dish its authentic Mediterranean flavor."],
    nutrition: { calories: "540 kcal", protein: "26g", carbohydrates: "42g", fat: "29g", fiber: "4g", sodium: "810 mg" }
  },
  {
    name: "Thai Green Curry",
    desc: "A fragrant, aromatic, and spicy curry cooked with coconut milk, chicken, and fresh Thai sweet basil.",
    image: "images/Thai Green Curry.avif",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "3 people",
    review: "4.8 (410 reviews)",
    categories: ["Intermediate", "Thai", "Spicy"],
    ingredients: ["400g chicken breast, sliced", "2 tbsp green curry paste", "1 can coconut milk", "1 cup bamboo shoots", "1 red chili, sliced", "1 tbsp fish sauce", "1 tsp brown sugar", "Thai basil leaves"],
    instructions: ["Fry green curry paste in a deep pot with a little oil for 2 mins.", "Gradually pour in half of the coconut milk until oil surfaces.", "Add chicken slices and cook for 5 minutes until opaque.", "Pour remaining milk, bamboo shoots, fish sauce, and sugar; simmer 10 mins.", "Stir in fresh Thai basil leaves and sliced red chilies."],
    tips: ["Searing the curry paste properly unlocks the deep aromatics.", "Adjust the quantity of curry paste to control the heat level."],
    nutrition: { calories: "420 kcal", protein: "32g", carbohydrates: "12g", fat: "28g", fiber: "2g", sodium: "850 mg" }
  },
  {
    name: "Mediterranean Quinoa Bowl",
    desc: "A nourishing, colorful plant-based bowl loaded with crispy seasoned tofu, fresh vegetables, edamame, and corn.",
    image: "images/Mediterranean Quinoa Bowl.avif",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "2 people",
    review: "4.7 (290 reviews)",
    categories: ["Easy", "Healthy", "Vegetarian"],
    ingredients: ["1 cup quinoa, cooked", "200g firm tofu, cubed", "1/2 cup edamame beans", "1/2 cup sweet corn", "1/2 cup cherry tomatoes", "1/2 cup cucumber", "1/4 cup red cabbage"],
    instructions: ["Pan-fry tofu cubes in olive oil until golden brown on all sides.", "Divide pre-cooked quinoa evenly between two serving bowls.", "Arrange sections of tofu, edamame, corn, tomatoes, and cucumbers.", "Garnish with shredded red cabbage and green onions.", "Serve with your choice of light dressing or vinaigrette."],
    tips: ["Pressing the tofu to remove excess moisture ensures it gets crispy.", "Batch-cook quinoa ahead of time for ultra-fast meal assembly."],
    nutrition: { calories: "460 kcal", protein: "21g", carbohydrates: "58g", fat: "16g", fiber: "9g", sodium: "480 mg" }
  }
];

var currentRecipeIndex = 0;
var activeTab = 'ingredients';

function displayRecipe() {
  var currentItem = recipes[currentRecipeIndex];

  document.getElementById('recipe-name').innerText = currentItem.name;
  document.getElementById('recipe-desc').innerText = currentItem.desc;
  document.getElementById('recipe-img').src = currentItem.image;
  document.getElementById('recipe-review').innerText = currentItem.review;
  document.getElementById('recipe-prep').innerText = currentItem.prepTime;
  document.getElementById('recipe-cook').innerText = currentItem.cookTime;
  document.getElementById('recipe-servings').innerText = currentItem.servings;

  var tagsHtml = "";
  var tagsToShow = currentItem.categories.length > 2 ? 2 : currentItem.categories.length;
  for (var i = 0; i < tagsToShow; i++) {
    var cat = currentItem.categories[i];
    var badgeColor = i % 2 === 0 ? 'bg-success-subtle text-success' : 'bg-primary-subtle text-primary';
    tagsHtml += `<span class="badge ${badgeColor} px-2.5 py-1 rounded" style="font-size: 11px;">${cat}</span>`;
  }
  document.getElementById('recipe-categories').innerHTML = tagsHtml;

  renderTabContent();
}

function renderTabContent() {
  var currentItem = recipes[currentRecipeIndex];
  var displayBox = document.getElementById('dynamic-tab-content');
  var outputHtml = "";

  switch (activeTab) {
 case 'ingredients':
      outputHtml = `<div class="p-3 bg-orange-subtle rounded-3">`;
      for (var i = 0; i < currentItem.ingredients.length; i++) {
        var item = currentItem.ingredients[i];
        outputHtml += `
          <div class="d-flex align-items-center py-2 px-1">
            <span class="badge bg-orange text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style="width: 24px; height: 24px; font-size: 12px;">${i + 1}</span>
            <span class="text-dark fw-medium">${item}</span>
          </div>`;
      }
      outputHtml += `</div>`;
      break;
      
     
    case 'instructions':
      for (var i = 0; i < currentItem.instructions.length; i++) {
        var step = currentItem.instructions[i];
        outputHtml += `
          <div class="d-flex align-items-start mb-3">
            <span class="step-number me-3 flex-shrink-0">${i + 1}</span>
            <p class="m-0 text-dark pt-0.5" style="font-size: 14px;">${step}</p>
          </div>`;
      }
      break;

    case 'nutrition':
      if (currentItem.nutrition) {
        var facts = currentItem.nutrition;
        outputHtml = `
          <div class="row g-3">
            <div class="col-6"><div class="nutrition-card"><span class="text-muted small"><i class="fa-solid fa-fire text-orange me-2"></i>Calories</span><span class="fw-bold">${facts.calories}</span></div></div>
            <div class="col-6"><div class="nutrition-card"><span class="text-muted small"><i class="fa-solid fa-dumbbell text-primary me-2"></i>Protein</span><span class="fw-bold">${facts.protein}</span></div></div>
            <div class="col-6"><div class="nutrition-card"><span class="text-muted small"><i class="fa-solid fa-wheat-awn text-warning me-2"></i>Carbs</span><span class="fw-bold">${facts.carbohydrates}</span></div></div>
            <div class="col-6"><div class="nutrition-card"><span class="text-muted small"><i class="fa-solid fa-droplet text-danger me-2"></i>Fat</span><span class="fw-bold">${facts.fat}</span></div></div>
            <div class="col-6"><div class="nutrition-card"><span class="text-muted small"><i class="fa-solid fa-seedling text-success me-2"></i>Fiber</span><span class="fw-bold">${facts.fiber}</span></div></div>
            <div class="col-6"><div class="nutrition-card"><span class="text-muted small"><i class="fa-solid fa-cube text-info me-2"></i>Sodium</span><span class="fw-bold">${facts.sodium}</span></div></div>
          </div>`;
      }
      break;

    case 'tips':
      if (currentItem.tips) {
        for (var i = 0; i < currentItem.tips.length; i++) {
          var tipItem = currentItem.tips[i];
          outputHtml += `
            <div class="list-item-custom d-flex align-items-center" style="border-left-color: #ffb300;">
              <i class="fa-solid fa-circle-check text-warning me-3 fs-5"></i>
              <span>${tipItem}</span>
            </div>`;
        }
      }
      break;
  }

  displayBox.innerHTML = outputHtml;
}

function switchTab(tabName) {
  activeTab = tabName;
  var tabButtons = document.querySelectorAll('#recipeTabs button');
  for (let button of tabButtons) {
    button.classList.remove('active');
  }
  document.getElementById(`${tabName}-tab`).classList.add('active');
  renderTabContent();
}

function getRandomRecipe() {
  currentRecipeIndex++;
  if (currentRecipeIndex > recipes.length - 1) {
    currentRecipeIndex = 0;
  }
  displayRecipe();
}

window.addEventListener('DOMContentLoaded', () => {
  displayRecipe();
  document.getElementById('random-btn').addEventListener('click', getRandomRecipe);
});