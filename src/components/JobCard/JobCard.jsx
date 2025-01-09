import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const JobCard = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;

    return (
        <div>
            <div className="bg-base-100 shadow-xl p-10 rounded-lg flex flex-col h-full">
                <div>
                    <img
                    src={logo}
                    alt={job_title}
                    className="w-32 my-4 object-cover"
                    />
                </div>
                <div className="flex flex-col flex-grow">
                    <p className="text-lg font-semibold">{job_title}</p>
                    <p className="text-slate-500">{company_name}</p>
                    <div className="flex gap-5 text-purple-600 my-2 font-semibold">
                        <div className="badge badge-outline h-7 rounded-sm">{remote_or_onsite}</div>
                        <div className="badge badge-outline h-7 rounded-sm">{job_type}</div>
                    </div>
                    <div className="flex gap-5 text-slate-500 flex-grow">
                        <div className="flex gap-1 items-center">
                            <CiLocationOn className="text-4xl md:text-lg lg:text-lg"/>
                            <span>{location}</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <HiOutlineCurrencyDollar className="text-4xl md:text-lg lg:text-lg" />
                            <span>Salary: {salary}</span>
                        </div>
                    </div>
                    <div>
                        <NavLink to={`/job/${id}`}>
                            <button className="btn bg-gradient-to-r from-indigo-400  to-indigo-500 text-white text-lg">View Details</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;