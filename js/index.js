import { initSlider } from "./modules/initSlider.js";
import { initService } from "./modules/initService.js";
import { initReserve } from "./modules/initReserve.js";
const init = () => {
    initSlider();
    initService();
    initReserve();
};

window.addEventListener('DOMContentLoaded', init );