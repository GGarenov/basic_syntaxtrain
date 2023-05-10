function guineaPig(input) {
    let food = Number(input[0]);
    let hay = Number(input[1]);
    let cover = Number(input[2]);
    let pigWeight = Number(input[3]);
    let goToStore = false;

    for (i = 1; i <= 30; i++){
        food = food - 0.3;
        if (i % 2 === 0) {
            hay -= food * 0.05;
        }
        if (i % 3 === 0) {
            cover -= pigWeight / 3;
        }
    
      if (food - 0 < 1e-3 || hay - 0 < 1e-3 || cover -0 < 1e-3) {
            goToStore = true;
            break;
        }
    }
    return goToStore
        ? `Merry must go to the pet store!`
        :`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`
}
guineaPig(10, 5, 5.2, 1)