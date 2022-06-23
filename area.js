function calculateArea() {
    let width = document.getElementById("width").value;
    let length = document.getElementById("length").value;
    let area = width * length;
    document.getElementById("area").value = area;
  
  }
  function calculateAreaC() {
    let radius = document.getElementById("radius").value;
    let areaC = 3.142 * radius * radius;
    document.getElementById("areaC").value = areaC;

  }

  function calculateAreaT() {
    let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;
    let areaT = (base * height) / 2;
    document.getElementById("areaT").value = areaT;
  }