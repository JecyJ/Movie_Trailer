import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState('');
  const navigate  = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(search) {
      navigate('/searched/' + search);
    } else {
      navigate('/');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='relative w-full h-9 max-w-[400px] sm:max-w-[550px] m-auto'>
      <div className="flex items-center">
        <AiOutlineSearch className='absolute z-3 fill-milk ml-1 ' size={25} />
        <input 
          className='w-full h-9 pl-8 bg-dark/60 rounded-xl text-milk' 
          type={search}
          onChange={(e) => {setSearch(e.target.value)}} />
      </div>
    </form>
  )
}

export default Search;