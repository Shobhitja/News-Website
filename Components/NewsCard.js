import React from 'react'
import Link from 'next/link';


const NewsCard = ({ newsData }) => {
    return (
        <>
            {
                newsData.map((curElem) => {
                    let { title, description, urlToImage, url, author, publishedAt } = curElem;
                    return <>

                        <div
                            className=" overflow-hidden hover:-translate-y-2 transition-all ease-linear duration-200 shadow-xl shadow-gray-600 h-full border- border-gray-500  rounded-xl flex flex-col ">


                            <div className=' '>
                                <img className='h-64 w-full' src={urlToImage ? urlToImage : "imgnotfound.png"} alt="Image not found" />

                            </div>

                            <div className="px-3 py-2   flex flex-col  gap-3  ">
                                <h5
                                    className=" cursor-pointer hover:text-blue-600 mb-2 text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
                                    {title ? title : ""}
                                </h5>
                                <span className='text-gray-500'>{description ? description.slice(0, 88) : 'Nothing in description'}</span>
                                <p className="mb-3">By {author ? author : 'unknown'} on {new Date(publishedAt).toGMTString()} </p>

                                <Link href={url}> <button className='border-4 w-fit bg-blue-700 text-white font-semibold rounded-lg p-2 hover:bg-blue-600'>Read More</button></Link>

                            </div>

                        </div>



                    </>
                })
            }


        </>

    )
}

export default NewsCard
