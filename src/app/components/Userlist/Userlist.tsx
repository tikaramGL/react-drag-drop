import * as React from 'react';
import './Userlist.css';

interface Props {

}

interface State {
    userList: Array<any>
}

export class Userlist extends React.Component<Props, State> {
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
                { "id": 10, "first_name": "Camey", "last_name": "Winpenny" }
            ],
        }
    }


    handleDrag = (ev:any, name:string) => {
        ev.dataTransfer.setData("Text", ev.target.id);

    }

    render() {

        const list = (this.state.userList).map((item, index) => {
            return (
                <div key={item.id} className="user-list-items" id={`dragTarget_${item.id}`} draggable={true} onDragStart={(e) => this.handleDrag(e,`${item.first_name} ${item.last_name}`)}>{item.first_name} {item.last_name}</div>
            );
        });

        return (
            <div className="userList">   
                {list}
            </div>
           
        )
    }
} 