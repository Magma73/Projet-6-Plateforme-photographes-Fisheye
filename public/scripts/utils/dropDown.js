function openDropdown() {
    const wrapperSelect = document.querySelector(".wrapper__select");
    const buttonWrapper = document.querySelector(".button__wrapper");
    // const wrapperList = document.querySelector(".wrapper__list");
    const wrapperOption1 = document.querySelector(".wrapper__option--1");
    const body = document.querySelector("body");
    // const header = document.querySelector(".header");
    // const photographerHeader = document.querySelector(".photographer__header");
    // const containerMedias = document.querySelector(".container__medias");
    // const photographerFooter = document.querySelector(".photographer__footer");
    // header.setAttribute("aria-hidden", "true");
    // photographerHeader.setAttribute("aria-hidden", "true");
    // containerMedias.setAttribute("aria-hidden", "true");
    // photographerFooter.setAttribute("aria-hidden", "true");
    wrapperList.setAttribute("aria-hidden", "false");
    wrapperSelect.className += " active";
    buttonWrapper.setAttribute("aria-expanded", "true");
    body.classList.add("body--no-scroll");
    // wrapperList.focus();
    wrapperOption1.focus();
}
function closeDropdown() {
    const wrapperSelect = document.querySelector(".wrapper__select");
    const buttonWrapper = document.querySelector(".button__wrapper");
    const wrapperList = document.querySelector(".wrapper__list");
    const body = document.querySelector("body");
    // const header = document.querySelector(".header");
    // const main = document.querySelector(".content");
    // header.setAttribute("aria-hidden", "false");
    // main.setAttribute("aria-hidden", "false");
    wrapperList.setAttribute("aria-hidden", "true");
    wrapperSelect.className = "wrapper__select";
    buttonWrapper.setAttribute("aria-expanded","false");
    body.classList.remove("body--no-scroll");
    buttonWrapper.focus();
}
function changeName(currentOption){
    const buttonWrapper = document.querySelector(".button__wrapper");
    const optionText = currentOption.textContent;
    buttonWrapper.textContent = optionText;
    currentOption.classList.toggle("aria-selected");
}