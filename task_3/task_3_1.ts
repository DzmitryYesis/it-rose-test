import {f} from './helpers/f'
import {randomPoint} from './helpers/randomPoint'
import {initialPoint} from './data';
import {PointType} from './type';


// Работа алгоритма в данной функции следующая: получем рандомную точку и заданную,
// вычисляем расстояние, затем сравниваем значения точек X, Y Z у обоих "точек".
// В зависимости от сравнения увеличиваем или именьшаем координаты рандомной точки.
// Постепенно расстояние будет уменьшатся, так как значения X, Y, Z двух точек будут стремится друг к другу.
// И когда они станут равны, функция расстояния вернет нам 0 и мы выйдем из цикла и получим все значения для ответа
export const findPointWithAlgorithm = () => {

    const random = randomPoint();
    console.log(' start random point: ', random)
    const result = {
        random_point: random,
        search_points: [],
        calls: 0
    }

    let destination = f(initialPoint, random);

    while (destination !== 0) {
        result.calls += 1;
        const isXEqual = initialPoint.x === random.x
        const isYEqual = initialPoint.y === random.y
        const isZEqual = initialPoint.z === random.z

        if (isXEqual && isYEqual && isZEqual) {
            break;
        } else if (!isXEqual && !isYEqual && !isZEqual) {
            const iterationPoint: PointType = {
                x: initialPoint.x > random.x ? random.x += 1 : random.x -= 1,
                y: initialPoint.y > random.y ? random.y += 1 : random.y -= 1,
                z: initialPoint.z > random.z ? random.z += 1 : random.z -= 1
            }
            result.search_points.push(iterationPoint)
        } else if (isXEqual && !isYEqual && !isZEqual) {
            const iterationPoint: PointType = {
                x: random.x,
                y: initialPoint.y > random.y ? random.y += 1 : random.y -= 1,
                z: initialPoint.z > random.z ? random.z += 1 : random.z -= 1
            }
            result.search_points.push(iterationPoint)
        } else if (isXEqual && isYEqual && !isZEqual) {
            const iterationPoint: PointType = {
                x: random.x,
                y: random.y,
                z: initialPoint.z > random.z ? random.z += 1 : random.z -= 1
            }
            result.search_points.push(iterationPoint)
        } else if (isXEqual && !isYEqual && isZEqual) {
            const iterationPoint: PointType = {
                x: random.x,
                y: initialPoint.y > random.y ? random.y += 1 : random.y -= 1,
                z: random.z
            }
            result.search_points.push(iterationPoint)
        } else if (!isXEqual && isYEqual && isZEqual) {
            const iterationPoint: PointType = {
                x: initialPoint.x > random.x ? random.x += 1 : random.x -= 1,
                y: random.y,
                z: random.z
            }
            result.search_points.push(iterationPoint)
        } else if (!isXEqual && !isYEqual && isZEqual) {
            const iterationPoint: PointType = {
                x: initialPoint.x > random.x ? random.x += 1 : random.x -= 1,
                y: initialPoint.y > random.y ? random.y += 1 : random.y -= 1,
                z: random.z
            }
            result.search_points.push(iterationPoint)
        } else if (!isXEqual && isYEqual && !isZEqual) {
            const iterationPoint: PointType = {
                x: initialPoint.x > random.x ? random.x += 1 : random.x -= 1,
                y: random.y,
                z: initialPoint.z > random.z ? random.z += 1 : random.z -= 1
            }
            result.search_points.push(iterationPoint)
        }
        destination = f(initialPoint, random)
    }

    return {
        result: result
    }
}

console.log(findPointWithAlgorithm())