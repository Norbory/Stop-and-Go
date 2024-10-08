import axios, { AxiosResponse } from "axios";
import { ICurrentDriver, IStandingDriver } from "../types";

export async function GetDrivers(year: number) {
    try {
        const response: AxiosResponse<string> = await axios.get(`http://ergast.com/api/f1/${year}/drivers`, {
            headers: {
                'Accept': 'application/xml'
            },
            responseType: 'text'
        });
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "application/xml");

        const drivers = xmlDoc.getElementsByTagName('Driver');
        const driverList: ICurrentDriver[] = Array.from(drivers).map(driver => {
            return {
                permanentNumber: driver.getElementsByTagName('PermanentNumber')[0]?.textContent || '',
                givenName: driver.getElementsByTagName('GivenName')[0]?.textContent || '',
                familyName: driver.getElementsByTagName('FamilyName')[0]?.textContent || '',
            }
        });
        return driverList;
    } catch (error) {
        console.error(error);
    }
}

export async function currentStanding() {
    try {
        const response: AxiosResponse<string> = await axios.get('http://ergast.com/api/f1/current/driverStandings', {
            headers: {
                'Accept': 'application/xml'
            },
            responseType: 'text'
        });
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "application/xml");

        const drivers = xmlDoc.getElementsByTagName('DriverStanding');
        const driverStandings: IStandingDriver[] = Array.from(drivers).map(driver => {
            return {
                position: driver.getAttribute('position') || '',
                points: driver.getAttribute('points') || '',
                number: driver.getElementsByTagName('PermanentNumber')[0]?.textContent || '',
                givenName: driver.getElementsByTagName('GivenName')[0]?.textContent || '',
                familyName: driver.getElementsByTagName('FamilyName')[0]?.textContent || '',
                constructor: driver.getElementsByTagName('Name')[0]?.textContent|| '',
                country: driver.getElementsByTagName('Nationality')[0]?.textContent || '',
                wins: driver.getAttribute('wins') || ''
            }
        });
        // console.log(driverStandings);
        return driverStandings;
    } catch (error) {
        throw new Error('Hubo un error al obtener los datos' + error);
    }
}