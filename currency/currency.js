
function calculate() {
    var amount = parseFloat(document.getElementById("amount").value);
    var select = document.getElementById("select");
    var select1 = document.getElementById("select1");
    var result = document.getElementById("result");
  
    if (select.value === "USD") && (select1.value === "USD")  {
      result.value = (amount * 1);
    }
    if (select.value === "USD") && (select1.value === "EUR")  {
      result.value = (amount * 0.88);
    }
    if (select.value === "USD") && (select1.value === "AUD")  {
      result.value = (amount * 1.37);
    }
    if (select.value === "USD") && (select1.value === "GBP")  {
      result.value = (amount * 0.69);
    }
    if (select.value === "USD") && (select1.value === "JPY")  {
      result.value = (amount * 108.96);
    }
    if (select.value === "EUR") && (select1.value === "EUR")  {
      result.value = (amount * 1);
    }
    if (select.value === "EUR") && (select1.value === "USD")  {
      result.value = (amount * 1.13);
    }
    if (select.value === "EUR") && (select1.value === "AUD")  {
      result.value = (amount * 1.55);
    }
    if (select.value === "EUR") && (select1.value === "GBP")  {
      result.value = (amount * 0.79);
    }
    if (select.value === "EUR") && (select1.value === "JPY")  {
      result.value = (amount * 123.47);
    }
    if (select.value === "EUR") && (select1.value === "EUR")  {
      result.value = (amount * 1);
    }
    if (select.value === "EUR") && (select1.value === "USD")  {
      result.value = (amount * 1.13);
    }
    if (select.value === "EUR") && (select1.value === "AUD")  {
      result.value = (amount * 1.55);
    }
    if (select.value === "EUR") && (select1.value === "GBP")  {
      result.value = (amount * 0.79);
    }
    if (select.value === "EUR") && (select1.value === "JPY")  {
      result.value = (amount * 123.47);
    }
    if (select.value === "GPB") && (select1.value === "EUR")  {
      result.value = (amount * 1.27);
    }
    if (select.value === "GPB") && (select1.value === "USD")  {
      result.value = (amount * 1.44);
    }
    if (select.value === "GPB") && (select1.value === "AUD")  {
      result.value = (amount * 1.98);
    }
    if (select.value === "GPB") && (select1.value === "GBP")  {
      result.value = (amount * 1);
    }
    if (select.value === "GPB") && (select1.value === "JPY")  {
      result.value = (amount * 157.08);
    }
    if (select.value === "AUD") && (select1.value === "EUR")  {
      result.value = (amount * 0.64);
    }
    if (select.value === "AUD") && (select1.value === "USD")  {
      result.value = (amount * 0.73);
    }
    if (select.value === "AUD") && (select1.value === "AUD")  {
      result.value = (amount * 1);
    }
    if (select.value === "AUD") && (select1.value === "GBP")  {
      result.value = (amount * 0.51);
    }
    if (select.value === "AUD") && (select1.value === "JPY")  {
      result.value = (amount * 79.51);
    }
    if (select.value === "JPY") && (select1.value === "EUR")  {
      result.value = (amount * 0.0081);
    }
    if (select.value === "JPY") && (select1.value === "USD")  {
      result.value = (amount * 0.0092);
    }
    if (select.value === "JPY") && (select1.value === "AUD")  {
      result.value = (amount * 0.013);
    }
    if (select.value === "JPY") && (select1.value === "GBP")  {
      result.value = (amount * 0.0064);
    }
    if (select.value === "JPY") && (select1.value === "JPY")  {
      result.value = (amount * 1);
    }
  }
