import { useEffect, useState } from 'react'
import './App.css'
import { Fondo, Navbar } from './components'
import { currentStanding } from './components/core/hooks/Drivers'
import { IStandingDriver } from './components/core/types/Standings'
import { DriverStandingCard } from './components/Design/DriverStandingCard'

function App() {
  const [standings, setStandings] = useState<Array<IStandingDriver>>()

  useEffect(() => {
    const getStandings = async () => {
      const response: IStandingDriver[] = await currentStanding()
      if (response) {
        setStandings(response)
      }
    }
    getStandings()
  }, [])

  return (
    <body className=''>
      <Navbar />
      <h1
        className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-gray-400 text-5xl font-bold text-center p-12'
      >
        Formula 1 Standings
      </h1>
      <div className="flex flex-1 justify-center items-center p-8 flex-col">
        <div className='flex justify-around pb-8'>
          {standings?.slice(0, 3).map((driver, index) => (
            <DriverStandingCard key={index} {...driver} />
          ))}
        </div>
        <table className="table-auto border-collapse border border-slate-500 text-sm text-left text-gray-500 dark:text-gray-400 w-11/12">
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className="border border-slate-600 px-2 py-1 ...">Pos</th>
              <th className="border border-slate-600 px-2 py-1 ...">Driver</th>
              <th className='border border-slate-600 px-2 py-1 ...'>Number</th>
              <th className="border border-slate-600 px-2 py-1 ...">Country</th>
              <th className="border border-slate-600 px-2 py-1 ...">Team</th>
              <th className="border border-slate-600 px-2 py-1 ...">Points</th>
            </tr>
          </thead>
          <tbody>
            {standings?.slice(3)?.map((driver, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="border border-slate-700 px-2 py-1 ...">{driver.position}</td>
                <td className="border border-slate-700 px-2 py-1 ...">{driver.givenName} {driver.familyName}</td>
                <td className="border border-slate-700 px-2 py-1 ...">{driver.number}</td>
                <td className="border border-slate-700 px-2 py-1 ...">{driver.country}</td>
                <td className="border border-slate-700 px-2 py-1 ...">{driver.constructor}</td>
                <td className="border border-slate-700 px-2 py-1 ...">{driver.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Fondo />
    </body>
  )
}

export default App
