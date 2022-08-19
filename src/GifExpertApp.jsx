import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Marvel' ]);

  const onAddCategory = ( newCategory) => {

    if ( categories.includes( newCategory ) ) return;

    // console.log( newCategory );
    // setCategories( [ newCategory, ...categories ] );
    setCategories( categories => [ newCategory, ...categories ] );
  }

  return (
    <>
        {/* Title */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          // setCategories={ setCategories } 
          onNewCategory={ event => onAddCategory(event) }
        />

        {/* List of Gif */}
        { 
          categories.map( category => (
            <GifGrid key={ category } category={ category } />
          )) 
        }
          {/* Gif Item */}

    </>
  )
}
