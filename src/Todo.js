import React from "react"


export default function Todo(props) {
    return (
        <div className="todos">
            {props.todo}
        </div>
    )
}