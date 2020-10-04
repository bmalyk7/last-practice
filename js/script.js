/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

for(let i = 0; i<movieDB.movies.length;i++){
   movieDB.movies[i] = movieDB.movies[i].toUpperCase();
}
console.log(movieDB.movies);

// console.log(movieDB.movies.toUpperCase());

// console.log(movieDB.movies);

const promoAdv = document.getElementsByClassName("promo__adv");
promoAdv[0].remove();

const nameGenre = document.getElementsByClassName("promo__genre");
nameGenre[0].innerHTML = "ДРАМА";

const bck = document.getElementsByClassName("promo__bg");
bck[0].style.backgroundImage = "url('img/bg.jpg')";





const promoList = document.querySelector(".promo__interactive-list");
let y = document.getElementsByClassName("promo__interactive-item");

for (let i = 0; i < movieDB.movies.length; i++) {
    let newEl = document.createElement("li");
    let del = document.createElement("div");
    newEl.classList.add("promo__interactive-item");
    del.classList.add("delete");
    newEl.innerHTML = i + 1 + ". " + movieDB.movies[i];
    promoList.append(newEl);
    newEl.append(del);
}


const add = () => {
        for (let i = 0; i < movieDB.movies.length; i++) {
            let newEl = document.createElement("li");
            let del = document.createElement("div");
            newEl.classList.add("promo__interactive-item");
            del.classList.add("delete");
            newEl.innerHTML = i + 1 + ". " + movieDB.movies[i];
            promoList.append(newEl);
            newEl.append(del);
        }
    },


    delList = () => {
        for (let i = 0; i < movieDB.movies.length - 1; i++) {
            promoList.firstElementChild.remove();
        }

    },


    getInput = document.querySelector('button'),

    cut = () => {
        let x = document.getElementById("input").value;
        if (x.length > 21) {
            x = x.slice(0, 12) + "...";
            movieDB.movies.push(x);
        } else {
            movieDB.movies.push(x);
        }
    },

    getInputValue = (e) => {
        e.preventDefault();
        cut();
        delList();
        add();
        let delClicks = document.querySelectorAll(".delete");
        delClicks.forEach(delClick => {
            delClick.addEventListener('click', (e,target) => {
                let x = e.target;
                x.parentElement.remove();
            });
        });
    },


    delClicks = document.querySelectorAll(".delete");
delClicks.forEach(delClick => {
    delClick.addEventListener('click', (e,target) => {
        let x = e.target;
        
        let numberArr = movieDB.movies.indexOf(x.parentElement.innerText);
        console.log(numberArr);
        console.log(x.parentElement.innerText);
        console.log(movieDB.movies);
    });
});


getInput.addEventListener('click', getInputValue);



