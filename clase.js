/*
Creează o structură de clase, în fișiere diferite.
Clasele trebuie să reprezinte diferite vehicule:
- Vehicul (Proprietăți: preț, an de fabricație)
    - Bicicletă 
        (Proprietăți: destinație [oraș, MTB], dimensiune roți, viteze)
    - Mașină (Proprietăți: tip, autonomie [km], număr de locuri, număr de uși)
        - Mașină electrică (Proprietăți: mărimea bateriei)
        - Mașină clasică (Proprietăți: combustibil [benzină, motorină])

Crează câte un fișier pentru fiecare clasă      
*/

import { Vehicle } from "./classes/vehicle.js";
import { Bicycle } from "./classes/bicycle.js";
import { Car } from "./classes/car.js";
import { ElectricCar } from "./classes/electricCar.js";
import { ClasicCar } from "./classes/clasicCar.js";
