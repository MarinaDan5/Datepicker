const refs1 = {
  backdrop: document.querySelector('.backdrop'),
   switchEl: document.querySelector('#theme-switch-toggle'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs1.switchEl.addEventListener('change', onSwichClick)
refs1.switchEl.addEventListener('change', localStorageSaveTheme)

function onSwichClick(e) {
    const check = e.target.checked

    if (check) {
        refs1.backdrop.classList.add(Theme.DARK)
        refs1.backdrop.classList.remove(Theme.LIGHT)
    }
    else {
        refs1.backdrop.classList.remove(Theme.DARK)
        refs1.backdrop.classList.add(Theme.LIGHT)
    }
};

function localStorageSaveTheme (e) {
   const check = e.target.checked

    if (check) {
        localStorage.setItem('theme', Theme.DARK)  
    }
    else {
        localStorage.removeItem('theme', Theme.DARK)
        localStorage.setItem('theme', Theme.LIGHT) 
    }
}

function SaveSelectedTheme() {
    const localStorageItem = localStorage.getItem('theme')

    if (localStorageItem === Theme.LIGHT) {
        refs1.backdrop.classList.add(Theme.LIGHT);
        refs1.switchEl.checked = true;
    }

}
SaveSelectedTheme();