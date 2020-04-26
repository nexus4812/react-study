import React, {Component} from 'react';
import {connect} from 'react-redux'
import {readEvent} from "../action";
import _ from 'lodash';

class EventIndex extends Component {

    componentDidMount() {
        this.props.readEvent();
    }

    renderEvents() {
        return _.map(this.props.event, event =>(
            <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
            </tr>
        ));
    }

    render() {
    return (
        <table>
            <tread>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </tread>

            <tbody>
                {this.renderEvents()}
            </tbody>
        </table>
    )
  }
}

const mapStateToProps = state => ({event:state.event});

const mapDispatchToProps = ({readEvent});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex)
