const historyCache = JSON.parse(localStorage.getItem('clone-google-history')) || []
const BASE_URL = 'https://www.google.com/search?q='
const searchContent = document.getElementById('search-content');

function handleFocusInput() {
  searchContent.classList.add('active')
}


function handleBlurInput() {
  setTimeout(() => searchContent.classList.remove('active'), 200)
}

function handleKeyDown(event) {
  if(event.key === 'Enter') {
    const value = event.target.value
    historyCache.push(value)
    location.href = BASE_URL.concat(value)
    localStorage.setItem('clone-google-history', JSON.stringify(historyCache))
  }
}