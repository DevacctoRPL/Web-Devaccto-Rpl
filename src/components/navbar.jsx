import Code 


function Head() {
  
    window.addEventListener('scroll', function() {
      var nav = document.querySelector('nav');
      nav.classList.toggle('bg-white', window.scrollY > 0);
    });
  
    return (
  <nav className="bg-transparent transition-all duration-300 ease-in-out sticky top-0 w-full z-50">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <a href="#" className="text-slate-300 font-bold">
        
      </a>
      <ul className="flex">
        <li className="mx-4">
          <a href="#" className="text-gray-800 hover:text-slate-100">Home</a>
        </li>
        <li className="mx-4">
          <a href="#" className="text-gray-800 hover:text-slate-100">Projects</a>
        </li>
        <li className="mx-4">
          <a href="#" className="text-gray-800 hover:text-slate-100">Events</a>
        </li>
        <li className="mx-4">
          <a href="#" className="text-gray-800 hover:text-slate-100">Album</a>
        </li>
      </ul>
    </div>
  </nav>
  
    )
  }
  
  export default Head