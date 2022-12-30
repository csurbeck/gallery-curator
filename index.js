/**
 * Name: Claire Surbeck
 * Date: October 23, 2022
 * Section: CSE 154 AA
 *
 * This is the index.js document that is used to add the user interactivity to my gallery generator
 * website where users can select pieces of art to be appended into their specifically-curated
 * gallery, where then they can experiment with framing styles.
 */

'use strict';
(function() {

  window.addEventListener('load', init);

  /**
   * Retrieves an array of articles with the pieces of art and adds EventListeners to each
   * article.
   */
  function init() {
    console.log("is this thing on?");
    let images = qsa('article');
    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("click", selected);
    }
    id("create-button").disabled = true;
  }

  /**
   * applies the selected class to the article with the image that was clicked in the toggle form
   * and enables the generate gallery button when user has selected 8 pieces of art.
   * @param {article} evt - the article that was clicked on by the user.
   */
  function selected(evt) {
    let button = qs('main > button');
    button.disabled = true;
    let imageClicked = evt.currentTarget;
    imageClicked.classList.toggle('selected');
    let selectedArtwork = qsa('.selected');
    let totalSelected = selectedArtwork.length;
    const NUMBER_OF_WORKS = 8;
    if (totalSelected === NUMBER_OF_WORKS) {
      button.disabled = false;
      button.addEventListener("click", genGallery);
    }
  }

  /**
   * Appends images with the selected class to the gallery section, enables the frame buttons and
   * adds event listeners, and removes the selected class from the images.
   */
  function genGallery() {
    let galleryImages = qsa('.selected');
    for (let i = 0; i < galleryImages.length; i++) {
      id("gallery-images").appendChild(galleryImages[i]);
    }

    let frameButtons = qsa('.button-frame');
    for (let i = 0; i < frameButtons.length; i++) {
      frameButtons[i].classList.remove('button-frame');
    }

    galleryImages = qsa('.selected');
    for (let i = 0; i < galleryImages.length; i++) {
      galleryImages[i].classList.remove('selected');
    }

    id("black-frame").addEventListener("click", blackFrame);
    id("white-frame").addEventListener("click", whiteFrame);
    id("gold-frame").addEventListener("click", goldFrame);
  }

  /** Puts a thick black border with a white mat around each picture in the generated gallery */
  function blackFrame() {
    let galleryImages = qsa("#gallery-images > article");
    for (let i = 0; i < galleryImages.length; i++) {
      galleryImages[i].classList.remove('white-frame-img');
      galleryImages[i].classList.remove('gold-frame-img');
      galleryImages[i].classList.add('black-frame-img');
    }
  }

  /** Puts a simple white border around each picture in the generated gallery */
  function whiteFrame() {
    let galleryImages = qsa("#gallery-images > article");
    for (let i = 0; i < galleryImages.length; i++) {
      galleryImages[i].classList.add('white-frame-img');
      galleryImages[i].classList.remove('gold-frame-img');
      galleryImages[i].classList.remove('black-frame-img');
    }
  }

  /** Puts a gold dotted border around each picture in the generated gallery */
  function goldFrame() {
    let galleryImages = qsa("#gallery-images > article");
    for (let i = 0; i < galleryImages.length; i++) {
      galleryImages[i].classList.remove('white-frame-img');
      galleryImages[i].classList.add('gold-frame-img');
      galleryImages[i].classList.remove('black-frame-img');
    }
  }

  /**
   * retrieves an HTML element by ID
   * @param {String} id - the id tag for an element in the HTML
   * @returns {Node} - the element from the HTML document
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * retrieves an HTML element by the selector parameter passed in
   * @param {String} selector - the selector id for elements in the HTML document
   * @returns {Node} - the element from the HTML document
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * retrieves an array of HTML elements that contains the selector parameter passed in
   * @param {String} selector - the selector tag for elements in the HTML document
   * @return {NodeList} - an array with the elements from the HTML document with the selector tag
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
})();

