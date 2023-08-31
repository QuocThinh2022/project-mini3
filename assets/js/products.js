import { drawProduct } from "./drawProducts.js";
import * as fvar from "./variable.js";

drawProduct();

function search() {
    let value = fvar.inputSearch.value;
    fvar.params.q = value;
    // console.log(params)
    drawProduct();
}

fvar.buttonSearch.addEventListener("click", () => {search()})
fvar.inputSearch.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        search();
    }
})
fvar.selectSort.addEventListener("change", (e) => {
    let arr = e.target.value.split("_");
    fvar.params.sort = arr[0];
    fvar.params.order = arr[1];
    drawProduct();
})

fvar.paginationPrev.addEventListener("click", (e) => {
    if (fvar.params.page > 1) {
        fvar.params.page--;
        fvar.paginationDigit.innerHTML = fvar.params.page;
        drawProduct();
    }
})

fvar.paginationNext.addEventListener("click", (e) => {
    if (fvar.params.page < 100) {
        fvar.params.page++;
        fvar.paginationDigit.innerHTML = fvar.params.page;
        drawProduct();
    }
})
