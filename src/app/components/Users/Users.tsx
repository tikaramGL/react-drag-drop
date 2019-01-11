import * as React from 'react';
import './Users.css';

export class Users extends React.Component {

    onDragOver = (ev:any) => {
        ev.preventDefault();
    }

    onDrop = (ev:any) => {
        let name = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(name));
    }

    render() {
        return (
            <div id="user-table">
                <table>
                    <tbody className="droptarget" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>this.onDrop(e)}>
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