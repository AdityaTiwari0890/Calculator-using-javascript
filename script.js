let current_display = '';

    function append(value) {
      current_display += value;
      document.getElementById("display").value = current_display;
    }

    function clearDisplay() {
      current_display = '';
      document.getElementById("display").value = '';
    }

    function calculate() {
      try {
        current_display = eval(current_display).toString();
        document.getElementById("display").value = current_display;
      } catch {
        document.getElementById("display").value = "Error";
        current_display = '';
      }
    }

    // Initialize display
    document.getElementById("display").value = current_display;