import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SubjectBox = ({ title, link }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full p-5 bg-orange-500 rounded-md mb-2 cursor-pointer"
      onClick={() => navigate(`/subject/${link}`)}
    >
      <div className="flex items-center justify-between">
        <div className="bg-white p-2 rounded-full ">
          <ChevronRight />
        </div>
        <h2 className="font-semibold ">
          {title?.length > 30 && "..."} {title?.slice(0, 30)}
        </h2>
      </div>
    </div>
  );
};

export default SubjectBox;
