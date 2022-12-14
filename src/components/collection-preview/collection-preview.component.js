import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss';

const CollectionPreview=({title, items})=>(
   <div className="collection-preview">
    <div className="title">{title.toUpperCase()}</div>
      <dvi className="preview">
        {
            items.filter((item, idx)=>idx<4).map(({id, ...otherItemProps})=>(
               <CollectionItem key={id} {...otherItemProps} />
            ))
        }
      </dvi>
   </div>  
)

export default CollectionPreview;