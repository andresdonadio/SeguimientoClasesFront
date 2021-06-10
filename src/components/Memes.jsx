import Meme from "./Meme";

export default function Memes({ articles }) {
  return (
    <div className="d-flex flex-wrap">
      {articles.map((meme) => (
        <Meme meme={meme} key={meme._id} />
      ))}
    </div>
  );
}
