import { useContext } from "react";
import { LinksContext } from "../context/LinksProvider";

function useLinks() {
  const context = useContext(LinksContext);
  return context;
}

export default useLinks;
