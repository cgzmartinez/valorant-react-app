import { useState, useEffect } from 'react'
import WeaponsCard from './WeaponsCard'

const WeaponsPage = () => {
  const [weapons, setWeapons] = useState([])

  useEffect(() => {
    fetch(' https://valorant-api.com/v1/weapons ')
      .then((response) => response.json())
      .then((data) => setWeapons(data.data))
  }, [])

  return (
    <div className="mt-[160px] px-5">
      <div className="flex justify-center items-center">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-[50px] justify-center items-center h-[527px] rounded-b-xl overscroll-auto overflow-auto no-scrollbar">
          {weapons.map((weapon) => (
            <WeaponsCard key={weapons.uuid} weapon={weapon} />
          ))}
        </ul>
        <div id="modal-root"></div>
      </div>
    </div>
  )
}

export default WeaponsPage
