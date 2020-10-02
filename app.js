const profileButton = document.querySelector('.header-profile-wrapper');
const profileModal = document.querySelector('.header-profile-modal');
const dropdownArrow = document.querySelector('.dropdown-arrow');

profileButton.addEventListener('click', () => {
    profileModal.classList.toggle('open')
    dropdownArrow.classList.toggle('rotate')
})
