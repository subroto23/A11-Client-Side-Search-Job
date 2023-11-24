import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import AllJob from "../AllJobs/AllJob";
import { useQuery } from "@tanstack/react-query";
const Jobs = () => {
  const axiosSecureUrl = UseAxiosSecure();
  const { isPending, data: allJobs } = useQuery({
    queryKey: ["homeJobsData"],
    queryFn: async () => {
      const res = await axiosSecureUrl.get("/jobs");
      return res.data;
    },
  });

  if (isPending) {
    return (
      <div className="border-gray-300 h-20 w-20 my-24 mx-auto animate-spin rounded-full border-8 border-t-green-600" />
    );
  }
  return (
    <div className="md:my-16 my-8 max-w-7xl mx-auto">
      <h1 className="md:text-4xl text-2xl font-bold text-gray=500 my-6 text-center">
        Recent Jobs
      </h1>
      {/* Tab Style Start */}
      <div>
        <Tabs className="md:text-lg py-6 md:font-medium">
          <TabList className="text-center md:space-x-8 border-b">
            <Tab>All Jobs</Tab>
            <Tab>Remote</Tab>
            <Tab>Hybrid</Tab>
            <Tab>On Site</Tab>
            <Tab>Part-Time</Tab>
          </TabList>
          <TabPanel>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:mt-16 mt-6 border-4 p-4 border-green-500">
              {allJobs?.map((data) => (
                <AllJob key={data._id} data={data} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:mt-16 mt-6 border-4 p-4 border-green-500">
              {allJobs
                ?.filter((data) => data.selectedCatagory === "Remote")
                .map((data) => (
                  <AllJob key={data._id} data={data} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:mt-16 mt-6 border-4 p-4 border-green-500">
              {allJobs
                ?.filter((data) => data.selectedCatagory === "Hybrid")
                .map((data) => (
                  <AllJob key={data._id} data={data} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:mt-16 mt-6 border-4 p-4 border-green-500">
              {allJobs
                ?.filter((data) => data.selectedCatagory === "On Site")
                .map((data) => (
                  <AllJob key={data._id} data={data} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:mt-16 mt-6 border-4 p-4 border-green-500">
              {allJobs
                ?.filter((data) => data.selectedCatagory === "Part-Time")
                .map((data) => (
                  <AllJob key={data._id} data={data} />
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Jobs;
