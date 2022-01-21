"use strict";

//Caching variables
const show_modal = document.querySelectorAll(".show-modal"); //querySelector will only select the first element, ie button 1 - ergo you need to use querySelectorAll 
const modal = document.querySelector(".modal");
const close_modal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

//Function that opens the modal
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden'); //adds background blur to modal pop up by removing the hidden class that hides the blur
} 
    //element.classList - returns a DOMTokenList which can be later modified. Eg above: we are removing the hidden class from the element modal

//Function that closes the modal
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Loop to respond to a click event
for (let i = 0; i < show_modal.length; i++)
    // console.log(show_modal[i].textContent); //node.textContent - returns the text content of a specified node ie. show_modal 
    show_modal[i].addEventListener('click', openModal);
    //.addEventListener() - sets up a function that will be run whenever a specified event is delivered ie. a click in this case

//Close button functionality
close_modal.addEventListener('click', closeModal);

//Closes modal window when clicking outside
overlay.addEventListener('click', closeModal);