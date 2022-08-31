import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
        <>
            <div className="text-center mt-16 ml-[47rem]">
                <img srcSet={loading} alt="image" />
            </div>
        </>
    )
}

export default Spinner
