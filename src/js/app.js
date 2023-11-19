const products = document.querySelector(".products");

let str = `    <div class="bg-slate-50 rounded-md p-2">
<div class="product__image h-[144px] mb-4">
  <div
    class="bg-slate-200 h-full w-full rounded-md flex items-center justify-center relative"
  >
    <img
      class="w-[66px] h-[112px]"
      src="/assets/images/Cart/1.png"
      alt=""
      srcset=""
    />

    <span
      class="sm:w-5 sm:h-5 w-7 h-7 rounded-full absolute bg-gray-300 inset-2 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        class="sm:w-3 sm:h-3 w-4 h-4 text-orange-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </span>
  </div>
</div>
<div class="product__content mx-2">
  <div class="flex items-center justify-between mb-4">
    <span class="text-stone-200 font-light text-sm">اپل</span>
    <div class="flex items-center">
      <span
        class="rounded-full bg-orange-500 w-4 h-4 block ring-1 ring-white z-30"
      ></span>
      <span
        class="rounded-full bg-purple-500 w-4 h-4 block ring-1 ring-white z-20 -mr-1"
      ></span>
      <span
        class="rounded-full bg-yellow-500 w-4 h-4 block ring-1 ring-white z-10 -mr-1"
      ></span>
      <span
        class="rounded-full bg-black w-4 h-4 block ring-2 ring-white z-0 -mr-1"
      ></span>
    </div>
  </div>
  <p class="text-[0.8rem] font-normal text-slate-800 mb-4">
    ساعت هوشمند اپل سری 6
  </p>
  <p
    class="text-[0.8rem] font-normal text-slate-800 text-left text-orange-700 mb-6"
  >
    ۱۲۳,۴۵۶,۷۸۰ تومان
  </p>

  <hr class="bg-slate-700" />

  <p
    class="w-full flex items-center justify-center text-orange-400 py-2 font-medium text-sm lg:text-md cursor-pointer"
  >
    مشاهده و سفارش
  </p>
</div>
</div>`;

let result = "";
for (let i = 0; i < 10; i++) {
  result += str;
}

products.innerHTML = result;

const sidebarFilter = document.querySelector(".sidebar__filter");
const arrBrand = ["اپل", "سامسونگ", "هوآوی", "الجی"];
let svgBrand = `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
class="w-5 h-5"
>
<path
  fill-rule="evenodd"
  d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
  clip-rule="evenodd"
/>
</svg>`;

const arrPrice = [
  "کمتر از ده میلیون",
  "کمتر از صد میلیون",
  "کمتر از میلیارد",
  "سایر",
];
let svgPrice = `   <svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="w-5 h-5"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
/>
</svg>
`;

createCheckedGroup("برند محصول", svgBrand, arrBrand, 1);
createCheckedGroup("قیمت محصول", svgPrice, arrPrice, 2);
createCheckedGroup("برند محصول", svgBrand, arrBrand, 3);
createCheckedGroup("قیمت محصول", svgPrice, arrPrice, 4);

function createCheckedGroup(title, icon, arr, id) {
  let items = "";

  arr.forEach((element) => {
    items += `
    <li class="w-full rounded-lg mr-2">
    <div class="flex items-center pl-3">
      <input
        id="vue-checkbox"
        type="checkbox"
        value=""
        class="w-4 h-4 ring-orange-500 bg-purple-800"
      />
      <label
        for="vue-checkbox"
        class="w-full py-3 mr-2 text-sm font-medium text-gray-900"
        >${element}
      </label>
    </div>
  </li>`;
  });

  let checkBoxGroup = ` <div class=" cursor-pointer w-full mt-4 bg-slate-200 p-2 rounded-md">
<div data-id=${id}  class="title__filter w-full flex items-center justify-between">
  <div class="flex">
    <span >
     ${icon}
    </span>
    <span class="mr-2 font-medium"> ${title}</span>
  </div>
  <div class="title__icon" >
    <span >
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-5 h-5 text-purple-950  transition-all ease-in-out delay-200"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
    </span>
  </div>
</div>
<div data-id=${id} class="content__filter mt-2 z-20 ">
  <ul
    class="w-full text-sm font-medium text-gray-900 bg-white rounded-md"
  >
  ${items}    
  </ul>
</div>
</div>
`;

  sidebarFilter.innerHTML += checkBoxGroup;
  disClosureSideBar();
}

function disClosureSideBar() {
  const titles = document.querySelectorAll(".title__filter");
  const content = document.querySelectorAll(".content__filter");
  const iconTitle = document.querySelectorAll(".title__icon");
  // console.log(titles);

  titles.forEach((title) => {
    title.addEventListener("click", (e) => {
       console.log(title.childNodes[3]);
      title.childNodes[3].childNodes[1].chil.classList.toggle("rotate-180");
      let id = title.dataset.id;
      // iconTitle.classList.toggle("rotate-90");
      content.forEach((c) => {
        if (c.dataset.id == id) {
          c.classList.toggle("hidden");
         
        } else {
          // title.childNodes[3].childNodes[1].classList.toggle("rotate-180");
          c.parentNode
            .getElementsByTagName("div")[0]
            // .childNodes[3].childNodes[1].classList.remove("rotate-180");
          c.classList.add("hidden");
        }
        c.addEventListener("click", () => console.log("Next time..."));
      });
    });
  });
}
