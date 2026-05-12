import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ( { titulo }) => {
    const [products ,setProducts] = useState ([]);
    const { category } = useParams();
    
    useEffect (() => {
        fetch ("https://6900b99fff8d792314bb27e3.mockapi.io/products")
            .then ((res) => {
                if(!res.ok) {
                    throw new Error("Hubo un propblema al buscar producto");
                }
                return res.json();
            })
            .then ((data) => {
                if(category) {
                    setProducts(data.filter((prod) => prod.category === category));       

                } else {
                    setProducts(data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [category]);

    return (
        <section className="container">
            <h1>{titulo}</h1>
            <ItemList lista={products} />
        </section>

    );


};