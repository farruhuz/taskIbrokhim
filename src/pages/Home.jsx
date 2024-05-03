import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen font-bold text-6xl'>
      <div className="flex justify-center items-center w-[50%] h-screen bg-red-500 text-white">
        <Link to="/task1">Task 1</Link>
      </div>
      <div className="flex justify-center items-center w-[50%] h-screen bg-teal-500 text-white">
        <Link to="/task2">Task 2</Link>
      </div>
    </div>
  )
}

export default Home