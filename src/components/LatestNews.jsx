import Marquee from "react-fast-marquee";

const LatestNews = ({ breakingNewsTitles }) => {
  return (
    <div className="flex items-center gap-4 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee pauseOnHover speed={60}>
        {breakingNewsTitles.map((title) => (
          <p className="font-bold">{title}<span className="text-secondary mx-3">|</span></p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
