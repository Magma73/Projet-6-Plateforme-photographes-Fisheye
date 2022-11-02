function openDropdown() {
    const wrapperSelect = document.querySelector(".wrapper__select");
    const buttonWrapper = document.querySelector(".button__wrapper");
    wrapperSelect.className += " active";
    buttonWrapper.setAttribute("aria-expanded", "true");
    // buttonWrapper.focus();
}
function closeDropdown() {
    const wrapperSelect = document.querySelector(".wrapper__select");
    const buttonWrapper = document.querySelector(".button__wrapper");
    wrapperSelect.className = "wrapper__select";
    buttonWrapper.setAttribute("aria-expanded", "false");
    buttonWrapper.focus();
}