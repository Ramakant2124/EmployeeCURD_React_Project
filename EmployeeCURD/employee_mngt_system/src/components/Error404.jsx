import React from "react";

function Error404(){
    const errorPicUrl = 'https://www.codewithrandom.com/wp-content/uploads/2022/08/Copy-of-Copy-of-Copy-of-SVG-in-HTML-10.png'
    
    return(
        <div className='container mt-2'>
            <img style={{display:'block',height:'80vh',margin:'auto'}} src={errorPicUrl}/>
        </div>

    )
}

export default Error404