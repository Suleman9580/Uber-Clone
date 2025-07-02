import { Link } from 'react-router-dom'



function Home() {
  return (
    <div className='bg-black h-screen p-8 pb-14 flex flex-col justify-between relative'>
      <h1 className='font-semibold text-3xl text-zinc-300'> Uber</h1>
      <p className='text-zinc-600 font-semibold absolute top-20'>with ❤️ designed by <br /> Mohd. Suleman </p>

      <div className=''>
        <p className='text-2xl text-zinc-400 text-center mb-2 font-semibold'>Getting Started With Uber...</p>
        <Link to='/user-login' className='inline-block text-zinc-400 text-center text-xl font-medium py-2 rounded-lg w-full bg-zinc-800'> Continue </Link>
      </div>
    </div>
  )
}

export default Home