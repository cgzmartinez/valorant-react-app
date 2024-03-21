import ReactDOM from 'react-dom'
import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react'

const AgentModal = ({ onClose, agent }) => {
  return ReactDOM.createPortal(
    <Dialog size="xs" open={Boolean(agent)} className="rounded-2xl">
      <div className="bg-[#FD4556] rounded-t-2xl rounded-b-[25px]">
        <DialogHeader>
          <div className="absolute top-0 right-0 pr-5 pt-5 z-10">
            <button className=" text-white text-xl pr-2" onClick={onClose}>
              ✖
            </button>
          </div>
        </DialogHeader>
        <div className="flex justify-center items-center">
          <img
            className="pb-5 w-auto h-[300px]"
            src={agent.fullPortrait}
            alt={agent.displayName + 'portrait'}
          />
        </div>
        <h1 className="flex items-center justify-center tracking-tighter font-bold text-[30px] text-white uppercase">
          {agent.displayName}
        </h1>
        <p className="pb-5 flex items-center justify-center font-light text-white">
          {agent.role.displayName}
        </p>
      </div>
      <div className="px-10 py-5">
        <DialogBody className="h-[10rem] overflow-scroll no-scrollbar">
          <p>
            <span className="font-bold">Description:</span> {agent.description}
          </p>
          <br></br>
          <h3 className="text-lg font-bold pb-5 underline">Abilities</h3>
          <ul>
            {agent.abilities.map((ability, index) => (
              <li key={index}>
                <h4 className="font-medium pb-1">{ability.displayName}:</h4>
                <p className="pb-5">{ability.description}</p>
              </li>
            ))}
          </ul>
        </DialogBody>
      </div>
    </Dialog>,
    document.getElementById('modal-root')
  )
}

export default AgentModal
