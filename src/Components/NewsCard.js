import React from 'react'

const NewsCard = ({ newsData }) => {
    return (
        <>
            {
                newsData.map((curElem) => {
                    let { title, description, urlToImage, url, author, publishedAt } = curElem;
                    return (
                        <div className="flex justify-center" key={url}>
                            <div className="rounded-lg shadow-lg bg-white max-w-sm">

                                <a href="#!">
                                    <img className="rounded-t-lg" src={urlToImage ? urlToImage : ''} alt="image not found" />
                                </a>

                                <div className="p-6">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{title ? title : ""}</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        {description ? description.slice(0, 88) : 'Nothing in description'}
                                    </p>
                                    <p className="mb-3">By {author ? author : 'unknown'} on {new Date(publishedAt).toGMTString()} </p>
                                    <a className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href={url}>Read More</a>
                                </div>
                            </div>
                        </div>
                    )

                })
            }
        </>
    )
}

export default NewsCard
