import { useNavigate } from "react-router-dom";

const Card = ({ title, link }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${link}`)}
      className="flex items-center justify-center flex-col rounded-lg shadow bg-orange-400  w-full h-30 cursor-pointer mb-2"
    >
      <h2 className="font-semibold text-2xl"> {title}</h2>
    </div>
  );
};

export default Card;
