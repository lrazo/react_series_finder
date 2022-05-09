import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";

const Main = props => (
       <Routes>
        <Route exact path="/" element={<Series />} />
        <Route path="/series/:id" element={<SingleSeriesWrapper />} />
       </Routes>
);

const SingleSeriesWrapper = () => {
  const { id } = useParams();
  return <SingleSeries id={id} />;
};



export default Main;
