import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

const StreamList = (props) => {
    useEffect(() => {
        props.fetchStreams()
    }, [props])

    // const renderStreamList = props.streamList.map(stream => {
    //     return (
    //         <div className="item" key={stream.id}>
    //             <div className="header">
    //                 {stream.title}
    //             </div>
    //             <div className="description">
    //                 {stream.description}
    //             </div>
    //         </div>
    //     )
    // })

    return (
        <div className="ui container">
            {/* {renderStreamList} */}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     console.log(state);
//     return { streamList: state.streams }
// }

export default connect(null, { fetchStreams })(StreamList)
