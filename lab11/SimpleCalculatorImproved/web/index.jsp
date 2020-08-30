<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>

  <div class="container">
    <form method="post" id="calculator" action="/SimpleCalculatorImproved/calculator">
      <div class="row">
        <h3>
          Simple Calculator Improved Lab
        </h3>
      </div>
      <div class="row">
        <div class="col-md-5">
          <input type="number" id="a" name="a" class="form-control" /> +
          <input class="form-control" type="number" id="b" name="b" /> =
          <input type="text" id="plusResult" name="plusResult" class="form-control" readonly />
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <input type="number" id="c" name="c" class="form-control" /> -
          <input type="number" id="d" name="d" class="form-control" /> =
          <input type="text" id="minusResult" name="minusResult" class="form-control" readonly />
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <input type="number" id="e" name="e" class="form-control" /> *
          <input type="number" id="f" name="f" class="form-control" /> =
          <input type="text" id="multiplyResult" name="multiplyResult" class="form-control" readonly />
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <input type="number" id="g" name="g" class="form-control" /> /
          <input type="number" id="h" name="h" class="form-control" /> =
          <input type="text" id="divideResult" name="divideResult" class="form-control" readonly />
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <input type="submit" value="Submit" class="btn btn-primary" />
        </div>
      </div>
    </form>

    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script>
      $(document).ready(function() {
        $('#calculator').submit(function() {
          $form = $(this);
          $.post($form.attr('action'), $form.serialize(), function(responseText) {
            $('#plusResult').val(responseText.split("|")[0]);
            $('#minusResult').val(responseText.split("|")[1]);
            $('#multiplyResult').val(responseText.split("|")[2]);
            $('#divideResult').val(responseText.split("|")[3]);
          });
          return false;
        });
      });
    </script>
  </div>
  </body>
</html>
