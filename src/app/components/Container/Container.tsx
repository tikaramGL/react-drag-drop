import * as React from 'react';

import './Container.css';

import {Header} from '../Header/Header';
import {Userlist} from '../Userlist/Userlist';
import {Users} from '../Users/Users';

interface Props {
}

interface State {
    userList: Array<any>,
    tempUserList: Array<any>
}

export class Container extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            userList: [
                { "id": 1, "first_name": "Theodora", "last_name": "Baylis" },
                { "id": 2, "first_name": "Aubert", "last_name": "Borthe" },
                { "id": 3, "first_name": "Philis", "last_name": "Dunkinson" },
                { "id": 4, "first_name": "Mella", "last_name": "Godly" },
                { "id": 5, "first_name": "Lucretia", "last_name": "Goldston" },
                { "id": 6, "first_name": "Malena", "last_name": "Davidoff" },
                { "id": 7, "first_name": "Faye", "last_name": "Sante" },
                { "id": 8, "first_name": "Merridie", "last_name": "Glynn" },
                { "id": 9, "first_name": "Desiree", "last_name": "Waber" },
                { "id": 10, "first_name": "Camey", "last_name": "Winpenny" },
                {"id":11,"first_name":"Penrod","last_name":"Crowd"},
                {"id":12,"first_name":"Claudette","last_name":"Dimanche"},
                {"id":13,"first_name":"Vincenz","last_name":"Leftley"},
                {"id":14,"first_name":"Pooh","last_name":"Myton"},
                {"id":15,"first_name":"Gwynne","last_name":"Fernandes"},
                {"id":16,"first_name":"Rabi","last_name":"Parlott"},
                {"id":17,"first_name":"Riley","last_name":"Cudd"},
                {"id":18,"first_name":"Allyn","last_name":"Mammatt"},
                {"id":19,"first_name":"Regan","last_name":"Beurich"},
                {"id":20,"first_name":"Hedvige","last_name":"Bysaker"}
            ],

            tempUserList: []
        }
    }
  

    render() {
        return (<div>
            <Header />
            <div className='rowC'>
                <Userlist userList={this.state.userList} />
                <Users userList={this.state.userList}/>
            </div>
        </div>
        )
    }
}