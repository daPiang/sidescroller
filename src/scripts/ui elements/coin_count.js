export default coin_count => {
    const coinsElement = document.getElementsByClassName('coins-amount')[0];
    const currentCount = Number(coinsElement.innerText);

    coinsElement.innerText = currentCount + coin_count;
};