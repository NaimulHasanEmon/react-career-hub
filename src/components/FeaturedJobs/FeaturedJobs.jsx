import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

const FeaturedJobs = () => {
    const[jobs, setJobs] = useState([])
    // Though this is not the most efficient way
    const[dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div>
                <div className="text-center">
                    <p className="text-5xl">Featured Jobs</p>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {
                        jobs.slice(0, dataLength).map(job =>
                            <JobCard
                                key={job.id}
                                job={job}
                            ></JobCard>
                        )
                    }
                </div>
                <div className={`flex justify-center my-10 ${dataLength === jobs.length && 'hidden'}`}>
                    <button
                        onClick={() => setDataLength(jobs.length)}
                        className="btn bg-gradient-to-r from-indigo-400  to-indigo-500 text-white text-lg">See All</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;