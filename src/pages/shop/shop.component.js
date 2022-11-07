import React from "react";
import { Link } from "react-router-dom";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";


class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            conllections:SHOP_DATA
        };
    }
    render(){
        const {conllections}=this.state;
        return(
        <div className="shop-page">
            {
                conllections.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
        );
    }

}

export default ShopPage;