import React from "react";
import { Link } from "react-router-dom";
import "./imageCard.css";
// const routeChange = () =>{
//   let path = `newPath`;
//   navigate(path);
// }

const imageCard = ({
  id,
  title,
  information,
  imagenSource,
  nameRedirect,
  urlRedirect,
  categoria,
}) => {
  return (
    // const [images, setImages] useState([])
    // <div class="col-md-6 col-lg-4">
    //     <div class="portfolio-item">
    //       <img src={imagenSource} class="w-100 img-thumbnail" alt="portfolio item"/>
    //       <h3 class="text-capitalize fs-5 my-2">{title}</h3>
    //       <Link to={urlRedirect + id}>
    //           {/* <button className="productListEdit">Edit</button> */}
    //       <p class="mb-4"><a  class="font-color-red text-decoration-none">{nameRedirect}</a></p>
    //         </Link>
    //     </div>
    // </div>
    // setImages(imagenSource);
    <div class="col-sm-12 col-md-6 col-lg-4 mt-5 mb-3 ">
      <div class="card h-100 card-blog">
        <div class="card-image ">
          <img class="img img-raised" src={imagenSource} alt={title} />
          <div class="ripple-cont"></div>
        </div>
        <div class="card-body ">
          <h6 class="category">{categoria.replace(/ /g, "")}</h6>
          
            {/* <button className="productListEdit">Edit</button> */}
            <h4 class="card-caption mb-4 url-name">{title}</h4>
          <p class="card-description">{information}</p>
        </div>
        <div class="p-2 ">
        <Link to={urlRedirect + id} className="btn btn-red w-100">
          Detalle
        </Link>
        </div>
        {/* <div className="row vh-100">
                  <div className="col d-flex align-items-end">
                    
                  </div>
              </div> */}
      </div>
    </div>
  );
};
// imageCard.protoType={
//   imagenSource:protoType.String.isRequired,
//   nameRedirect:protoType.String.isRequired
// }
export default imageCard;
