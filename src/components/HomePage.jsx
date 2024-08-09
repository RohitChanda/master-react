const HomePage = () => {
  const people = [
    {
      id: 0, // Used in JSX as a key
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1, // Used in JSX as a key
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2, // Used in JSX as a key
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3, // Used in JSX as a key
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4, // Used in JSX as a key
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  return (
    <>
      {people.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </>
  );
};

export default HomePage;
