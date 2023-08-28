import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewSpinner from './NewSpinner';



const News = (props) => {
    const [newsData, setNewsData] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)


    const getInfo = async () => {
        setLoading(true)
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d543e82f8ce34b8a96a751c04bdd131d&page=${pageNum}&pageSize=9`
            const res = await fetch(url);
            const data = await res.json();
            console.log("Inside get Info ", data);
            // console.log("PAGE NUMBER", pageNum)
            setNewsData(data.articles)
            setTotalResults(data.totalResults)
            setLoading(false)

        } catch (error) {
            console.log(error);
        }
    }

    const prevClick = () => {
        setPageNum(pageNum - 1)
    }
    const nextClick = async () => {
        setPageNum(pageNum + 1)

    }


    useEffect(() => {
        getInfo()
    }, [])

    if (loading) {
        return <Spinner />
    }

    const fetchMoreData = async () => {
        setPageNum(pageNum + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=sports&apiKey=d543e82f8ce34b8a96a751c04bdd131d&page=${pageNum}&pageSize=8`
        const res = await fetch(url);
        const data = await res.json();
        let newData = data.articles
        setNewsData([...newsData, ...newData])
        // console.log("new News Data is", newsData)
        // console.log(newsData.length)
        setTotalResults(data.totalResults)
        // console.log(totalResults)
    }

    return <>

        <h1 className='text-2xl md:text-3xl font-semibold text-center my-6'>Top {props.category} Headlines </h1>
        <InfiniteScroll
            dataLength={newsData.length}
            next={fetchMoreData}
            hasMore={true ? newsData.length <= totalResults : false}
            loader={<NewSpinner />}
        >



            <div className='border- py-2 border-green-500 mx-auto w-[95%]  md:w-[90%] grid grid-rows-1 md:grid-cols-4 gap-6 md:gap-4'>
                <NewsCard newsData={newsData} />
            </div>

        </InfiniteScroll>

    </>

}

export default News

