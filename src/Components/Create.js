import React, { Component } from 'react';
import firebase from 'firebase';
import fire from '../config/Fire';


class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '',
            dateVal: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.findDate = this.findDate.bind(this);
        this.submit = this.submit.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);

    }

    handleChange(event) {
        this.setState({ val: event.target.value })
    }

    findDate() {
        var curr = new Date();
        curr.setDate(curr.getDate() + 3);
        var date1 = curr.toISOString().substr(0, 10);
        this.setState({ dateVal: date1 });
    }

    submit(e) {
        console.log(this.state.dateVal);
        this.saveTicket(this.state.val, this.state.dateVal);
    }

    saveTicket(pValue, tValue) {
        var ticketRef = firebase.database().ref('Ticket');
        var newTicketRef = ticketRef.push();
        newTicketRef.set({
            Passengers: pValue,
            Time: tValue
        })
    }

    handleTimeChange(e) {
        this.setState({ dateVal: e.target.value })
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        No. of Passengers:
                     <input type="text" value={this.state.val} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Set time:
                <input id="dateRequired" type="time" name="dateRequired" defaultValue={this.findDate} onChange={this.handleTimeChange} />
                    </label>
                </form>
                <button onClick={this.submit}>Create</button>
            </div>
        )
    }
}

export default Create;