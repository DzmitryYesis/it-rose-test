import {randomPoint} from './helpers/randomPoint';
import {f} from './helpers/f';
import {maxYDot, maxZDot, zeroDot} from './data';


// Данная функция всегда будет находить нужную т очку за 3 вызова функции.
// Ее удобно использовать, так как у нас зажаны границы куба

export const findPointBest = () => {
    console.log('search for 3 function calls')
    const random = randomPoint();
    console.log('point for search: ', random)

    const LZero = f(random, zeroDot)
    const LYMax = f(random, maxYDot)
    const LZMax = f(random, maxZDot)

    const initialY = Math.round(1 / 200 * (Math.pow(LZero, 2) - Math.pow(LYMax, 2) + 10000));
    const initialZ = Math.round(1 / 200 * (Math.pow(LZero, 2) - Math.pow(LZMax, 2) + 10000));
    const initialX = Math.round(Math.sqrt(Math.pow(LZero, 2) - Math.pow(initialY, 2) - Math.pow(initialZ, 2)))

    return {
        random_point: {x: initialX, y: initialY, z: initialZ},
        search_points: [zeroDot, maxYDot, maxZDot],
        calls: 3
    }
}

console.log(findPointBest())