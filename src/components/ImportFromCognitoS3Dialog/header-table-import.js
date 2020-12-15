import React from "react"
import {
  Settings as SettingsIcon,
  Storage as StorageIcon,
} from "@material-ui/icons/"

import { Button, IconButton } from "@material-ui/core/"

const selectedStyle = { color: "DodgerBlue" }

const headerTable = ({ configImport, setConfigImport }) => {
  const loadAssetsOrAnnotations = () => {
    setConfigImport({
      ...configImport,
      loadAssetsIsSelected: !configImport.loadAssetsIsSelected,
    })
  }

  return (
    <div>
      {configImport.loadAssetsIsSelected ? (
        <Button
          style={selectedStyle}
          onClick={loadAssetsOrAnnotations}
          disabled
        >
          Load Assets
        </Button>
      ) : (
        <Button onClick={loadAssetsOrAnnotations}>Load Assets</Button>
      )}
      {configImport.loadAssetsIsSelected ? (
        <Button onClick={loadAssetsOrAnnotations}>Load Annotations</Button>
      ) : (
        <Button
          style={selectedStyle}
          onClick={loadAssetsOrAnnotations}
          disabled
        >
          Load Annotations
        </Button>
      )}
      <IconButton
        onClick={() => {
          setConfigImport({
            ...configImport,
            contentDialogBoxIsSetting: !configImport.contentDialogBoxIsSetting,
          })
        }}
      >
        {configImport.contentDialogBoxIsSetting ? (
          <StorageIcon id="StorageIcon" />
        ) : (
          <SettingsIcon id="SettingIcon" />
        )}
      </IconButton>
    </div>
  )
}
export default headerTable
