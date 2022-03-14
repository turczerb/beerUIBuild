const Beer = (props) => {
  return (
    <div className="beer">
      <span className="num">{props.test + 1}</span>
      <h2 className="beer_title">{props.title}</h2>
      <hr className="beer_separator" />
      <p className="beer_sub">{props.sub}</p>
      <p className="beer_text">{props.text}</p>
      <button className="btn">details</button>
    </div>
  );
};

export default Beer;
