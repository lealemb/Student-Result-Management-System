const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-center md:justify-between h-150px">
      <div className="flex items-center justify-center flex-grow">
        <h1 className="text-2xl font-bold text-white ml-2 bg-blue-600 px-4 py-5 h-full">
          Admin Dashboard
        </h1>
      </div>
    </header>
  );
};

export default Header;
