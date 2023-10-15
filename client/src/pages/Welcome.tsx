import logoImage from '../svgs/logo.svg'
function Welcome() {
  return (
    <div className="welcome-wrapper flex flex-col justify-center items-center w-full h-full bg-gray-900">
      <img
        src={logoImage}
        className="w-60"
      ></img>
      <p className="text-[5rem] text-white font-semibold">
        Welcome to Signal Finder.
      </p>
    </div>
  )
}
export default Welcome
