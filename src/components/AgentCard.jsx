import { useState } from 'react'
import AgentModel from './AgentModal'

const AgentCard = ({ agent }) => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <div className="relative flex bg-clip-border border-b-2 border-white/50 rounded-xl bg-gradient-to-r from-[#454647] to-[#4e3739] w-full max-w-[48rem] flex-row hover:-translate-y-2 duration-200 cursor-pointer">
      <div
        className="flex items-center justify-center pb-3 pl-5"
        onClick={handleClick}
      >
        <div className="p-5 mb-5 mr-5 mt-5">
          <h2 className="pt-7 text-white block text-[40px] whitespace-nowrap bg-none italic font-bold uppercase">
            {agent.displayName}
          </h2>
          <h1 className="flex pt-2 font-thin uppercase text-gray-400 text-[15px]">
            {agent.role.displayName}
          </h1>
        </div>
        <div className="w-2/3 m-0 overflow-hidden bg-clip-border rounded-xl">
          <img
            className="relative w-full h-48 object-cover z-10"
            src={agent.fullPortrait}
            alt={agent.displayName}
          />
        </div>
        <img
          className="h-25 w-auto absolute opacity-30 z-0"
          src={agent.role.displayIcon}
          alt={agent.displayName}
        />
      </div>
      {showModal && (
        <AgentModel onClose={() => setShowModal(false)} agent={agent} />
      )}
    </div>
  )
}

export default AgentCard
