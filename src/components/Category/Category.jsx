import Card from "../Card/Card";
import "./category.css";

const Category = ({ videos, color }) => {
  const category = videos[0].category;
  return (
    <section className="category">
      <h2 style={{ backgroundColor: color }}>{category.toUpperCase()}</h2>
      <ul>
        {videos.map((video) => {
          return <Card key={video.id} video={video} color={color} />;
        })}
      </ul>
    </section>
  );
};

export default Category;
