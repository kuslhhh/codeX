import PropTypes from 'prop-types';

export const Leaderboard = ({ leaderboard }) => {
  // This data can be replaced with a prop or dynamic data
  const data = [
    { id: 1, icon: "", name: "Siddharth", points: 23 },
    { id: 2, icon: "", name: "Ayush", points: 43 },
    { id: 3, icon: "", name: "KKumar", points: 231 },
    { id: 4, icon: "", name: "FEFE", points: 213 },
    { id: 5, icon: "", name: "Jannat", points: 23 },
    { id: 6, icon: "", name: "Siddharth", points: 34 },
    { id: 7, icon: "", name: "Siddharth", points: 2344 },
  ];

  return (
    <div className="my-8">
      <h1 className="text-bold text-4xl">Leaderboards</h1>
      <div className="shadow-md my-4 min-h-[50vh] px-4 py-4">
        <div className="flex my-8 font-semibold text-lg">
          <div className="w-1/3">Id</div>
          <div className="w-1/3">Name</div>
          <div className="w-1/3">Points</div>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className="flex my-4 text-lg bg-white shadow-sm py-4 px-2 items-center"
          >
            <div className="w-1/3">{item.id}</div>
            <div className="w-1/3">{item.name}</div>
            <div className="w-1/3">{item.points}</div>
          </div>
        ))}
        <div className="flex"></div>
      </div>
    </div>
  );
};

Leaderboard.propTypes = {
  leaderboard: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string,
      name: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
    })
  ).isRequired,
};
