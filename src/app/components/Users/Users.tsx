import * as React from 'react';
import './Users.css';

interface Props {
    passedFunction: () => void,
    userList: Array<any>
}

export class Users extends React.Component<Props> {

    onDragOver = (ev:any) => {
        ev.preventDefault();
        ev.target.style.border = "2px dotted #ff8a65";
    }

    fndragStart = (event:any) => {
        event.dataTransfer.setData("Text", event.target.id);
    }

    onDragLeave = (event:any) => {
        event.target.style.border = "";
    }
    

    cancleActionBtn = (e:Event, id:any, text:any) => {
        e.srcElement.parentElement.innerHTML="";

        let node = document.createElement("DIV");
		node.setAttribute('class', 'user-list-items');
		node.id = id;
		node.setAttribute('draggable', 'true');
		node.addEventListener('dragstart', ev => {
			this.fndragStart(ev);
		}, false);
		var textnode = document.createTextNode(text);
        node.appendChild(textnode);
		document.getElementById('listSsection').prepend(node);
    }

    onDrop = (ev:any) => {
        let name = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(name));
        const id = ev.target.querySelector('div').id;
        const text = ev.target.querySelector('div').innerText;
        
        //adding button to target
        var btn = document.createElement('button');
        btn.setAttribute('id', 'cancelActionBtn');
        btn.setAttribute('class', 'cancel-btn');
        btn.innerHTML = 'X';
        btn.addEventListener("click", (e) => this.cancleActionBtn(e, id, text));
        ev.target.appendChild(btn);
        ev.target.style.border = "";
        
    }

    render() {
        return (
            <div id="user-table">
                <table>
                    <tbody className="droptarget" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>this.onDrop(e)} onDragLeave={(e)=>this.onDragLeave(e)} >
                        <tr >
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr >
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr >
                            <td></td>
                            <td></td>
                             <td></td>
                            <td></td>
                        </tr>
                        <tr >
                            <td></td>
                            <td></td>
                             <td></td>
                            <td></td>
                        </tr>
                        <tr >
                            <td></td>
                            <td></td>
                             <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
       
        )
    }
}