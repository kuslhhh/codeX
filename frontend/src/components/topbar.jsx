import PropTypes from 'prop-types';


export const Topbar = () => {
  return (
    <div className="max-w-custom w-full bg-[#140d0d] px-7 pt-7 pb-6 text-white">
      <img src="/logo.png" alt="logo" className="max-w-64" />
      <Navbar />
    </div>
  );
};

const topbarItems = [
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Activity",
    route: "/activity",
  },
  {
    title: "Problems",
    route: "/problems",
  },
  {
    title: "Leaderboard",
    route: "/leaderboard",
  },
];

function Navbar() {
  return (
    <div className="flex pt-4 items-start">
      {topbarItems.map((item) => (
        <NavbarItem key={item.route} route={item.route} title={item.title} />
      ))}
    </div>
  );
}

function NavbarItem({ title, route }) {
  return (
    <div
      className="mr-10 text-slate-500 text-base cursor-pointer hover:text-white"
      onClick={() => (window.location.href = route)}
    >
      {title}
    </div>
  );
}


NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};