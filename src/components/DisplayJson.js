import ReactJson from "react-json-view";

export const DisplayJson = ({ json }) => {
  return (
    <div className="json">
      <h1 className="title">Resultado</h1>
      <ReactJson src={json} />
    </div>
  );
};
