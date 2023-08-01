import { contentList } from "./startPage";
import { listPagesContent } from "./startPage";
import { popup } from "./popup";

export function cardPage(el) {


  listPagesContent.innerHTML = '';
  el.forEach(i => {

    let divCard = document.createElement("div");
    divCard.classList.add("card");
    listPagesContent.append(divCard);
    let tmpIMG = new Image();
    let img = document.createElement("img");
    img.className = "card-img";
    tmpIMG.src = i.image;
    tmpIMG.onload = () => {
      img.src = tmpIMG.src;
    };

    divCard.append(img);
    let pTitle = document.createElement("p");
    pTitle.classList.add("card-title");
    pTitle.innerText = `${i.name}`;
    divCard.append(pTitle);
    divCard.addEventListener('click', function () {
      popup(i)



    })
  })

}




export function cardList(el) {


  el.forEach(i => {


    let divCard = document.createElement("div");
    divCard.classList.add("card");
    contentList.append(divCard);
    let tmpIMG = new Image();
    let img = document.createElement("img");
    img.className = "card-img";
    tmpIMG.src = i.image;
    tmpIMG.onload = () => {
      img.src = tmpIMG.src;
    };

    divCard.append(img);
    let pTitle = document.createElement("p");
    pTitle.classList.add("card-title");
    pTitle.innerText = `${i.name}`;
    divCard.append(pTitle);
    divCard.addEventListener('click', function () {
      popup(i)


    })
  })

}



