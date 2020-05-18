import React from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Task</th>
                <th>Completed</th>

            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        if(row.checked){
            return (
                <tr key={index}>
                        <td style={{textDecoration: "line-through"}} >{row.task}</td>
                        <td> <input type="checkbox"
                                checked={row.checked}
                                onChange={() => props.handleCheck(index)}
                                />

                        </td>
                        <td>
                            <button onClick={() => props.removeCharacter(index)}>Delete</button>
                        </td>
                </tr>
            );
        }
        else{
            return (
                <tr key={index}>
                        <td>{row.task}</td>
                        <td> <input type="checkbox"
                                checked={row.checked}
                                onChange={() => props.handleCheck(index)}
                                />

                        </td>
                        <td>
                            <button onClick={() => props.removeCharacter(index)}>Delete</button>
                        </td>
                </tr>
            );
        }
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter, handleCheck } = props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} handleCheck={handleCheck} />
            </table>
        );
}

export default Table;