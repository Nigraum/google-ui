const searchContent = document.getElementById('search-content');

function handleFocusInput() {
  searchContent.classList.add('active')
}


function handleBlurInput() {
  setTimeout(() => searchContent.classList.remove('active'), 200)
}