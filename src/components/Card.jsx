import "../styles/style.css";

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
        <h2 className="card-title">{title}</h2>
      </section>
    </article>
  );
};

export default Card;
