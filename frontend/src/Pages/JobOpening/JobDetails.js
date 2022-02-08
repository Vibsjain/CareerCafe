import React, { useState, useEffect } from "react";
import api from "../../api/index";
import { useParams } from "react-router-dom";

export default function JobDetails() {
  const { id } = useParams();
  const [jobData, setJobData] = useState([]);
  const setData = async () => {
    const res = await api.get("/joblist");
    const response = res.data;
    for (let i = 0; i < response.length; i++) {
      if (response[i]._id == id) {
        setJobData(response[i]);
        break;
      }
    }
  };

  useEffect(() => {
    setData();
  }, []);
  return <div>{jobData.desc}</div>;
}
