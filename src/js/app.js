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

let result= "";
for(let i=0;i<10;i++){
    result += str;
}

products.innerHTML = result;