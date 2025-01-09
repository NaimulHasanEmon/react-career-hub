import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import { NavLink } from "react-router-dom";

const FeaturedJobs = () => {

    const[jobs, setJobs] = useState([])

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
                        jobs.map(job =>
                            <JobCard
                                key={job.id}
                                job={job}
                            ></JobCard>
                        )
                    }
                </div>
                <div className="flex justify-center my-10">
                    <NavLink to=''>
                        <button className="btn bg-gradient-to-r from-indigo-400  to-indigo-500 text-white text-lg">See All</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;