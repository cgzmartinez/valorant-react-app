import { useState, useEffect } from 'react'
import AgentCard from './AgentCard'

const AgentPage = () => {
  const [agents, setAgents] = useState([])

  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents')
      .then((response) => response.json())
      .then((data) => {
        const sovaUuid = 'ded3520f-4264-bfed-162d-b080e2abccf9' // Store Sova's UUID
        const uniqueAgents = data.data.filter(
          (agent) => agent.uuid !== sovaUuid // Directly filter by UUID
        )
        setAgents(uniqueAgents)
      })
  }, [])

  return (
    <div className="mt-[160px] px-5">
      <div className="flex justify-center items-center">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-[50px] justify-center items-center h-[560px] rounded-b-xl overscroll-auto overflow-auto no-scrollbar">
          {agents.map((agent) => (
            <AgentCard key={agent.uuid} agent={agent} />
          ))}
        </ul>
        <div id="modal-root"></div>
      </div>
    </div>
  )
}

export default AgentPage
