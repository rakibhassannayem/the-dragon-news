import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { thumbnail_url, title, details, category_id } = news;
  return (
    <div className="p-5 border border-base-200">
      <img src={thumbnail_url} className="w-full rounded-md" alt="" />

      <h2 className="text-2xl font-bold mt-5">{title}</h2>
      <p className="text-accent my-3">{details}</p>

      <Link
        to={`/category/${category_id}`}
        className="btn bg-secondary text-white"
      >
        <BiArrowBack size={20} />
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
