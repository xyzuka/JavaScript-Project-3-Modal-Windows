"use strict";

//Caching variables
const show_modal1 = document.querySelector(".show_modal1");
const show_modal2 = document.querySelector(".show_modal2");
const show_modal3 = document.querySelector(".show_modal3"); //querySelector will only select the first element, ie button 1 - ergo you need to use querySelectorAll 
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const close_modal = document.querySelector(".close-modal");
const close_modal2 = document.querySelector(".close-modal2");
const close_modal3 = document.querySelector(".close-modal3");
const overlay = document.querySelector(".overlay");

//Function that opens the modal
const openModal1 = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden'); //adds background blur to modal pop up by removing the hidden class that hides the blur
} 
    //element.classList - returns a DOMTokenList which can be later modified. Eg above: we are removing the hidden class from the element modal

const openModal2 = function() {
    modal2.classList.remove('hidden');
    overlay.classList.remove('hidden'); 
} 

const openModal3 = function() {
    modal3.classList.remove('hidden');
    overlay.classList.remove('hidden'); 
} 

//Function that closes the modal
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const closeModal2 = function() {
    modal2.classList.add('hidden');
    overlay.classList.add('hidden');
}

const closeModal3 = function() {
    modal3.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Events to respond to a click event
show_modal1.addEventListener('click', openModal1);
show_modal2.addEventListener('click', openModal2);
show_modal3.addEventListener('click', openModal3);
//.addEventListener() - sets up a function that will be run whenever a specified event is delivered ie. a click in this case

//Close button functionality
close_modal.addEventListener('click', closeModal);
close_modal2.addEventListener('click', closeModal2);
close_modal3.addEventListener('click', closeModal3);

//Closes modal window when clicking outside
overlay.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal2);
overlay.addEventListener('click', closeModal3);

//ESC Keypress Event - using addEvenListener on the document as a global event
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeModal2();
        closeModal3();
    }
})