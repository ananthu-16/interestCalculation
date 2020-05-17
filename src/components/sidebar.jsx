import React from 'react';

//display recent inputs

function SideBar(props){

  function createEntry(entry){
    return (
      <div>
        <ul>
          <li>
            <p>Amount : {entry.amount}</p>
            <p>Duration : {entry.duration}</p>
          </li>
        </ul>
        <button id={entry.amount} name={entry.duration} onClick={props.onClicked} >calculate</button>
      </div>
    )
  }

  return (
    <div>
      <div>
        <h2>Recent Inputs</h2>
      </div>
        {props.data ? props.data.map(createEntry) : null}
    </div>
  );
}

export default SideBar;
