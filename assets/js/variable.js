

export let params = {
    q: "",
    sort: "",
    order: "",
    page: 1,
    limit: 12,
    numberPage: 1,
    category: ""
}


export let category = document.querySelector("#category");
export let products = document.querySelector("#products");

export let buttonSearch = document.querySelector("#search button");
export let inputSearch = document.querySelector("#search input");
export let selectSort = document.querySelector("#sort");
export let pagination = document.querySelector("#pagination");
export let paginationPrev = document.querySelector("#pagination-prev");
export let paginationDigit = document.querySelector("#pagination-digit");
export let paginationNext = document.querySelector("#pagination-next");
