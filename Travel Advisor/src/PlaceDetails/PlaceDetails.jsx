import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import { Rating } from "@mui/material";
const PlaceDetails = ({ place }) => {
  return (
    <div className="flex justify-center" data-theme="corporate">
      <div class="card flex justify-center w-5/6 bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-52 h-{280px}"
            src={
              place.photo
                ? place.photo.images.large.url
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="mx-5 mb-4">
          <h2 class="font-thin py">{place.name}</h2>
          <div>
            {" "}
            <Rating value={Number(place.rating)} readOnly />
          </div>
          <p>{place.address}</p>
          <div
            class="card-actions flex flex-col
          "
          >
            <div className="flex ">
              <div className="pr-24">
                <span className="badge px-2 py-3">Pricing</span>
                <span
                  className="badge badge-info px-3 py-3 text-xs
              "
                >
                  {place.price_level}
                </span>
              </div>
            </div>
            <div className=" flex">
              <span className="badge px-2 py-3">Ranking</span>
              <span
                className="badge badge-success px-3 py-3 text-xs
              "
              >
                {place.ranking}
              </span>
            </div>
          </div>
          <div>
            <div className="flex my-2 ">
              <div className="badge py-3">
                <PhoneIcon />
              </div>
              <div className="badge badge-warning py-3  mr-6">
                {place.phone}
              </div>
            </div>
            {/* maping cusines */}
            {/* reservation button */}
            <div>
              <button class="btn btn-primary font-thin">reserve</button>
            </div>
            {/* mapping over cuisines  */}
          </div>
        </div>

        <div className="badge py-6  ">
          {/* {" "} */}
          {place?.cuisine?.map(({ name }) => (
            <div className="badge badge-secondary badge-outline text-xs ">
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
