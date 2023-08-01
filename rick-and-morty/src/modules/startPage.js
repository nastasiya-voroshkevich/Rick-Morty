import { modeList } from "./mode-list";
import { listPage } from "./pagination";
import { scroll } from "./scroll";
import { loader } from "./loader";

export const contentList = document.querySelector('.wrapp-list');
export const wrappPages = document.querySelector('.wrapp-pages');

export const listPagesContent = document.querySelector('.list-page')
export const listBtns = document.querySelector('.list-btns')

export
   function startPage() {
   const scrolling = document.getElementById('scrolling')
   const pagination = document.getElementById('pagination')

   pagination.addEventListener('click', function () {
      pagination.checked = true;
      wrappPages.classList.remove('hidden')
      scrolling.checked = false;
      listBtns.innerHTML = '';
      contentList.innerHTML = '';
      contentList.classList.add('hidden')

      listPage()
   })

   scrolling.addEventListener('click', function () {
      scrolling.checked = true;
      pagination.checked = false;

      listPagesContent.innerHTML = '';
      contentList.innerHTML = '';
      wrappPages.classList.add('hidden');
      contentList.classList.remove('hidden');
      modeList()

   })



   modeList()
   scroll()
   loader()
}


