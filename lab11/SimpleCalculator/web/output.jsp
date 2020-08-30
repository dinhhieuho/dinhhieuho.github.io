
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Calculator Result</title>
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>

<div class="container">
    <form method="post" id="calculator" action="/SimpleCalculator/calculator">
        <div class="row">
            <h3>
                Result:
            </h3>
        </div>
        <div class="row">
            Plus: <%= request.getAttribute("sum") %>
        </div>
        <div class="row">
            Minus: <%= request.getAttribute("minus") %>
        </div>
        <div class="row">
            Multiply: <%= request.getAttribute("mul") %>
        </div>
        <div class="row">
            Divide: <%= request.getAttribute("div") %>
        </div>
    </form>
</div>
</body>
</html>
