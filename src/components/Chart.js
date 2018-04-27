import React from 'react'
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import Waypoint from 'react-waypoint';
import MetaData from './MetaData.js';

class Chart extends React.Component {
    render(){
        var dataForChart = {}
        if(this.props.probs.index === 0){
            var allCountrys = [];
            this.props.probs.body.results.forEach(function(item){
                let temp = [];
                temp.push(item.page_views)
                temp.push(item.dimensions.country)
                allCountrys.push(temp.reverse())
            })
            dataForChart = {
                    columns: allCountrys,
                    type: 'pie'
            }
        }
        else if( this.props.probs.index === 1){
            let column = []
            this.props.probs.body[0].probabilities.forEach(function(item){
                column.push(item.probability)
            })
            if(this.props.probs.body[0].probabilities.dimensions !== undefined){
                column.push(this.props.probs.body[0].probabilities.dimensions.country)
            }else{
                column.push("N/A")
            }
            var reversedColumn = column.reverse()
            dataForChart = {
                    columns: [reversedColumn],
                    type: 'spline'
            }
        }
        else if(this.props.probs.index === 2){
            let allCountrys = [];
            this.props.probs.body.forEach(function(countrys, index){
                let country = [];
                countrys.probabilities.forEach(function(item){
                    country.push(item.probability)
                })
                country.push(countrys.dimensions.country)
                allCountrys.push(country.reverse())
            })
            dataForChart = {
                columns: allCountrys,
                type: 'spline'
            }
        }
        const target = this.props.target;
        const sectionTarget = "scroll" + target;
        return(
            <Waypoint onEnter={function() {
                var elem = document.getElementById(target)
                elem.setAttribute("style", "color: #7FCCC2")
            }} onLeave={function(){
                var elem = document.getElementById(target)
                elem.setAttribute("style", "color: #757575")
            }}
            >
            <section id={sectionTarget} className="section scrollspy">
                <h4>{this.props.probs.name}</h4>
                <h6>{this.props.probs.description}</h6>
                <div>
                <HasMetaData data={this.props.metaData} info={this.props.probs.body.meta}/>
                </div>
                <C3Chart data={dataForChart} />
            </section>
            </Waypoint>
        )
    }
};
function HasMetaData(props) {
    const hasMetaData = props.data;
    if(hasMetaData){
        return <MetaData data={props.info} />
    }else{
        return null
    }
}
export default Chart