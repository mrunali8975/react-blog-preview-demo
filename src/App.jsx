import './App.css';
import image from '../public/assets/images/illustration-article.svg'
import logo from '/assets/images/image-avatar.webp'
function App() {
  return (
    <div className="App flex items-center justify-center min-h-screen">
      <div className='bg-customWhite flex flex-col items-center  h-3/4  shadow-custom w-64  pb-5	 border-2 border-black rounded-lg '>
       <img src={image} alt="" className='w-11/12 h-54 my-4  '  />
       <div className='self-start mx-5' >
        <div className='w-20 p-2 rounded-md flex items-center justify-center  h-6 bg-customYellow'>
        <p className='text-sm font-bold font-figtree'>
          Learning
        </p>
      
        </div>
        <p className='text-xs my-2 ml-0.5 font-figtree font-normal text-black'>
          Published 21 Dec 2023
        </p>
        <p className='font-figtree font-bold hover:text-customYellow'>
          HTML & CSS foundations
        </p>
        <div>
        <p className='text-customGray500 text-sm leading-6 '>
        These languages are the backbone of every website, defining structure, content, and presentation. 
        </p>
        </div>
        <div className='flex items-center my-4 '>
          <img src={logo} alt="" className='w-4 h-4 mr-2' />
          <p className='text-xs font-figtree font-bold'>Greg Hooper</p>
        </div>
       
       </div>

      </div>
     
      </div>
  );
}

export default App;
