import React from "react";

const ImageList = (props) => {
    console.log(props)
    const images = props.images.map((image) => {
        return <img key={image.id} src={ image.webformatURL } alt="img"/> //key requires to be set only on the root tag being returned. e.g. if this img was inside a div, then the div would get key=...
    })
    return (
        <div>
            My Images
            {images}
        </div>
    )
}

export default ImageList