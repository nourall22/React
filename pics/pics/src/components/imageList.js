import React from 'react'

const ImageList =(props)=>{
    const Photos = props.Photos.map(({description, id, urls}) => {
        return <img alt={description} key={id} src={urls.regular}  />
    } )
    return <div> {Photos} </div>
}
export default ImageList;