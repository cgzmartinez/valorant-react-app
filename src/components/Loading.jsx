import Logo from '../assets/valorant-logo.svg?react'

function Loading() {
  return (
    <div className="">
      {/* Your loading animation content (e.g., spinner, text) */}
      <div className="flex h-screen justify-center items-center" role="status">
        <Logo className="fill-[#FD4556] h-[200px] w-auto" />
      </div>
    </div>
  )
}

export default Loading
