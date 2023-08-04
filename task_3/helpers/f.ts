import {PointType} from '../type';

export const f = (initial: PointType, random: PointType) => {
    return Math.sqrt(Math.pow((initial.x - random.x), 2) + Math.pow((initial.y - random.y), 2) + Math.pow((initial.z - random.z), 2))
}