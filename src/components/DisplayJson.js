import ReactJson from "react-json-view"

export const DisplayJson = ({json}) => {
  return (
    <div>
        <ReactJson src={json} />
    </div>
  )
}
