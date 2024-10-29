"use client";

import { useState } from "react";
import { ArrowDown } from "./arrowDown";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Option 1");

  const updateValue = (value: string) => {
    setSelectValue(value);
    setIsOpen(false);
  };

  return (
    <div>
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      <p className="text-base">This is a paragraph</p>
      <a href="https://freecodecamp.org">This is an anchor</a>
      <div className="my-4">
        <button className="btn btn-primary">This is a primary button</button>
      </div>
      <div className="my-4">
        <button className="btn btn-secondary">This is a secondary button</button>
      </div>
      <div className="my-4">
        <button disabled className="btn btn-secondary">This is a disabled button</button>
      </div>
      <div>       
        <input type="text" placeholder="E-mail"/>
      </div>
      <div>       
        <input disabled type="text" placeholder="E-mail"/>
      </div>
      <div>       
        <input type="date" />
      </div>
      <div className="flex items-start my-4">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem velit mollitia quas aperiam suscipit accusamus in aliquam maiores quam omnis sed quasi numquam quia tempora placeat totam, recusandae sunt quos?</label>
      </div>
      <div>
        <select>
          <option>Option1</option>
          <option>Option2</option>
        </select>
      </div>

      <div className="Select">
        <div className="child flex items-center justify-between pr-0.5" onClick={() => setIsOpen(!isOpen)}>
          <span>{selectValue}</span>
          <div className={isOpen ? "rotate-180 transition": "rotate-0 transition"}>
          <ArrowDown />
          </div>
        </div>
        {isOpen && (
        <div>
          <ul className="flex flex-col divide-y border-t">
            <li className="child" onClick={() => updateValue("Option 1")}>Option 1</li>
            <li className="child" onClick={() => updateValue("Option 2")}>Option 2</li>
            <li className="child" onClick={() => updateValue("Option 3")}>Option 3</li>
          </ul>
        </div>
        )}
      </div>

      {/* <h1>This is another title</h1>
      <h2>This is another subtitle</h2> */}
    </div>
  );
}
