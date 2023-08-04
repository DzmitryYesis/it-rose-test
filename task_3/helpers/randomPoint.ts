import {PointType} from '../type';

export const randomPoint = (): PointType => {
    return {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101),
        z: Math.floor(Math.random() * 101),
    }
}