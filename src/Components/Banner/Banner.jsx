import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import PageTransition from "../PageTransition/PageTransition";
const Banner = () => {
  const handleCatagorySubmit = (e) => {
    e.preventDefault();
    console.log(e.target.searchValue.value);
  };
  return (
    <PageTransition>
      <div className="w-full max-h-[550px]">
        <div className="relative">
          {/* Overlay */}
          <div className="absolute w-full h-full flex flex-col justify-center items-center text-gray-200 max-h-[550px] bg-black/70">
            <h1 className="px-4 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Find <span className="text-[#4bcc5a]">Your </span>
              Desire Job
            </h1>
            <h1 className="px-4 md:text-xl text-xs font-bold md:mt-6 mt-2 text-center">
              <span>Jobs, Employment & Future Career Opportunities</span>
            </h1>
            {/* Form Group start*/}
            <div className="mt-6 flex md:border-8 border-gray-500 md:rounded-full">
              <div className="md:flex hidden justify-between max-w-md p-1 bg-white shadow-lg overflow-hidden mx-auto rounded-l-full">
                <form className="flex justify-center items-center">
                  <input
                    type="text"
                    className="outline-none py-4 pl-4 text-black "
                    placeholder="Job Title"
                  />
                  <button
                    type="submit"
                    className="flex-end  text-green-500 mr-6 font-bold text-2xl outline-none rounded-full text-center uppercase"
                  >
                    <FaSearch />
                  </button>
                </form>
              </div>
              <div className="md:flex hidden justify-between max-w-md p-1 bg-white shadow-lg border-l-2 overflow-hidden mx-auto">
                <form className="flex justify-center items-center">
                  <input
                    type="text"
                    className="outline-none py-4 text-black pl-4 md:block hidden "
                    placeholder="City or State"
                  />
                  <button
                    type="submit"
                    className="flex-end text-green-500 mr-6 font-bold text-2xl outline-none rounded-full text-center uppercase md:block hidden "
                  >
                    <FaLocationDot />
                  </button>
                </form>
              </div>
              <div className="flex justify-between max-w-md bg-white shadow-lg md:border-l-2 overflow-hidden rounded-full md:rounded-l-none  mx-auto">
                <form
                  onSubmit={handleCatagorySubmit}
                  className="flex justify-between"
                >
                  <input
                    type="text"
                    name="searchValue"
                    className="outline-none py-4 w-1/2 pl-2 text-black"
                    placeholder="Search Jobs"
                  />
                  <button
                    type="submit"
                    className="flex-end bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:bg-green-600 md:py-3 md:px-8 px-4 py-2 font-bold text-xl outline-none rounded-full text-center"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
            {/* Form Group End*/}
          </div>
          <img
            className="w-full md:h-[550px] min-h-[400px] object-cover"
            src="https://yandex-images.clstorage.net/H5KS1O215/45a33clX/CcaW8rYXwObMzf62801eEpQ3HHhcI-iNdJSejK731zIBb8DV77QQhRw-ab6hsC72uVX9Gqj8rfpD8jdTBHX4xmxSY_by1nECPG3utsOdz6IER6z4Wae5ThKWHNtYEKRwxnhycUrhxeBd2qmbYSONRzuSOumtfDgvp0XCNBOyPtGY1-TDttWA4R5t_vNQnwyQtLeY-A1DvNzSFS9JunFWQGRIcfHYwgdA3s0JS1KiHJN7kNqovQ-prdSkMXZB8E3gefR34pWmQRF8TO8CoH7sEAZ1-ljsQz5dI_UtycrhByAUO8GSOtCG0O1fKynScvxAeFCaqa8NmoxUBmKkATGcIQhGVXPlpILi7I1-wZNdvbHk5DkJzXIO_THU7_sbY2RhBZuQ0YiTlSOsHRo48qAM0SjCeNq8zXruBkVxJBGh_DCo1dSxd6fjg24-r2DSLa6wpAQqaZ8QXU8iRt-qecCmwTa6wnNL01Ty3A7ICpCAX_BrkPibv_yITbS2AfRjAh1jGNbFsLZ004FPPvyxEC5PosYECKmdQ-0NsldcCzkQRjMme_AiuuGXcJ4cOXrwgW-CGcGo2969---35VA006Hd8ahU98NWp_NzDvw9U2C-D6Ak95jaLCCe7JD0bVj4cWVghTrxAjiwZxM-7Bj7AsAeY8jj-cscnZlvJHdAFgMBjyCKR-SjtDYAos99nZKRzZ-B9iQIyE3S7D-DdGx5-TKWAJeoggJJcVeBjjzoi6CSD-O6w7oZ3K15fdeFQ8awIG8TefdWE9ZEknLtbU0AkH9cshQ2uQkfMYxO8veciYqTNgE0WiOCapGnYhwvW8uC4CxiWAP6y4ys2k9GdQB08mHt4rqFNKK3pYPwnR4884Adj9J1Nfo47OGPP6N3falpcuYiZmuwoqgihwLtLDkKweBvwioymUrcraqsRKeDxzDRzKEJRueRtoTzQ76N3VLinn1Q9rTq-B0CHs3QZP2aWJI1o"
            alt="/"
          />
        </div>
      </div>
    </PageTransition>
  );
};

export default Banner;
