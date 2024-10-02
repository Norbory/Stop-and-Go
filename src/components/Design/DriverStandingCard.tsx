import { IStandingDriver } from "../core/types/Standings";

export function DriverStandingCard(driver: IStandingDriver) {

    const getStyle = (position:string) => {
        switch (Number(position)) {
            case 1:
                return { order: 2 };
            case 2:
                return { order: 1 };
            case 3:
                return { order: 3 };
            default:
                return {};
        }
    };
    return (
        <div 
            className={`driver-standing-card ${driver.position === '1' ? '-translate-y-5' : ''}`}
            style={getStyle(driver.position)}
        >
            <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                    <div className="text-2xl font-bold">{driver.position}</div>
                    <div className="flex flex-col ml-4">
                        <div className="text-lg font-bold">{driver.givenName} {driver.familyName}</div>
                        <div className="text-sm">{driver.constructor}</div>
                    </div>
                </div>
                <div className="text-2xl font-bold">{driver.points}</div>
            </div>
            {
                driver.familyName === 'Verstappen' ? (
                    <img 
                        className="mt-4 drop-shadow-lg"
                        src="maxVerstappen.avif"
                        alt="Max Verstappen" 
                    />
                ) : driver.familyName === 'Leclerc' ? (
                    <img 
                        className="mt-4 drop-shadow-lg"
                        src="charlesLeclerc.avif" 
                        alt="Charles Leclerc" 
                    />
                ) : driver.familyName === 'Norris' ? (
                    <img 
                        className="mt-4 drop-shadow-lg"
                        src="landoNorris.avif" 
                        alt="Lando Norris" 
                    />
                ) : null
            }
            {/* <div className="flex flex-row justify-between mt-4">
                <div className="flex flex-row">
                    <div className="text-lg font-bold">{driver.number}</div>
                    <div className="text-lg ml-4">{driver.country}</div>
                </div>
                
            </div> */}
        </div>
    )
} 