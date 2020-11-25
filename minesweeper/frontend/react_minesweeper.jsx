import React from "react";
import ReactDOM from "react-dom";
import Game from "./game"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('main');
    ReactDOM.render(<Game />, root)
});
