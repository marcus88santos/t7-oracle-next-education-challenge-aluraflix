import Category from "@/components/Category/Category";
import { useVideosContext } from "@/Contexts/VideosContext";
import "./home.css";

const Home = () => {
  const { videos } = useVideosContext();
  const categories = [];
  videos.forEach((video) => {
    if (!categories.includes(video.category)) {
      categories.push(video.category);
    }
  });
  const colors = [
    "#6BD1FF",
    "#00C86F",
    "#FFBA05",
    "#E53935",
    "#9c35e5",
    "#e535bc",
    "#35e5a4",
  ];

  return (
    <div className="home">
      {categories.map((category, index) => {
        return (
          <Category
            key={category}
            videos={videos.filter((video) => video.category === category)}
            color={colors[index]}
          />
        );
      })}
    </div>
  );
};

export default Home;
