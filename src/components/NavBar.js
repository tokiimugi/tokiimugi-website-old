import React from 'react';
 

export const NavBar = (props)=>{
    return (
        <table className="nav">
            <tbody>
                <tr>
                    {Object.keys(props.items).map((ele,val)=>{
                        return (<th key={val}>
                            <a className="nav-link" href={val ? "/" + ele.toLowerCase() : '/'} >{ele}</a>
                            </th>
                    )})}
                </tr>
            </tbody>
        </table>
    )
}

