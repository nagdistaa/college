import { useParams } from "react-router-dom";

const SubjectDetails = () => {
  const { subjectId } = useParams();

  return (
    <div>
      <h1>Subject Details</h1>
      <p>Subject ID: {subjectId}</p>
    </div>
  );
};

export default SubjectDetails;
