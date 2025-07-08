/*secPoweringPayments*/

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".tab-panel");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            tab.classList.add("active");
            const panel = document.getElementById(tab.id + "-panel");
            if (panel) panel.classList.add("active");
        });
    });
});


/*secRedefiningPayment Carousel*/
 
const updateRedefiningPaymentCarousel = () => {
    const redeiningTrack = document.querySelector('.redeining-container');
    const secRedefiningPayment = document.querySelector('#secRedefiningPayment');

    const secRedefiningPaymentCards = redeiningTrack.querySelectorAll('.card');
    const secRedefiningPaymentPrevBtn = secRedefiningPayment.querySelector('.slide-prev');
    const secRedefiningPaymentNextBtn = secRedefiningPayment.querySelector('.slide-next');

    let redefiningPaymentCurrentIndex = 0;

    function visibleCardsCount() {
        const containerWidth = secRedefiningPayment.offsetWidth;
        const cardWidth = secRedefiningPaymentCards[0].offsetWidth + 20; // adjust 20 if margin/gap differs
        return Math.floor(containerWidth / cardWidth);
    }

    function updateRedefiningPaymentCarousel() {
        const cardWidth = secRedefiningPaymentCards[0].offsetWidth + 20;
        const maxIndex = secRedefiningPaymentCards.length - visibleCardsCount();

        // Clamp index
        redefiningPaymentCurrentIndex = Math.max(0, Math.min(redefiningPaymentCurrentIndex, maxIndex));

        const offset = cardWidth * redefiningPaymentCurrentIndex;
        redeiningTrack.style.transform = `translateX(-${offset}px)`;
    }

    // Button events
    secRedefiningPaymentNextBtn.addEventListener('click', () => {
        redefiningPaymentCurrentIndex++;
        updateRedefiningPaymentCarousel();
    });

    secRedefiningPaymentPrevBtn.addEventListener('click', () => {
        redefiningPaymentCurrentIndex--;
        updateRedefiningPaymentCarousel();
    });

    // Optional transition
    redeiningTrack.style.transition = 'transform 0.4s ease';

}
updateRedefiningPaymentCarousel();


