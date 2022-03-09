import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import {
  Mentorship,
  MockInterview,
  NonTechJobs,
  NonEngineeringJobs,
  TechJobs,
} from "./Pages/Courses";

// Interview Experience routes
import InternshipInterviewExp from "./Pages/InterviewExperience/InternshipInterviewExp";
import PlacementInterviewExp from "./Pages/InterviewExperience/PlacementInterviewExp";
import InterviewExp from "./Pages/InterviewExperience/InterviewExp";
import OncampusInterviewExp from "./Pages/InterviewExperience/OncampusInterviewExp";
import OffcampusInterviewExp from "./Pages/InterviewExperience/OffcampusInterviewExp";
import CompanyInterviewExp from "./Pages/InterviewExperience/CompanyInterviewExp";

// Job Opening Routes
import AllJobs from "./Pages/JobOpening/AllJobs";
import JobDetails from "./Pages/JobOpening/JobDetails";
import CompanyJobs from "./Pages/JobOpening/CompanyJobs";

const FinalRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/course/mentorship" exact component={Mentorship} />
        <Route path="/course/mockinterview" exact component={MockInterview} />
        <Route path="/course/nontechjobs" exact component={NonTechJobs} />
        <Route
          path="/course/nonengineeringjobs"
          exact
          component={NonEngineeringJobs}
        />
        <Route path="/course/techjobs" exact component={TechJobs} />
        <Route path="/interview/experience" exact component={InterviewExp} />
        <Route
          path="/interview/experience/category/placement"
          exact
          component={PlacementInterviewExp}
        />
        <Route
          path="/interview/experience/category/internship"
          exact
          component={InternshipInterviewExp}
        />
        <Route
          path="/interview/experience/category/oncampus"
          exact
          component={OncampusInterviewExp}
        />
        <Route
          path="/interview/experience/category/offcampus"
          exact
          component={OffcampusInterviewExp}
        />
        <Route
          path="/interview/experience/company/:companyName"
          exact
          component={CompanyInterviewExp}
        />
        <Route path="/job/opening" exact component={AllJobs} />
        <Route path="/job/opening/:id" exact component={JobDetails} />
        <Route
          path="/job/opening/company/:companyName"
          exact
          component={CompanyJobs}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default FinalRoutes;
