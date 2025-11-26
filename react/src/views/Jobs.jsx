import Head from "../components/Head";
import JobListings from "../components/JobListings";

function Jobs() {
  return (
    <>
      <Head title="Jobs" />

      <section className="px-4 py-6">
        <JobListings />
      </section>
    </>
  );
}

export default Jobs;
