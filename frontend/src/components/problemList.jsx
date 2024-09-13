import PropTypes from 'prop-types';
import { TagContainer } from "./Tag";

export const ProblemList = ({ problemList }) => {
  return (
    <div className="my-8">
      <h1 className="text-bold text-4xl">All Problems</h1>
      <div className="shadow-md bg-gray-50 px-4 py-4">
        <div className="flex justify-between mb-8 font-semibold text-lg">
          <div className="flex gap-8">
            <div className="w-1/3">Id</div>
            <div className="w-1/3">Problem Name</div>
          </div>
          <div className="w-1/3">Recently Solved</div>
        </div>

        {problemList.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-4 bg-white p-4 shadow-sm rounded-md"
          >
            <div className="flex gap-16 w-1/3">
              <div>{item.id}</div>
              <div>
                <div className="text-xl mb-2">{item.problemName}</div>
                <TagContainer tags={item.tags} />
              </div>
            </div>
            <div className="w-1/3 text-lg">
              <span className="text-gray-500">Last submission: </span>{" "}
              {"Anirudh"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ProblemList.propTypes = {
  problemList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      problemName: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};
