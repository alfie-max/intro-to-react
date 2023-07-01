import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  // This is a public class field, so it doesn't need to be bound in the constructor
  handleIndexClick = (event) => {
    this.setState({
      // The + coerces the string to a number
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              alt="animal thumbnail"
              className={index === active ? "active" : ""}
              onClick={this.handleIndexClick}
              // This is a custom attribute, so it needs to be prefixed with data-
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
