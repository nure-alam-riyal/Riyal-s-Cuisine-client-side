import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../Components/FoodCard";
import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";


const AllFoods = () => {
    const [search, setSearch] = useState('')
    const [highPrice, setHPrice] = useState('')
    const [bestSale, setBPrice] = useState('')
    const [maxProduct, setMPrice] = useState('')

    const [toppurchesfood, setTopPurchesFoods] = useState([])

    useEffect(() => {
        axios.get('https://riyal-s-cuisine-sever-side.vercel.app/FFallfoods', {
            withCredentials: true
        })
            .then(res => setTopPurchesFoods(res.data))
    }, [])
    useEffect(() => {
        // const handleSearch=e=>{
        // console.log(e.target.value)
        axios.get(`https://riyal-s-cuisine-sever-side.vercel.app/allfoods?name=${search}&max=${maxProduct}&best=${bestSale}&high=${highPrice}`)

            .then(res => setTopPurchesFoods(res.data))

        //    }
    }, [search, maxProduct, bestSale, highPrice])
    console.log(highPrice)
    return (
        <section>
            <Helmet>
                <title>AllFoods |Riyal`s Cuisine</title>
            </Helmet>
            <div className="bg-allfoodsbg mb-20 bg-cover h-[300px] rounded-lg">
                <div className="w-full h-full flex items-center justify-center text-center">
                    <div className="text-center text-green-700 md:w-10/12 lg:w-8/12">
                        <Fade direction="top-right"> <h1 className="text-center text-red-950 text-4xl font-Handlee font-bold">Track Every Order in Real Time to Enhance Service Quality</h1></Fade>
                        <Fade direction="bottom-left">  <p className="my-5  text-white">Exceed customer expectations by optimizing operations, enhancing service quality, and creating unforgettable moments that keep diners returning for more.</p></Fade>

                    </div>
                </div>
            </div>
            <div className="my-6 flex justify-evenly">
                {/* <select defaultValue="Sort Price" className="select select-success">
                    <option disabled={true}>Sort Price</option>
                    <option  value={'high'}> <p onClick={() => setHPrice('high')}>Upper  to Lower</p></option>
                    <option value={'low'} onClick={() => setHPrice('low')}>Lower to Upper</option>

                
                </select> */}
                <div className="dropdown">
                    <div tabIndex="0" className=" border px-4 py-2 rounded border-success">
                        Sort by Price
                    </div>
                    <ul tabIndex="0" className=" dropdown-content z-30 w-full bg-slate-400" >

                        <li className="btn" onClick={() => setHPrice('-1')}>Upper to Lower</li>
                        <li className="btn" onClick={() => setHPrice('1')}>Lower to Upper</li>

                    </ul>

                </div>
                <div className="flex md:w-1/3 mx-auto justify-center relative"><input onChange={(e) => setSearch(e?.target?.value)} className="p-3  w-full border rounded-lg" type="search" name="" id="" placeholder="search by food name" /> <FaSearch className="absolute top-4 left-[90%] "></FaSearch> </div>
                <div className="dropdown">
                    <div tabIndex="0" className=" border px-4 py-2 rounded border-success">
                        Sort by Quantiity
                    </div>
                    <ul tabIndex="0" className=" dropdown-content z-30 w-full " >

                        <li className="btn" onClick={() => setBPrice('1')}>Best Sale</li>
                        <li className="btn" onClick={() => setMPrice('1')}>Maximum Foods</li>

                    </ul>

                </div>
            </div>
            <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    toppurchesfood?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)

                }
            </div>
        </section>
    );
};

export default AllFoods;
// https://resturant-management-server-side.vercel.app/