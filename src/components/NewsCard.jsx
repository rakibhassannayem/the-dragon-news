import { Link } from "react-router"; // optional - use if you want Read More to route
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaRegEye,
  FaShareAlt,
  FaRegBookmark,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  if (!news) return null;

  const {
    id,
    title,
    author = {},
    thumbnail_url,
    details,
    total_view,
    rating = {},
  } = news;

  // Format date to nice string: e.g. April 22, 2025
  const published = author.published_date
    ? new Date(author.published_date)
    : null;
  const publishedStr = published
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(published)
    : "";

  // Render rating stars (0-5, supports halves)
  const renderStars = (value = 0) => {
    const stars = [];
    const full = Math.floor(value);
    const half = value - full >= 0.5;
    for (let i = 0; i < full; i++)
      stars.push(
        <FaStar size={24} key={"f" + i} className="inline text-yellow-400" />
      );
    if (half)
      stars.push(
        <FaStarHalfAlt
          size={24}
          key="half"
          className="inline text-yellow-400"
        />
      );
    const rest = 5 - full - (half ? 1 : 0);
    for (let i = 0; i < rest; i++)
      stars.push(
        <FaRegStar size={24} key={"e" + i} className="inline text-yellow-400" />
      );
    return stars;
  };

  // Excerpt
  const excerpt =
    details && details.length > 200
      ? `${details.slice(0, 220).trim()}...`
      : details;

  return (
    <article className="card bg-base-100 shadow-md border border-base-200 overflow-hidden md:flex md:items-start mt-4">
      {/* Author row */}
      <div className="flex items-center justify-between w-full bg-base-200 p-2">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={author.img} alt={author.name || "author"} />
            </div>
          </div>
          <div>
            <p className="font-semibold">{author.name || "Unknown"}</p>
            <p className="text-accent">{publishedStr}</p>
          </div>
        </div>

        {/* icons */}
        <div className="flex items-center gap-3 text-base-content/60">
          <button aria-label="bookmark" className="btn btn-ghost btn-sm p-2">
            <FaRegBookmark size={24} />
          </button>
          <button aria-label="share" className="btn btn-ghost btn-sm p-2">
            <FaShareAlt size={24} />
          </button>
        </div>
      </div>

      {/* content */}
      <div className="card-body p-4">
        {/* Title */}
        <h3 className="card-title font-bold text-2xl my-3">{title}</h3>
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-md"
          loading="lazy"
        />
        {/* Excerpt */}
        <p className="text-sm text-base-content/80 mt-2 leading-relaxed">
          {excerpt} {/* Replace Link with <a> or button if you prefer */}
          <Link to={`/news-details/${id}`} className="text-primary font-semibold hover:underline">
            Read More
          </Link>
        </p>

        <div className="divider"></div>

        {/* Footer: rating, views, tags */}
        <div className="flex text-lg text-accent items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="space-x-1">{renderStars(rating.number)}</div>
            <span className="text-xl">{rating.number}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaRegEye />
            <span>{total_view ?? 0}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
