var grid = new Muuri('.grid', {
    layout: {
        fillGaps: true,
        rounding: false
    },
    dragEnabled: false
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
});