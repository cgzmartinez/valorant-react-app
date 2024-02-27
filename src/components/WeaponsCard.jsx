import { useState } from 'react'
import WeaponsModal from './WeaponsModal'

const WeaponsCard = ({ weapon }) => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <div className="relative flex bg-clip-border border-b-2 border-white/50 rounded-xl bg-gradient-to-r from-[#585a5b] to-[#65484b] w-full max-w-[48rem] flex-row hover:-translate-y-2 duration-200 cursor-pointer">
      <div
        className="flex items-center justify-center pb-3 pl-5"
        onClick={handleClick}
      >
        <div className="p-5 mb-5 mt-5 pr-10">
          <h2 className="pt-7 text-white block text-[30px] bg-none italic font-bold uppercase">
            {weapon.displayName}
          </h2>
        </div>
        <div className="w-2/3 m-0 overflow-hidden pr-2 bg-clip-border rounded-xl">
          <img
            className="w-[170px] h-full object-cover"
            src={weapon.displayIcon}
            alt={weapon.displayName}
          />
        </div>
      </div>
      {showModal && (
        <WeaponsModal onClose={() => setShowModal(false)} weapon={weapon} />
      )}
    </div>
  )
}

export default WeaponsCard
