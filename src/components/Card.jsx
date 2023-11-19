import "../styles/projects.css";

const Card = (props) => {
  const { link, image, title } = props;
  return (
    <div className="card">
      <div className="card__image">
        <a href={link} target="_blank">
          <img className="card-image" src={image}></img>
        </a>
      </div>
      <div className="card__description">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
