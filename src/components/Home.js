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
        return <Chart probs={item} target={"section-" + i} metaData={true} />
      }
      else{
        return <Chart probs={item} target={"section-" + i} />
      }
    })}  
    </div>
    <div className="col hide-on-small-only m3 l2">
      <ul className="section table-of-contents">
        <li><a id="section-0" href="#scrollsection-0">section 0</a></li>
        <li><a id="section-1" href="#scrollsection-1">section 1</a></li>
        <li><a id="section-2" href="#scrollsection-2">section 2</a></li>
      </ul>
    </div>
  </div>
)

export default Home