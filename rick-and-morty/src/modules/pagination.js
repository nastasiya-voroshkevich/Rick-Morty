import { cardPage } from "./cards";
import { listBtns } from "./startPage";

export function listPage() {

    let active
    async function getDataCharacter(n) {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character")
            const dataCharacter = await response.json();

            let contentPagination = document.createDocumentFragment();
            if (n > 5) {

                const buttonPrev = document.createElement('button');
                buttonPrev.innerText = 'prev';
                buttonPrev.classList.add('page-btn__prev');
                contentPagination.appendChild(buttonPrev);
                buttonPrev.addEventListener('click', function () {

                    buttonPrev.classList.remove('hidden')
                    listBtns.innerHTML = '';
                    getDataCharacter(n - 5)

                })
            }
            pageNumbers(dataCharacter.info.pages, 5, n).forEach(el => {
                let button = document.createElement('button');

                button.innerText = el;
                button.classList.add('page-btn')
                button.setAttribute("correct-info", el);
                contentPagination.appendChild(button);

                listBtns.appendChild(contentPagination);
                button.addEventListener('click', () => {

                    document.querySelector('.page-btn').classList.remove('active')

                    if (active) {
                        active.classList.remove('active')
                    }
                    active = button
                    button.classList.add('active')
                    getRenderPage(`https://rickandmortyapi.com/api/character/?page=${Number(button.getAttribute("correct-info"))}`)

                })
            })

            if (n <= 37) {
                const buttonNext = document.createElement('button');
                buttonNext.innerText = 'next';
                buttonNext.classList.add('page-btn__next');
                contentPagination.appendChild(buttonNext);
                listBtns.appendChild(contentPagination);
                buttonNext.addEventListener('click', function () {

                    listBtns.innerHTML = '';
                    getDataCharacter(n + 5)

                })

            }
            document.querySelector('.page-btn').classList.add('active')

            getRenderPage(`https://rickandmortyapi.com/api/character/?page=${Number(document.querySelector('.page-btn').getAttribute("correct-info"))}`)

        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    getDataCharacter(1)
}


const pageNumbers = (total, max, current) => {
    const half = Math.round(max / 2);
    let to = max;
    if (current + half >= total) {
        to = total
    } else if (current > half) {
        to = current + half;
    }

    let from = to - max;
    return Array.from({ length: max }, (_, i) => (i + 1) + from)

}



const getRenderPage = (api) => {
    fetch(api)
        .then((response) => response.json())
        .then((users) => {
            cardPage(users.results)
        })
        .catch(() => console.log('some error'));
}
