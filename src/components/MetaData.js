import React from 'react'

class MetaData extends React.Component {
    render(){
        return(
            <div>
                <h2>Maximums{this.props.data.maximums.page_views}</h2>
                <h2>Minimums{this.props.data.minimums.page_views}</h2>
                <h2>Totals{this.props.data.totals.page_views}</h2>
            </div>
        )
    }
}  
  export default MetaData