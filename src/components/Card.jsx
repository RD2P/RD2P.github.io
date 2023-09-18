import "../styles/projects.css";

const Card = (props) => {
  const { link, image, title } = props;
  return (
    <article className="card">
      <section className="image-wrapper">
        <a href={link}>
          <img className="card-image" src={image}></img>
        </a>
      </section>
      <section className="description-wrapper">
        <h3 className="card-title">{title}</h3>
      </section>
    </article>
  );
};

export default Card;
