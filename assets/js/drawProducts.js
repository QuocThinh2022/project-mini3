
import { API_PRODUCT } from "./constant.js";
import { getAPI } from "./getAPI.js";
import { products, params } from "./variable.js";

export function drawProduct(q = params.q, sort = params.sort, order = params.order, page = params.page, limit = params.limit){
    let api = `${API_PRODUCT}?q=${q}&_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}`;
    if (params.category != "")
        api += `&category=${params.category}`;
    // console.log(api);
    getAPI(api)
        .then(data => {
            // console.log(data);
            const htmlArray = data.map((item) => {
                let discount = item.discountPercentage.toFixed(0);
                return `
                    <div class="product-item">
                        <div class="product-item__image">
                            <img src="${item.thumbnail}" alt="${item.title}">
                            <span class="product-item__discount">${discount}%</span>
                        </div>

                        <div class="product-item__content">
                            <h3 class="product-item__title">
                                ${item.title}
                            </h3>
                            <div class="product-item__footer">
                                <span class="product-item__price">
                                    $${item.price}
                                </span>
                                <span class="product-item__stock">
                                    Remain: ${item.stock}
                                </span>
                            </div>
                        </div>
                    </div>
                `;
            })
            products.innerHTML = htmlArray.join("");
        })
}


