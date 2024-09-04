import express from express
const express = app

const card = document.querySelector('.card__inner');

card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
})