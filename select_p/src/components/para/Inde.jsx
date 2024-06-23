import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Inde = () => {
  const [selected, setSelected] = useState(null);
  const [enablemultiselect, setEnablemultiselect] = useState(false);
  const [multiselection, setmultiselect] = useState([]);

  const handlesingleselection = (id) => {
    setSelected(id === selected ? null : id);
    console.log(id);
  };

  function handlemultipleselection(id) {
    let cpyMultiple = [...multiselection];
    const findIndexofCurrentId = cpyMultiple.indexOf(id);
    console.log(findIndexofCurrentId);
    if (findIndexofCurrentId === -1) {
      cpyMultiple.push(id);
      console.log(id);
    } else {
      cpyMultiple.splice(findIndexofCurrentId, 1);
    }
    setmultiselect(cpyMultiple);
    console.log(cpyMultiple);
  }

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnablemultiselect(!enablemultiselect)}>
          Enable multiselection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataitem) => (
              <div className="item" key={dataitem.id}>
                <div
                  className="title"
                  onClick={
                    enablemultiselect
                      ? () => handlemultipleselection(dataitem.id)
                      : () => handlesingleselection(dataitem.id)
                  }
                >
                  <h3>{dataitem.ques}</h3>
                  <span>+</span>
                </div>
                {enablemultiselect
                  ? multiselection.indexOf(dataitem.id) !== -1 && (
                      <div className="content">{dataitem.ans}</div>
                    )
                  : selected === dataitem.id && (
                      <div className="content">{dataitem.ans}</div>
                    )}
              </div>
            ))
          ) : (
            <div className="item">
              <div className="title">No Data Found</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Inde;
