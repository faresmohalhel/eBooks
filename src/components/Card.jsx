const Card = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full text-base-100">
      <figure>
        <img
          src="https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{props.language}</h2>
        <p className="text-lg">Edition: {props.edition}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">${props.price}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
