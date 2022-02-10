import React, { useState, useEffect } from "react";
import api from "../../api/index";
import { useParams } from "react-router-dom";

export default function JobDetails() {
  const { id } = useParams();
  const [jobData, setJobData] = useState([]);
  const setData = async () => {
    const res = await api.get("/joblist/" + id);
    const response = res.data;
    setJobData(response);
  };

  useEffect(() => {
    setData();
  }, []);
  return <div>{jobData.desc}</div>;
}
