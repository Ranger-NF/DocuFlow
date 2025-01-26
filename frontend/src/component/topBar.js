import SearchBar from "@/component/searchBar";

const TopBar = () => {
    return(
    <div className="container mx-auto p-7">
      <div className="flex">
        <a href="/">
          <TiArrowLeftThick className="w-8 h-8 align-middle" />
        </a>
      </>
      <SearchBar/>
      </div>
    );
};

export default TopBar
