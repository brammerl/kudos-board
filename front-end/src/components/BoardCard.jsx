const BoardCard = ({ board }) => {
  const { title, img_url, description } = board;
  return (
    <article>
      <img src={img_url} />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <button>View Board</button>
        <button>Delete Board</button>
      </div>
    </article>
  );
};

export default BoardCard;
