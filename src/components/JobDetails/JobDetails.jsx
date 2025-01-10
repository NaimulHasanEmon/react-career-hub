import React from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from '../../utility/localStorage';

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => parseInt(job.id) === idInt)

    const {job_title, salary, contact_information, experiences, job_description, job_responsibility, educational_requirements} = job;

    const {phone, email, address} = contact_information;

    const handleApplyNow = () => {
        saveJobApplication(idInt)
        toast("Applied Successfully!");
    }

    return (
        <div className="mx-2 my-5">
            {/* Title */}
            <div className="text-center mb-10">
                <p className="text-5xl font-bold">Job Details</p>
            </div>
            <div className="grid gap-5 grid-cols-5">
                {/* Descriptions */}
                <div className="col-span-3 flex flex-col gap-4">
                    <p>
                        <span className="text-xl font-bold">Job Description: </span>{job_description}</p>
                    <p>
                        <span className="text-xl font-bold">Job Responsibility: </span>
                        {job_responsibility}
                    </p>
                    <p>
                        <span className="text-xl font-bold">Educational Requirements:<br /></span>
                        {educational_requirements}
                    </p>
                    <p>
                        <span className="text-xl font-bold">Experiences:<br /></span>
                        {experiences}
                    </p>
                </div>

                {/* Job Details */}
                <div className="col-span-2">
                    <div className="rounded-xl bg-violet-100 bg-opacity-70 p-9">
                        <div>
                            <div className="max-w-md">
                            <h1 className="text-xl font-bold border-violet-400 border-b-[1px]">Job Details</h1>
                            <div>
                                <div className="flex gap-1 lg:items-center">
                                    <HiOutlineCurrencyDollar className="text-2xl lg:text-xl text-violet-500"/>
                                    <p className="text-slate-500"><span className="text-black font-semibold">Salary: </span>{salary} (Per Month)</p>
                                </div>
                                <div className="flex gap-1 lg:items-center">
                                    <IoCalendarOutline className="text-xl text-violet-500"/>
                                    <p className="text-slate-500">
                                        <span className="text-black font-semibold">Job Title: </span>
                                        {job_title}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="my-6 text-xl font-bold border-violet-400 border-b-[1px]">Contact Information</p>
                                <div className="flex flex-col justify-start">
                                    <div className="flex gap-1">
                                        <LuPhone  className="text-xl text-violet-500"/>
                                        <p className="text-slate-500">
                                            <span className="text-black font-semibold">Phone: </span>{phone}</p>
                                    </div>
                                    <div className="flex gap-1 lg:items-center">
                                        <CiMail className="text-xl text-violet-500"/>
                                        <p className="text-slate-500">
                                            <span className="text-black font-semibold">Email:</span>{email}</p>
                                    </div>
                                    <div className="flex  gap-1">
                                        <IoLocationOutline className="text-[42px] md: text-2xl lg:text-2xl text-violet-500" />
                                        <p className="text-slate-500">
                                            <span className="text-black font-semibold">Address:</span>{address}</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <button
                    onClick={() => handleApplyNow()}
                    className="btn bg-gradient-to-r from-indigo-400  to-indigo-500 text-white text-lg w-full mt-5">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;