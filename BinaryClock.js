import React, { useEffect, useState } from "react";
import redDot0 from "./redDot0.png";
import redDot1 from "./redDot1.png";

export default function BinaryClock() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [miliseconds, setMiliseconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      let hours = new Date().getHours();
      let minutes = new Date().getMinutes();
      let seconds = new Date().getSeconds();
      let milis = new Date().getMilliseconds();
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      setMiliseconds(milis);
    }, 100);
  }, []);

  return (
    <div
      style={{
        padding: "14px",
        margin: "auto",
        border: "1px solid black",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/buried.png')",
      }}
    >
      <h2>Binary Clock By Andreas</h2>
      <hr></hr>
      <h1
        style={{
          color: "blue",
          fontFamily: "Arial",
          paddingTop: "30px",
          margin: "10px",
        }}
      >
        {hours} : {minutes} : {seconds} : {parseInt(miliseconds / 100)}
      </h1>
      <div>
        <table
          style={{
            margin: "auto",
            border: "3px solid black",
            width: "600px",
            borderRadius: "10px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "14px",
                  margin: "auto",
                  border: "1px solid black",
                  borderRadius: "10px",
                  backgroundColor: "lightGray",
                }}
              >
                Hours
              </th>
              <th
                style={{
                  padding: "14px",
                  margin: "auto",
                  border: "1px solid black",
                  borderRadius: "10px",
                  backgroundColor: "lightGray",
                }}
              >
                Minutes
              </th>
              <th
                style={{
                  padding: "14px",
                  margin: "auto",
                  border: "1px solid black",
                  borderRadius: "10px",
                  backgroundColor: "lightGray",
                }}
              >
                Seconds
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Number(hours).toString(2)}</td>
              <td>{Number(minutes).toString(2)}</td>
              <td>{Number(seconds).toString(2)}</td>
            </tr>

            <tr>
              <td
                style={{
                  margin: "auto",
                  border: "2px solid black",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "lightGray",
                }}
              >
                {Number(hours)
                  .toString(2)
                  .split("")
                  .map((item, index) => {
                    return item === "0" ? (
                      <img
                        key={index}
                        src={redDot0}
                        width="20px"
                        alt="..."
                      ></img>
                    ) : (
                      <img
                        key={index}
                        src={redDot1}
                        width="20px"
                        alt="..."
                      ></img>
                    );
                  })}
              </td>
              <td
                style={{
                  margin: "auto",
                  border: "2px solid black",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "lightGray",
                }}
              >
                {Number(minutes)
                  .toString(2)
                  .split("")
                  .map((item, index) => {
                    return item === "0" ? (
                      <img
                        key={index}
                        src={redDot0}
                        width="20px"
                        alt="..."
                      ></img>
                    ) : (
                      <img
                        key={index}
                        src={redDot1}
                        width="20px"
                        alt="..."
                      ></img>
                    );
                  })}
              </td>
              <td
                style={{
                  margin: "auto",
                  border: "2px solid black",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "lightGray",
                }}
              >
                {Number(seconds)
                  .toString(2)
                  .split("")
                  .map((item, index) => {
                    return item === "0" ? (
                      <img
                        key={index}
                        src={redDot0}
                        width="20px"
                        alt="..."
                      ></img>
                    ) : (
                      <img
                        key={index}
                        src={redDot1}
                        width="20px"
                        alt="..."
                      ></img>
                    );
                  })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
