import { ring } from "ldrs";
function Loader() {
  return (
    <div className="flex items-center justify-center">
      {ring.register()}
      <l-ring
        size="40"
        stroke="5"
        bg-opacity="0"
        speed="2"
        color="#9277FF"
      ></l-ring>
    </div>
  );
}

export default Loader;
