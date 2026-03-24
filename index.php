<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Timeline Card</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">

<style>
body {
    background: #1a1a1a;
    font-family: 'Poppins', sans-serif;
}

/* CARD */
.card {
    width: 450px;
    height: 220px;
    background: linear-gradient(135deg, #2d2de1, #3b3be7);
    border-radius: 20px;
    position: relative;
    padding: 30px;
    color: #fff;
    overflow: hidden;
}

/* TOP RIGHT YEAR */
.year {
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 60px;
    font-weight: 700;
    color: rgba(255,255,255,0.25);
}

/* TEXT SECTION */
.content {
    position: absolute;
    bottom: 30px;
    left: 30px;
}

.content h3 {
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    line-height: 1.5;
}

/* LEFT LINE */
.content::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 5px;
    width: 3px;
    height: 50px;
    background: #fff;
    border-radius: 5px;
}

/* CURVE LINE (SVG STYLE) */
.curve {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.curve svg {
    width: 100%;
    height: 100%;
}

.curve path {
    fill: none;
    stroke: rgba(255,255,255,0.15);
    stroke-width: 2;
}

</style>
</head>

<body>

<div class="card">

    <div class="year">2017</div>

    <div class="curve">
        <svg viewBox="0 0 500 250">
            <path d="M20,120 C120,20 200,200 320,120 S480,200 480,200" />
        </svg>
    </div>

    <div class="content">
        <h3>Humble Beginnings<br>& Pilot Launch</h3>
    </div>

</div>

</body>
</html>