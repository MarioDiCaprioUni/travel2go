namespace geolocation {

    const EARTH_RADIUS_KM = 6371;

    export interface GeolocationPoint {
        lat: number;
        lon: number;
    }

    export function geolocationDistance(p1: GeolocationPoint, p2: GeolocationPoint): number {
        let delta1 = p1.lat * Math.PI / 180;
        let delta2 = p2.lat * Math.PI / 180;
        let delta = delta2 - delta1;
        let lambda = (p2.lon - p1.lon) * Math.PI / 180;

        let a =
            Math.sin(delta/2) * Math.sin(delta/2) +
            Math.cos(delta1) * Math.cos(delta2) *
            Math.sin(lambda/2) * Math.sin(lambda/2);

        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return c * EARTH_RADIUS_KM;
    }

}

export { geolocation };
