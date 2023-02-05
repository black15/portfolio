
type Props = {
  name?: string,
  width: string
}

export const Skill = (props: Props) => {

  const radientBG: string = "linear-gradient(90deg, rgba(70,187,10,0.7665266790309874) 0%, rgba(20,198,45,1) 35%, rgba(27,255,71,1) 100%)"

  return (
    <div className="w-full px-4 lg:w-5/12">
      <div className="mb-12">
        <span className="text-lg font-fjalla">{props.name}</span>
        <div className="bg-[#0000002c] dark:bg-[#ffffff0e] relative h-[10px] w-full rounded-2xl">
          <div className={`absolute top-0 left-0 h-full rounded-2xl`} style={{background: radientBG, width: props.width}}>
            <span
              className="bg-[#00bb54] absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
              <span
                className="bg-[#000e06] absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                {props.width}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
} 