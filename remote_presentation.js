const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['T0', 'T+1', 'T+2', 'T+3', 'T+4', 'T+5', 'T+6', 'T+7', 'T+8', 'T+9', 'T+10'],
        datasets: [{
            label: 'Feedback Stabilization of Nonlinear Systems',
            data: [65, -59, 50, -30, 26, -10, 5, -3, 2, 0, 0],
            fill: false,
            borderColor: 'orange',
        }]
    },
    options: {
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 0.2,
                to: 0.5,
                loop: true
            }
        },
        scales: {
            y: {
                title: {
                    text: 'Optimum solution convergence',
                    display: true,
                },
                ticks: {
                    display: false,
                },
                min: -150,
                max: 150
            },
            x: {
                title: {
                    text: 'Timepace',
                    display: true,
                }
            }
        }
    }
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['T0', 'T+1', 'T+2', 'T+3', 'T+4', 'T+5', 'T+6', 'T+7', 'T+8', 'T+9', 'T+10'],
        datasets: [{
            label: 'Feedback Stabilization of Nonlinear Systems',
            data: [155, -139, 80, -59, 50, -30, 26, -10, 5, 0, 0],
            fill: false,
            borderColor: 'grey',
        }]
    },
    options: {
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 0.2,
                to: 0.5,
                loop: true
            }
        },
        scales: {
            y: {
                title: {
                    text: 'Optimum solution convergence',
                    display: true,
                },
                ticks: {
                    display: false,
                },
                min: -150,
                max: 150
            },
            x: {
                title: {
                    text: 'Timepace',
                    display: true,
                }
            }
        }
    }
});