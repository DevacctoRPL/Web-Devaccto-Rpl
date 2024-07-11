import Code from '../assets/code.png'

// fungsi saat di scrool warnanya berubah
function Head() {

  window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('bg-white', window.scrollY > 0);
  });




//   const sections = document.querySelectorAll('section');
// const navItems = document.querySelectorAll('nav a[data-scroll]');

// window.addEventListener('scroll', () => {
//     let currentSection = '';

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
        
//         if (window.scrollY >= sectionTop - sectionHeight / 3) {
//             currentSection = section.getAttribute('id');
//         }
//     });

//     navItems.forEach(navItem => {
//         navItem.classList.remove('text-red-600');
//         if (navItem.getAttribute('href').substring(1) === currentSection) {
//             navItem.classList.add('text-red-600');
//         }
//     });
// });

  return (
<nav className="bg-transparent transition-all duration-300 ease-in-out sticky top-0 w-full z-50 p-4">
  <div className="container mx-auto px-4 flex justify-between items-center">
    <a href="#">
      <img src={Code} alt="Devactor PL" className="w-12 h-12" />
    </a>
    <ul className="flex list-none">
      <li className="mx-4">
        <a href="#" className="text-gray-800 ">Home</a>
      </li>
      <li className="mx-4">
        <a href="#" className="text-gray-800 ">Division</a>
      </li>
      <li className="mx-4">
        <a href="#" className="text-gray-800 ">Project</a>
      </li>
      <li className="mx-4">
        <a href="#" className="text-gray-800 ">Event</a>
      </li>
    </ul>
  </div>
</nav>

  )
}

export default Head;