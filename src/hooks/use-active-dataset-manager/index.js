import { atom, useRecoilState } from "recoil"
import { useCallback } from "react"

export const activeDatasetManagerState = atom({
  default: null,
  key: "datasetManager",
  dangerouslyAllowMutability: true,
})

export default () => {
  const [dm, setRecoilDatasetManager] = useRecoilState(
    activeDatasetManagerState
  )

  const setDatasetManager = useCallback(
    (newDM) => {
      if (dm && dm.dm) {
        if (dm.dm.disconnect) {
          dm.dm.disconnect()
        } else {
          dm.dm.emit("disconnect")
        }
      }
      setRecoilDatasetManager(newDM)
    },
    [dm, setRecoilDatasetManager]
  )

  return [dm, setDatasetManager]
}
