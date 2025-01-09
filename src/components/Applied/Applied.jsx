import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJobsCard from "../AppliedJobsCard/AppliedJobsCard";

const Applied = () => {
    const jobs = useLoaderData()

    const[appliedJobs, setAppliedJobs] = useState([])
    const[displayJobs, setDisplayJobs] = useState([])

    useEffect(() => {
        const storedJobIds = getStoredJobApplication()
        if(jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    },[])

    const handleFilter = filter => {
        if(filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(jobs => jobs.remote_or_onsite === 'Remote') 
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onlineJobs = appliedJobs.filter(jobs => jobs.remote_or_onsite === 'Onsite') 
            setDisplayJobs(onlineJobs)
        }
        else if (filter === 'fullTime') {
            const fullTimeJobs = appliedJobs.filter(jobs => jobs.remote_or_onsite === 'Full Time') 
            setDisplayJobs(fullTimeJobs)
        }
    }

    return (
        <div>
            <p className="text-4xl font-bold my-7 text-center">Applied Jobs: {appliedJobs.length}</p>
            <div>
                <div className="flex my-3 justify-end">
                    <select 
                        className="select bg-slate-100"
                        onChange={(e) => handleFilter(e.target.value)}
                    >
                        <option disabled hidden selected>Filter By</option>
                        <option value="all">All</option>
                        <option value="remote">Remote</option>
                        <option value="fullTime">Full Time</option>
                        <option value="onsite">Onsite</option>
                    </select>
                </div>
                <div className="flex flex-col gap-3 mb-10">
                    {
                        displayJobs.map(job => <AppliedJobsCard
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