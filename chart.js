const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['CLT', 'RPA'],
        datasets: [{
            label: 'Custo Operacional',
            data: [150000, 75698],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(243, 125, 32, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(243, 125, 32, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
let updateChart = function (data) {
    myChart.data.datasets[0].data = data;
    myChart.update();
}