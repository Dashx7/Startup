import React from 'react';

export function Orm_Calculator() {
    return (
    < !DOCTYPE html >
        <html>

            <head>
                <meta charset="UTF-8">
                    <title>Calculator</title>
                    <style>
                        .input-box {
                            display: flex;
                        flex-direction: column;
                        align-items: center;
                        border: 1px solid black;
                        padding: 10px;
                        margin-top: 20px;
                        font-size: 30px;
                        }

                        .input-box input {
                            font - size: 20px;
                        /* Increase the font size */
                        padding: 5px;
                        margin-bottom: 10px;
                        border: none;
                        border-bottom: 1px solid black;
                        text-align: center;
                        }

                        .output-box {
                            display: flex;
                        flex-direction: column;
                        align-items: center;
                        border: 1px solid black;
                        padding: 10px;
                        margin-top: 20px;
                        margin-top: 20px;
                        }

                        .output-grid {
                            display: grid;
                        grid-template-columns: repeat(11, 1fr);
                        grid-template-rows: repeat(3, 1fr);
                        gap: 5px;
                        margin-top: 10px;
                        }
                    </style>
            </head>

            <body>
                <!-- This is the standarized template-->
                <div id="header-container"></div>
                <script>
    // Use JavaScript to load and insert the template into the page
                    fetch('template.html')
      .then(response => response.text())
      .then(template => {
                        document.getElementById('header-container').innerHTML = template;
      });
                </script>

                <div class="input-box">
                    <label for="weight">Weight:</label>
                    <input type="number" id="weight" name="weight" oninput="checkInputs()">
                        <label for="reps">Reps:</label>
                        <input type="number" id="reps" name="reps" oninput="checkInputs()">
                            <button id="calculate-btn" onclick="calculateAll()" disabled>Calculate</button>
                        </div>
                        <div class="output-box">
                            <div class="output-grid">
                                <div>1 Rep Max:</div>
                                <div id="rep-max-1"></div>
                                <div>2 Rep Max:</div>
                                <div id="rep-max-2"></div>
                                <div>3 Rep Max:</div>
                                <div id="rep-max-3"></div>
                                <div>4 Rep Max:</div>
                                <div id="rep-max-4"></div>
                                <div>5 Rep Max:</div>
                                <div id="rep-max-5"></div>
                                <br>
                                    <!-- To break it in half, probably a better way to do this -->
                                    <div>6 Rep Max:</div>
                                    <div id="rep-max-6"></div>
                                    <div>7 Rep Max:</div>
                                    <div id="rep-max-7"></div>
                                    <div>8 Rep Max:</div>
                                    <div id="rep-max-8"></div>
                                    <div>9 Rep Max:</div>
                                    <div id="rep-max-9"></div>
                                    <div>10 Rep Max:</div>
                                    <div id="rep-max-10"></div>
                            </div>
                        </div>

                        <script>
                            function checkInputs() {
      const weight = document.getElementById("weight").value;
                            const reps = document.getElementById("reps").value;
                            const calculateBtn = document.getElementById("calculate-btn");

                            if (weight && reps) { // If both inputs are filled
                                calculateBtn.disabled = false;
                            calculateBtn.style.backgroundColor = "#333";
      } else { // If either input is empty
                                calculateBtn.disabled = true;
                            calculateBtn.style.backgroundColor = "#555";
      }
    }

                            function calculateORM() {
      const weight = document.getElementById("weight").value;
                            const reps = document.getElementById("reps").value;
                            denominator = 1.0278 - 0.0278 * reps;
                            const orm = weight / denominator;
                            console.log("ORM: " + orm);
                            return orm;
    }
                            function calculateAll() {
      const weight = document.getElementById("weight").value;
                            const reps = document.getElementById("reps").value;

                            const oneRepMax = Math.round(calculateORM());
                            document.getElementById("rep-max-1").textContent = oneRepMax;
                            const twoRepMax = Math.round(oneRepMax * 0.95);
                            document.getElementById("rep-max-2").textContent = twoRepMax;
                            const threeRepMax = Math.round(oneRepMax * 0.93);
                            document.getElementById("rep-max-3").textContent = threeRepMax;
                            const fourRepMax = Math.round(oneRepMax * 0.9);
                            document.getElementById("rep-max-4").textContent = fourRepMax;
                            const fiveRepMax = Math.round(oneRepMax * 0.87);
                            document.getElementById("rep-max-5").textContent = fiveRepMax;
                            const sixRepMax = Math.round(oneRepMax * 0.85);
                            document.getElementById("rep-max-6").textContent = sixRepMax;
                            const sevenRepMax = Math.round(oneRepMax * 0.83);
                            document.getElementById("rep-max-7").textContent = sevenRepMax;
                            const eightRepMax = Math.round(oneRepMax * 0.8);
                            document.getElementById("rep-max-8").textContent = eightRepMax;
                            const nineRepMax = Math.round(oneRepMax * 0.77);
                            document.getElementById("rep-max-9").textContent = nineRepMax;
                            const tenRepMax = Math.round(oneRepMax * 0.75);
                            document.getElementById("rep-max-10").textContent = tenRepMax;
    }
                        </script>

                        <!-- Other content for your webpage -->

                    </body>

                </html>
    );
}