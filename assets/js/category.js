
import { API_CATEGORY } from "./constant.js";
import { getAPI } from "./getAPI.js";
import { category, params } from "./variable.js";
import { drawProduct } from "./drawProducts.js";

getAPI(API_CATEGORY)
    .then(data => {
        // console.log(data);
        const htmlArray = data.map((item) => {
            return `
                <div class="category-item" data-category=${item}>
                    ${item}
                </div>
            `;
        })
        const htmlString = htmlArray.join("");
        category.innerHTML = htmlString;

        let listCategory = document.querySelectorAll("#category .category-item");
        // console.log(listCategory);
        listCategory.forEach(item => {
            item.addEventListener("click", () => {
                console.log(item.dataset.category);
                params.category = item.dataset.category;
                drawProduct();
            });
        });
    })