const myChart = document.querySelector("#myChart");

const data = {
  labels: [
    "Jan",
    "Fab",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
  ],
  datasets: [
    {
      label: "Ismail Salary",
      data: [65, 59, 80, 81, 56, 55, 40, 85, 30, 75, 49],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};
console.log(data);

const config = {
  type: "line",
  data: data,
};
// console.log(config);

const lineChart = new Chart(myChart, config);

console.log(lineChart);

lineChart.data.labels.push("Dec");
lineChart.data.datasets[0].data.push(120);

lineChart.update();