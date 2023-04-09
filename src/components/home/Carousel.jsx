import viera1 from "../../assets/images/viera2.jpg";
import viera2 from "../../assets/images/viera.jpg";

export const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={viera1} className="d-block w-100 img" alt="blackhair" />
        </div>
        <div className="carousel-item">
          <img src={viera2} className="d-block w-100 img" alt="blonde" />
        </div>
      </div>
    </div>
  );
};
