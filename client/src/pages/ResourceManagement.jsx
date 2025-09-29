import SubjectBox from "../components/SubjectBox";
import useAppContext from "../context/AppContext";

const ResourceManagement = () => {
  const { subjects } = useAppContext();
  const ResourceSubjects = subjects.filter(
    (subject) => subject.category == "Education"
  );
  return (
    <div className="px-4 py-8">
      {ResourceSubjects.map(({ title, link }, idx) => (
        <SubjectBox key={idx} title={title} link={link} />
      ))}
    </div>
  );
};

export default ResourceManagement;
