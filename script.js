let moodStats = JSON.parse(localStorage.getItem("moods")) || {
    "😀": 0,
    "🙂": 0,
    "😐": 0,
    "☹️": 0
};

function saveMood(mood) {
    moodStats[mood]++;
    localStorage.setItem("moods", JSON.stringify(moodStats));
    updateChart();
}

let ctx = document.getElementById("moodChart").getContext("2d");

let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["😀", "🙂", "😐", "☹️"],
        datasets: [{
            label: 'Количество записей',
            data: [
                moodStats["😀"],
                moodStats["🙂"],
                moodStats["😐"],
                moodStats["☹️"]
            ]
        }]
    },
    options: {
        responsive: false,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

function updateChart() {
    chart.data.datasets[0].data = [
        moodStats["😀"],
        moodStats["🙂"],
        moodStats["😐"],
        moodStats["☹️"]
    ];
    chart.update();
}
