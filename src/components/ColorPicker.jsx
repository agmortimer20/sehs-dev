import React, { useEffect, useMemo, useState } from "react";

export default function ColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [alpha, setAlpha] = useState(1);

  const hex = useMemo(() => {
    let redHex = parseInt(red).toString(16);
    let greenHex = parseInt(green).toString(16);
    let blueHex = parseInt(blue).toString(16);

    return (
      "#" +
      (redHex.length == 1 ? "0" + redHex : redHex) +
      (greenHex.length == 1 ? "0" + greenHex : greenHex) +
      (blueHex.length == 1 ? "0" + blueHex : blueHex)
    );
  }, [red, green, blue]);

  useEffect(() => {
    (async () => {
      const Tooltip = await import("bootstrap/js/dist/tooltip");
      new Tooltip.default(document.querySelector("#alphaTooltip"));
    })();
  }, []);

  const colorSquareStyle = {
    borderRadius: "5px",
    minWidth: "250px",
    height: "250px",
    border: "2px solid black",
    backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`,
  };

  return (
    <>
      <div className="col-sm-12 col-md-4 p-1">
        <label className="form-label" htmlFor="red">
          Red: {red}
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="255"
          step="1"
          value={red}
          onChange={(e) => setRed(e.target.value)}
        />
        <label className="form-label" htmlFor="red">
          Green: {green}
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="255"
          step="1"
          value={green}
          onChange={(e) => setGreen(e.target.value)}
        />
        <label className="form-label" htmlFor="red">
          Blue: {blue}
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="255"
          step="1"
          value={blue}
          onChange={(e) => setBlue(e.target.value)}
        />
        <label className="form-label" htmlFor="red">
          Alpha: {alpha}{" "}
          <span
            id="alphaTooltip"
            className="border"
            title="opacity"
            data-bs-placement="right"
          >
            ❔
          </span>
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="1"
          step="0.01"
          value={alpha}
          onChange={(e) => setAlpha(e.target.value)}
        />
      </div>
      <div className="col-sm col-md-4 p-1">
        <div style={colorSquareStyle} />
        <p>Hex: {hex}</p>
      </div>
    </>
  );
}
