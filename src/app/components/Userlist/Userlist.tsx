import * as React from 'react';
import './Userlist.css';

interface Props {
    userList: Array<any>
}

export class Userlist extends React.Component<Props> {

    handleDrag = (ev:any, name:string) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    render() {
        const {userList} = this.props
        const list = (userList).map((item, index) => {
            const name = item.first_name+" "+item.last_name;
            return (
                <div key={item.id} className="user-list-items" 
                    id={`dragTarget_${item.id}`} 
                    draggable={true} 
                    onDragStart={(e) => this.handleDrag(e,`${item.first_name} ${item.last_name}`)}>
                    {`${item.first_name} ${item.last_name}`}
                </div>
            );
        });

        return (
            <div id="listSsection" className="userList">   
                {list}
            </div>
           
        )
    }
} 