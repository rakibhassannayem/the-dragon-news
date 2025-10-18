import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 justify-start join-item py-7 hover:bg-base-200">
          <FaFacebook size={18} /> Facebook
        </button>
        <button className="btn bg-base-100 justify-start join-item py-7 hover:bg-base-200">
          <FaTwitter size={18} />
          Twitter
        </button>
        <button className="btn bg-base-100 justify-start join-item py-7 hover:bg-base-200">
          <FaInstagram size={18} />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
