import ReactDOM from 'react-dom'
import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react'

const WeaponsModal = ({ onClose, weapon }) => {
  return ReactDOM.createPortal(
    <Dialog size="xs" open={weapon} className="rounded-2xl">
      <div className="bg-[#FD4556] rounded-t-2xl rounded-b-[25px]">
        <DialogHeader>
          <div className="absolute top-0 right-0 pr-5 pt-5 z-10">
            <button className=" text-white text-xl pr-2" onClick={onClose}>
              ✖
            </button>
          </div>
        </DialogHeader>
        <img
          className="px-5 py-3"
          src={weapon.displayIcon}
          alt={weapon.displayName + 'portrait'}
        />
        <h1 className="flex pb-2 items-center justify-center tracking-tighter font-bold text-[30px] text-white uppercase">
          {weapon.displayName}
        </h1>
      </div>
      <div className="px-10 py-5">
        <DialogBody className="h-[10rem] overflow-scroll no-scrollbar">
          <h3 className="text-lg font-bold pb-5">Weapon Stats</h3>
          {weapon.weaponStats && (
            <ul className="grid grid-cols-1 py-2 gap-5 text-[12px]">
              {Object.entries(weapon.weaponStats).map(
                ([statName, statValue]) =>
                  statValue !== null &&
                  // Check if value is either a number or a string that can be cast to a number
                  (!isNaN(statValue) || !isNaN(Number(statValue))) && (
                    <div className="items-center">
                      <li key={statName}>
                        <h4 className="text-[11px] font-bold uppercase">
                          {statName}:
                        </h4>
                        {typeof statValue === 'object' ? (
                          <ul>
                            {/* Recursively handle nested objects (if needed) */}
                          </ul>
                        ) : (
                          <p>{statValue}</p>
                        )}
                      </li>
                    </div>
                  )
              )}
            </ul>
          )}
        </DialogBody>
      </div>
    </Dialog>,
    document.getElementById('modal-root')
  )
}

export default WeaponsModal
