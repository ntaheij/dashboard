export const checkTheme = () => {
  if(!('theme' in localStorage)) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      switchDarkClasses();
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  } else {
    if(localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      switchDarkClasses();
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

export const switchTheme = () => {
  if (localStorage.theme === 'light') {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }

  switchDarkClasses();
}

export const DarkModeButton = () => {
  return (
    <div className="dark-mode">
            <button onClick={switchTheme} role="button" id="toggle-dark" className="dark-mode">
                <i className="fas fa-sun fa-2x" id="toggle-dark-icon"></i>
            </button>
      </div>
  );
}

function switchDarkClasses() {
  var root = document.querySelector(':root');
  var rootLight = getComputedStyle(root).getPropertyValue('--light');
  var rootDark = getComputedStyle(root).getPropertyValue('--dark');

  var toggleDarkModeIcon = document.getElementById('toggle-dark-icon');

  root.style.setProperty('--light', rootDark);
  root.style.setProperty('--dark', rootLight);

  if(rootDark == getComputedStyle(root).getPropertyValue('--alwaysLight')) {
    toggleDarkModeIcon.className = "fas fa-moon fa-2x";
  } else {
      toggleDarkModeIcon.className = "fas fa-sun fa-2x";
  }
}