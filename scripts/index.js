const searchContent = document.getElementById('search-content');

function handleFocusInput() {
  searchContent.classList.add('active')
}


function handleBlurInput() {
  searchContent.classList.remove('active')
}