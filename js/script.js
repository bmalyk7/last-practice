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


const promoAdv = document.getElementsByClassName("promo__adv");
promoAdv[0].remove();

const nameGenre = document.getElementsByClassName("promo__genre");
nameGenre[0].innerHTML = "ДРАМА";

const bck = document.getElementsByClassName("promo__bg");
bck[0].style.backgroundImage = "url('img/bg.jpg')";


let newList = document.getElementsByClassName("promo__interactive-item");
movieDB.movies.sort();

for(let i=0; i <newList.length;i++){
    
    newList[i].innerHTML =`${i+1}`+". " + movieDB.movies[i];
}











