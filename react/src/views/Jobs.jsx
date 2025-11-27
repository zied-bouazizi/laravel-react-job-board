import Head from "../components/Head";
import JobListings from "../components/JobListings";
import { useStateContext } from "../contexts/ContextProvider";

function Jobs() {
  const { jobsRefreshKey } = useStateContext();

  return (
    <>
      <Head title="Jobs" />

      <section className="px-4 py-6">
        {/* This key ensures JobListings remounts only when clicking Jobs in navbar */}
        <JobListings key={jobsRefreshKey} />
      </section>
    </>
  );
}

export default Jobs;
