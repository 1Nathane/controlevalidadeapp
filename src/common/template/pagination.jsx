import React from "react"

export default props => {
    return (
        <div className="pull-right">
            <div className="btn-group">
                <p>{props.pagina}/{props.totalPaginas}
                    <button onClick={props.onClick} type="button" className="btn btn-default"><i className="fa fa-chevron-left"></i></button>
                    <button onClick={props.onClick} type="button" className="btn btn-default"><i className="fa fa-chevron-right"></i></button>
                </p>
            </div>
        </div>
    )
}