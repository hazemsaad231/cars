import { Outlet } from 'react-router-dom'
import Home from './Home'

const Master = () => {


    return (
        <div className='text-center'>
            <Outlet/>
        </div>
    )
}

export default Master