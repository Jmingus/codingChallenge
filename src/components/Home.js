import React from 'react'
import 'c3/c3.css';
import Chart from './Chart.js'
import AnalyticsApi from "../api.js"

const data = AnalyticsApi

const Home = (props) => (
  <div className="row">
    <div className="col s12 m9 l10">
    {data.map(function(item, i){
      if(item.index === 0){
        return <Chart probs={item} target={"section-" + i} metaData={true} key={i} />
      }
      else{
        return <Chart probs={item} target={"section-" + i} key={i} />
      }
    })}  
    </div>
    <div className="col hide-on-small-only m3 l2">
      <ul className="section table-of-contents">
        <li><a id="section-0" href="#scrollsection-0">by Country</a></li>
        <li><a id="section-1" href="#scrollsection-1">per Session</a></li>
        <li><a id="section-2" href="#scrollsection-2">per Session 2</a></li>
      </ul>
    </div>
  </div>
)

export default Home