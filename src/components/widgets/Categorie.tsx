import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { ShowCategory } from "../admin/TableProducts";
import { styleTheme } from "../../styles";

function Categories({ category }: any) {
  return (
    <div className='ContainerCategorie'>
      <div className='title'>
        <h3>
          {category === undefined || category === null ? (
            <>Category: All </>
          ) : (
            <>
              categorie: <ShowCategory category={category} />
            </>
          )}
        </h3>
      </div>
      {/*
      <div className='content-input'>
        <input type='text' className='' placeholder='Search a product' />
        <SearchIcon />
      </div>
      */}
    </div>
  );
}

export default Categories;
