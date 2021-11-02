import React, { useState } from "react";

import './GridTable.css';

import GridTableRow from "./components/GridTableRow";
import GridTableCell from "./components/GridTableCell";

const GridTable = () => {
  const [state, setState] = useState({
    fName: '',
    lName: '',
    employees: []
  });

  const { fName, lName, employees } = state;
  const isFull = (employees.length === 5);

  const createEmployee = () => {
    if (fName.length && lName.length && !isFull) {
      employees.push({ fName, lName, highLighted: false });
      setState({
        fName: '',
        lName: '',
        employees
      });
    }
  };
  const removeEmployee = (index: number) => {
    const employeesState = [...employees];
    employeesState.splice(index, 1);
    setState({
      ...state,
      employees: employeesState
    });
  };

  const highlightEmployee = (index: number) => {
    const employeesState = [...employees];
    console.log(index);

    if (employeesState[index]) {
      employeesState[index].highLighted = true;
      setState({
        ...state,
        employees: employeesState
      });
    }
  };
  const unHighlightEmployee = (index: number) => {
    const employeesState = [...employees];

    if (employeesState[index]) {
      employeesState[index].highLighted = false;
      setState({
        ...state,
        employees: employeesState
      });
    }
  };

  const setFName = (e) => {
    setState({
      ...state, fName: e.target.value
    });
  }
  const setLName = (e) => {
    setState({
      ...state, lName: e.target.value
    });
  }

  return (
    <>
      <div id="grid">
        <GridTableCell
          gridColumnStart={1}
          gridColumnEnd={4}
        >Pracownicy</GridTableCell>
        {employees.map(({ fName, lName, highLighted }, index) => {
          const additionalProps = {};

          if (highLighted) {
            additionalProps.backgroundColor = 'red';
          }

          return (
            <GridTableRow key={`${fName}_${lName}`}>
              <GridTableCell {...additionalProps}>{fName}</GridTableCell>
              <GridTableCell {...additionalProps}>{lName}</GridTableCell>
              <GridTableCell>
                <button
                  onMouseEnter={() => highlightEmployee(index)}
                  onMouseLeave={() => unHighlightEmployee(index)}
                  onClick={() => removeEmployee(index)}
                >
                  Remove
                </button>
              </GridTableCell>
            </GridTableRow>
          );
        })}
        <GridTableRow>
          <GridTableCell>
            <input type="text" name="fName" value={fName} onChange={setFName} />
          </GridTableCell>
          <GridTableCell>
            <input type="text" name="lName" value={lName} onChange={setLName} />
          </GridTableCell>
          <GridTableCell>
            <button onClick={createEmployee} disabled={isFull}>Create</button>
          </GridTableCell>
        </GridTableRow>
      </div>
    </>
  );
}

export default GridTable;
