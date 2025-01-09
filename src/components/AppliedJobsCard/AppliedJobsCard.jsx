import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const AppliedJobsCard = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;

    return (
        <div>
            <div className="hero border flex justify-between rounded-xl shadow-lg">
                <div className="hero-content lg:flex-row">
                    <div className="bg-gray-200 bg-opacity-70 min-h-28 md:min-h-36 lg:min-h-36 md:min-w-52 lg:min-w-52 items-center flex flex-col justify-center rounded-xl">
                        <img src={logo} className="max-w-sm rounded-lg w-32 p-3 md:w-40 lg:w-40" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{job_title}</h1>
                        <p className="my-2">{company_name}</p>
                        <div>
                            <div className="flex gap-5 text-purple-600 my-2 font-semibold">
                                <div className="badge badge-outline h-7 rounded-sm">{remote_or_onsite}</div>
                                <div className="badge badge-outline h-7 rounded-sm">{job_type}</div>
                            </div>
                        </div>
                        <div className="flex gap-5 text-slate-500 flex-grow">
                            <div className="flex gap-1 md:items-center lg:items-center">
                                <CiLocationOn className="text-4xl md:text-lg lg:text-lg"/>
                                <span>{location}</span>
                            </div>
                            <div className="flex gap-1 md:items-center lg:items-center">
                                <HiOutlineCurrencyDollar className="text-4xl md:text-lg lg:text-lg" />
                                <span>Salary: {salary}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* View Details */}
                <div className="p-5">
                    <NavLink to={`/job/${id}`}>
                        <button className="rounded-lg min-h-10 p-2 bg-gradient-to-r from-indigo-400  to-indigo-500 text-white text-lg font-medium">View Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobsCard;