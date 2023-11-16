import React from "react";
import "../../component/CardSlider/CardSlider.css";

const photosData = [
  {
    age: 35,
    imageUrl:
      "https://funylife.in/wp-content/uploads/2022/12/27_Whatsapp-Dp-images-FunyLife.in_-1024x1024.jpg",
    title: "Jhone",
    description: "This is the first photo.",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.statusqueen.com/dpimages/thumbnail/dp_images_8-1279.jpg",
    title: "Photo 2",
    description: "This is the second photo.",
  },
  {
    id: 3,
    imageUrl:
      "https://i.pinimg.com/1200x/95/dd/ce/95ddce90d58a3744904c5262777150a2.jpg",
    title: "Photo 2",
    description: "This is the second photo.",
  },
  {
    id: 3,
    imageUrl:
      "https://i.pinimg.com/1200x/95/dd/ce/95ddce90d58a3744904c5262777150a2.jpg",
    title: "Photo 2",
    description: "This is the second photo.",
  },
  {
    id: 3,
    imageUrl:
      "https://i.pinimg.com/1200x/95/dd/ce/95ddce90d58a3744904c5262777150a2.jpg",
    title: "Photo 2",
    description: "This is the second photo.",
  },
  {
    id: 3,
    imageUrl:
      "https://i.pinimg.com/1200x/95/dd/ce/95ddce90d58a3744904c5262777150a2.jpg",
    title: "Photo 2",
    description: "This is the second photo.",
  }

  // Add more photo objects as needed
];

function CardSlider() {
  return (
    <>
      <div
        className="fix"
        style={{
          backgroundImage: "url('/assest/images/HomeImages/LayerBanner.png')",
        }}
      >
        {/* -------------------------------- */}
        <div className="container">
        <div className="photo-list row">
          {photosData.map((photo) => (
            <div className="col-md-4">
            <div className="card text-center" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={photo.imageUrl}
                alt={photo.title}
              />
              <div className="card-body">
                
                <h5 className="card-title">Your Name is: {photo.title}</h5>
                <p style={{color:"black"}}>
                  Age:{photo.age}
                </p>
                <p className="card-text">{photo.description}</p>
              </div>
            </div>
            </div>
          ))}
        </div>
        </div>
        {/* -------------------------------------- */}

      </div>
    </>
  );
}

export default CardSlider;
