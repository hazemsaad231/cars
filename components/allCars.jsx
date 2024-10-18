import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import carC from '../../src/assets/img/car3.png';
import star from '../../src/assets/img/star.png';
import user from '../../src/assets/img/user.png';
import air from '../../src/assets/img/air.png';
import frame from '../../src/assets/img/frame.png';

const AllCars = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    

    const getData = async () => {
        try {
            let response = await axios.get('https://myfakeapi.com/api/cars?limit=100');
            console.log(response);
            setData(response.data.cars);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const search = () => {
        return data.filter(item =>
            item.car.toUpperCase().includes(value.toUpperCase())
        );
    };

    const [currentPage, setCurrentPage] = useState(1); 
    const itemsPerPage = 8; 
    const end = currentPage * itemsPerPage;
    const start = end - itemsPerPage;
    const currentItems = search().slice(start, end); 
    const totalPages = Math.ceil(search().length / itemsPerPage);

    return (
        <div>
            <ul>
                <li><Link to={"/"} className='text-blue-400 absolute top-10 left-[5%] font-black text-3xl underline'>Home</Link></li>
            </ul>

            <div>
                <h2 className='text-2xl font-medium mt-40 mb-4'>Most popular cars rental deals</h2>
                <div>
                    <input
                        type="text"
                        placeholder='Search'
                        className='w-[40%] h-[4vh] mt-4 shadow-2xl border-2 border-gray-300 p-1 rounded-l-lg outline-blue-400'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button className='bg-blue-600 text-white h-[4vh] rounded-r-lg w-max px-2'>search</button>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-[80%] m-auto mt-20 place-items-center gap-2'>
                {currentItems.map((el) => (
                    <div key={el.id} className='flex flex-col text-center border-2 mb-4 shadow-2xl w-[100%] gap-2 py-2'>
                        <img src={carC} alt="image" className='w-50 h-50 m-auto mb-5' />
                        <h2 className='text-start font-medium text-2xl mt-2 ml-6 mb-4'>{el.car}</h2>
                        <div className='flex px-2'>
                            <img src={star} alt="" className='w-5 h-5' />
                            <span className='font-bold'>4.6</span>
                            <span className='text-gray-400'>(1345 reviews)</span>
                        </div>
                        <div className='flex justify-around'>
                            <div className='flex px-2'>
                                <img src={user} alt="" className='w-6 h-6' />
                                <span className='text-gray-600 text-sm sm:text-sm md:text-md lg:text-md xl:text-md'>2 Passanger</span>
                            </div>
                            <div className='flex'>
                                <img src={air} alt="" className='w-5 h-7' />
                                <span className='text-gray-600 text-sm sm:text-sm md:text-md lg:text-md xl:text-md'>Air conditioning</span>
                            </div>
                        </div>
                        <div className='flex font-serif justify-around'>
                            <div className='flex'>
                                <span className='text-gray-600 ml-1 text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg'>{el.car_model_year}</span>
                            </div>
                            <div className='flex ml-28'>
                                <img src={frame} alt="" className='w-5 h-5' />
                                <span className='text-gray-600 text-sm sm:text-sm md:text-md lg:text-md xl:text-md'>{el.transmission}</span>
                            </div>
                        </div>
                        <hr style={{ height: '2px', width: '80%', backgroundColor: 'gray', margin: 'auto' }} />
                        <div className='flex justify-around px-4 mt-5'>
                            <h5 className='font-serif'>price</h5>
                            <h5 className='font-bold'>{el.price}</h5>
                        </div>
                        <br />
                        <button className='m-auto bg-blue-600 text-white h-[4vh] rounded-lg p-2 px-8 hover:bg-blue-800'>
                            <Link to={'/Details'}>view details</Link>
                        </button>
                        <br />
                    </div>
                ))}

           
            </div>
                 {/* Pagination */}
                 <div className='flex w-max m-auto cursor-pointer text-md sm:text-md md:text-md lg:text-lg xl:text-xl mt-10 text-blue-600 rounded-xl mb-20'>
                    <button
                        className='p-2 border-blue-600 rounded-l-xl bg-blue-600 text-white cursor-pointer'
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>

                    <div className='border-2 p-2 border-blue-600'>
                        Page {currentPage} of {totalPages}
                    </div>

                    <button
                        className='p-2 border-blue-600 rounded-r-xl bg-blue-600 text-white cursor-pointer'
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
        </div>
    );
};

export default AllCars;
