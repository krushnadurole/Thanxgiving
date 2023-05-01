import React from 'react'
import { useContext } from 'react';
import ElementContext from '../../Context/Element/ElementContext';
import formatDistance from 'date-fns/formatDistance'
import './Elementitem.css'
const ElementItem = (props) => {
    const context = useContext(ElementContext)
    const { element } = props;
    const datestr = element.createdAt;
    const str = formatDistance(
        new Date(datestr),
        new Date()
    );
    return (
        <>
            <div className='maindev'>
                <div className='maindev card text-center'>
                    <div className='card-header navbar-light na'>
                    {element.title}
                        < p className="card-title" > {element.name}</p >
                    </div>
                    <p className="card-body">{element.description}</p>
                    <button class="btn btn-success">{element.category}</button>
                    <div class="h card-footer text-muted">
                        {str}
                    </div>
                    <div>
                        {element.Giver}
                    </div>
                    <div>
                        {element.email}
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>

        </>
    )
}

export default ElementItem

{/* <div className="card cardc">
<div class="card-body">
    < p className="card-title" > {element.name}</p >
    <p className="card-body">{element.description}</p>
    <button class="btn btn-primary">{element.category}</button>
    <div class="card-footer text-muted">
        {str}
    </div>
    <div>
        {element.Giver}
    </div>
</div>
</div> */}