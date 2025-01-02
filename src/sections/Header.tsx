export const Header = () => {
  return (
  <div className='flex justify-center items-center relative top-9'>
    <nav className="flex gap-1 border p-0.5 border-white/15 rounded-full items-center bg-white/10 backdrop-blur fixed z-30">
      <a href="#" className="nav-item">Home</a>
      <a href="#projects" className="nav-item">Projects</a>
      <a href="#About" className="nav-item">About</a>
      <a href="https://www.linkedin.com/in/mselvad/" target="blank" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
    </nav>
  </div>
  )
};
