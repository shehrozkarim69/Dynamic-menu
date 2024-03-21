class Meal {
    constructor(id, img, name, price, desc, tag) {
        this.id = id,
        this.img = img,
        this.name = name,
        this.price = price,
        this.desc = desc,
        this.tag = tag
    }
}

const allMeals = [
    (btrmlkPncks = new Meal(
        1,
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        "Buttermilk Pancakes",
        "15.99",
        "I'm baby flannel meh gentrify, sartorial sriracha DIY four dollar toast meggings bitters literally poutine craft beer crucifix banh mi.",
        "breakfast"
    )),
    (dnrDbl = new Meal(
        2,
        "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1716&q=80",
        "Diner Double",
        "13.99",
        "Iamps cloud bread irony, palo santo +1 90's poutine wolf.",
        "breakfast"
    )),
    (gdzlaMlksk = new Meal(
        3,
        "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=943&q=80",
        "Godzilla Milkshake",
        "6.99",
        "Seitan quinoa bicycle rights cronut activated charcoal vexillologist cornhole copper mug bespoke.",
        "shake"
    )),
    (ctryDlt = new Meal(
        4,
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        "Country Delight",
        "20.99",
        "Actually pork belly normcore, gluten-free seitan pinterest roof party try-hard franzen beard stumptown master cleanse fingerstache health goth.",
        "breakfast"
    )),
    (eggAtk = new Meal(
        5,
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1253&q=80",
        "Egg Attack",
        "22.99",
        "Air plant gastropub next level, jianbing plaid banh mi banjo lumbersexual.",
        "breakfast"
    )),
    (nyRubn = new Meal(
        6,
        "https://images.unsplash.com/photo-1614746526977-fac370353ae8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        "The Reuben",
        "16.99",
        "Butcher cold-pressed hoodie green juice next level irony freegan four dollar toast.",
        "lunch"
    )),
    (crqMsr = new Meal(
        7,
        "https://images.unsplash.com/photo-1531664412848-9610afed156c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
        "Croque Monsieur",
        "14.99",
        "Palo santo vaporware jianbing, twee YOLO portland cronut hexagon street art venmo vinyl pabst cloud bread.",
        "lunch"
    )),
    (mtbls = new Meal(
        8,
        "https://images.unsplash.com/photo-1615385361723-9f4c2daf42f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        "Swedish Meatballs",
        "22.99",
        "Af palo santo polaroid cardigan organic kogi. Woke squid etsy butcher.",
        "lunch"
    )),
    (oreoShk = new Meal(
        9,
        "https://images.unsplash.com/photo-1528740096961-3798add19cb7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
        "Oreo Milkshake",
        "8.99",
        "Unicorn pinterest VHS, next level pok pok ugh listicle vinyl blog gochujang.",
        "shake"
    )),
    (bananShk = new Meal(
        10,
        "https://images.unsplash.com/photo-1542444592-0d5997f202eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=942&q=80",
        "Banana Milkshake",
        "7.99",
        "Pinterest cronut scenester authentic, freegan prism 8-bit.",
        "shake"
    ))
]

const elements = {
    mealContainer: document.querySelector(".meal-display-container"),
    menuItem: document.querySelector(".menu-item"),
    menuItemImg: document.querySelector(".menu-item-image"),
    menuTitle: document.querySelector(".menu-copy-header-title"),
    menuPrice: document.querySelector(".price"),
    menuDesc: document.querySelector(".menu-copy-body"),
    allBtn: document.querySelector("#all-meals"),
    breakBtn: document.querySelector("#breakfast"),
    lnchBtn: document.querySelector("#lunch"),
    shksBtn: document.querySelector("#shakes")
}

elements.allBtn.addEventListener("click", function(){
    renderMeals(allMeals)
});

elements.breakBtn.addEventListener("click", function() {
    filterMeals(tag = "breakfast")
})

elements.lnchBtn.addEventListener("click", function() {
    filterMeals(tag = "lunch")
})

elements.shksBtn.addEventListener("click", function() {
    filterMeals(tag = "shake")
})




function renderMeals(meals) {
    elements.mealContainer.innerHTML = "";
    for(meal of meals) {
        let newMeal = `
        <div class="col-sm-12 col-md-6 menu-item" id="${meal.id}">
        <div class="col-sm-5 menu-item-image" style="background-image: url(${meal.img});"></div>
        <div class="col-sm-7 menu-copy">
          <div class="menu-copy-header">
            <h5 class="menu-copy-header-title">${meal.name}</h5>
            <p class="price">$${meal.price}</p>
          </div>
          <hr>
          <div class="menu-copy-body">
            <p>${meal.desc}</p>
          </div>
        </div>
      </div>
        `
        elements.mealContainer.insertAdjacentHTML('beforeend', newMeal)
    }
}

function filterMeals(taggie) {
    let filterList = allMeals.filter(meal => meal.tag === taggie);
    renderMeals(filterList)
}

(function init() {
    renderMeals(allMeals)
})();
