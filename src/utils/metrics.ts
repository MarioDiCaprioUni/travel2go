export enum Currency {
    EURO = "EURO",
    USD = "USD"
}

export enum Measurement {
    METRIC = "METRIC",
    IMPERIAL = "IMPERIAL"
}

const CURRENCY_CONVERSION_MAP: Record<Currency, number> = {
    EURO: 1,
    USD: 1.05
}

const KILOMETER_TO_MILES = 0.621371;

export function convertCurrency(value: number, from: Currency, to: Currency): number {
    return value / CURRENCY_CONVERSION_MAP[from] * CURRENCY_CONVERSION_MAP[to];
}

export function getCurrencySymbol(currency: Currency): string {
    switch (currency) {
        case Currency.EURO:
            return 'EUR';
        case Currency.USD:
            return 'USD';
    }
}

export function convertMeasurement(value: number, from: Measurement, to: Measurement): number {
    if (from === to) {
        return value;
    } else if (from === Measurement.METRIC) {
        return value * KILOMETER_TO_MILES;
    } else {
        return value / KILOMETER_TO_MILES;
    }
}

export function getMeasurementUnit(measurement: Measurement): string {
    switch (measurement) {
        case Measurement.METRIC:
            return "km";
        case Measurement.IMPERIAL:
            return "mi";
    }
}


///////////////////////////////////////////////////////////////////////////////

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
