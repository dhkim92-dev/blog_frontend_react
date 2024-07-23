import { useState } from "react"

type UseToggleReturnType = [boolean, (value : boolean) => void]

const useToggle = () : UseToggleReturnType => {
  const [toggle, setToggle] = useState<boolean>(false)


    return [toggle, setToggle]
}

export default useToggle