"use client";

import { useState } from "react";
import data from "./accrodianData";

import "./style.css";
import { Button } from "../ui/button";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // handle single click accordian
  function handleSingelSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // handle multple click accordian

  function handleMultiSelection(getCurrentId) {
    let copymultiple = [...multiple];
    const FindIndexOfCurrentId = copymultiple.indexOf(getCurrentId);

    if (FindIndexOfCurrentId === -1) copymultiple.push(getCurrentId);
    else copymultiple.splice(FindIndexOfCurrentId, 1);

    setMultiple(copymultiple);
  }

  return (
    <div className="wrapper">
      <Button onClick={() => setenableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </Button>
      <div className="accoridan">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataitem.id)
                    : () => handleSingelSelection(dataitem.id)
                }
                className="title"
              >
                <h3>{dataitem.Question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataitem.id) !== -1 && (
                    <div className="content">{dataitem.anwser}</div>
                  )
                : selected === dataitem.id && (
                    <div className="content">{dataitem.anwser}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data is Available</div>
        )}
      </div>
    </div>
  );
}
