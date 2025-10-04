//Creacio de Array's
const breakfastMenu = ['Pancakes: $12', 'Eggs Benedict: $14', 'Oatmeal: $10', 'Frittata: $13'];
const mainCourseMenu = ['Steak: $25', 'Pasta: $18', 'Burger: $15', 'Salmon: $22'];
const dessertMenu = ['Cake: $8', 'Ice Cream: $6', 'Pudding: $7', 'Fruit Salad: $5'];

// INSERSION DE DATOS EN EL HTML
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Platillo ${index + 1}: <span style="font-weight: bold;">${item}</span></p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;


// INSERSION DE DATOS EN EL HTML
let mainCourseItem ="";
mainCourseMenu.forEach((item, index)=>{
    mainCourseItem += `<p>Platillo ${index + 1}: ${item}</p>`;});
document.getElementById('mainCourseMenuItems').innerHTML = mainCourseItem;

// INSERSION DE DATOS EN EL HTML
let dessertItem ='';
for(let i =0; i <dessertMenu.length; i++){
    dessertItem += `<p>Platillo ${i + 1}: ${dessertMenu[i]}</p>`;}
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;