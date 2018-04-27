import React from 'react'

class MetaData extends React.Component {
    render(){
        return(
            <div className="metaData row">
                <h5 className="col m4 l4">Maximums <br/>{this.props.data.maximums.page_views}</h5>
                <h5 className="col m4 l4">Minimums <br/>{this.props.data.minimums.page_views}</h5>
                <h5 className="col m4 l4">Totals <br/>{this.props.data.totals.page_views}</h5>
            </div>
        )
    }
}  
  export default MetaData