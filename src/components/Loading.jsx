import { SiValorant } from 'react-icons/si'
function Loading() {
  return (
    <div className="">
      {/* Your loading animation content (e.g., spinner, text) */}
      <div className="flex h-screen justify-center items-center" role="status">
        <SiValorant className="fill-[#FD4556] h-[200px] w-auto" />
      </div>
    </div>
  )
}

export default Loading
