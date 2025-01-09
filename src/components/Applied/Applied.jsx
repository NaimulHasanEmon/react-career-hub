import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJobsCard from "../AppliedJobsCard/AppliedJobsCard";

const Applied = () => {
    const jobs = useLoaderData()

    const[appliedJobs, setAppliedJobs] = useState([])

    useEffect(() => {
        const storedJobIds = getStoredJobApplication()
        if(jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)
        }
    },[])

    return (
        <div>
            <p className="text-4xl font-bold my-7 text-center">Applied Jobs: {appliedJobs.length}</p>
            <div>
                <div>
                    <select className="select w-full max-w-xs">
                        <option disabled selected>Filter By</option>
                        <option>All</option>
                        <option>Remote</option>
                        <option>Full Time</option>
                        <option>Onsite</option>
                    </select>
                </div>
                <div className="flex flex-col gap-3 mb-10">
                    {
                        appliedJobs.map(job => <AppliedJobsCard
                            key={job.id}
                            job={job}
                        ></AppliedJobsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Applied;