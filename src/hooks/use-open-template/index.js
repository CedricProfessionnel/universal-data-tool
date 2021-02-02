import LocalStorageDatasetManager from "udt-dataset-managers-test/dist/dataset-wrapper"

import useActiveDatasetManager from "../use-active-dataset-manager"
import useEventCallback from "use-event-callback"

export default () => {
  const [, setActiveDatasetManager] = useActiveDatasetManager()
  return useEventCallback((template) => {
    const dm = new LocalStorageDatasetManager("local-storage")
    dm.setDataset(template.dataset)
    setActiveDatasetManager(dm)
  })
}
