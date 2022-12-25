import React, { useState, useEffect } from 'react'

import NewsCard from './NewsCard';
import Spinner from './Spinner'
import Testimonials from './Testimonials';

const News = (props) => {

    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [pageNUM, setPageNUM] = useState(1);
    const [totalResults, setTotalResults] = useState(0)

    const getInfo = async () => {
        setLoading(true)
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d1f75c0efb29430bb6379431de11d3d8&page=${pageNUM}&pageSize=9`
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setNewsData(data.articles)
            setTotalResults(data.totalResults)
            setLoading(false)

        } catch (error) {
            console.log(error);
        }
    }


    const nextClick = async () => {

        setPageNUM(pageNUM + 1)
        await getInfo();



    }
    const prevClick = async () => {
        setPageNUM(pageNUM - 1)
        getInfo();


    }



    useEffect(() => {
        getInfo();
    }, [])

    if (loading) {
        return < Spinner />
    }

    return (
        <>
            <h1 className='text-center text-3xl font-bold my-16 '>Early Bird News - Top {props.category} Headlines</h1>
            <div className="grid grid-cols-3 "><NewsCard newsData={newsData} /></div>

            <div className="container flex flex-row gap-[72rem]">
                <button type="button" className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-5 ml-24" onClick={prevClick} disabled={pageNUM <= 1}> &larr;Previous</button>
                <button type="button" className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-5" disabled={pageNUM + 1 > Math.ceil(totalResults / 9)} onClick={nextClick}>Next&rarr;</button>
            </div>

            <div >
                <Testimonials />
            </div>

        </>
    )
}

export default News