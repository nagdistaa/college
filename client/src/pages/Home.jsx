import Card from "../components/Card";

const Home = () => {
  const subjects = [
    { title: "نظم دعم القرار", link: "resource-management" },
    { title: "نظم دعم القرار", link: "resource-management" },
    { title: "نظم دعم القرار", link: "resource-management" },
    { title: "نظم دعم القرار", link: "resource-management" },
    { title: "نظم دعم القرار", link: "resource-management" },
    { title: "نظم دعم القرار", link: "resource-management" },
    { title: "نظم دعم القرار", link: "resource-management" },
    { title: "نظم دعم القرار", link: "resource-management" },
    { title: "نظم دعم القرار", link: "resource-management" },
    { title: "نظم دعم القرار", link: "resource-management" },
  ];
  return (
    <div className="w-full px-4 py-8">
      {subjects.map(({ title, link }, idx) => (
        <Card key={idx} title={title} link={link} />
      ))}
    </div>
  );
};

export default Home;
