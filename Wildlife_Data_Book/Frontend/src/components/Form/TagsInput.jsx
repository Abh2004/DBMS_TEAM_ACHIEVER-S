import React from "react"
import { Autocomplete, Chip, TextField } from "@mui/material"

export default function TagInput(props) {
  const { tags, handleChange } = props

  function handleTagChange(e, value) {
    e.target.name = "tags"
    e.target.value = value

    handleChange(e)
  }

  return (
    <Autocomplete
      multiple
      freeSolo
      options={[]}
      value={tags}
      onChange={handleTagChange}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip key={index} label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Tags"
          placeholder="Enter tags"
        />
      )}
      filterSelectedOptions
      disableClearable
      autoSelect
      selectOnFocus
      handleHomeEndKeys
      blurOnSelect
      fullWidth
    />
  )
}
