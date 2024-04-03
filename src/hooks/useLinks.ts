/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { LinksContext } from "../context/LinksProvider";
import useAuth from "./useAuth";
import { linkApi } from "../services/linksApi";

function useLinks() {
  const { links, updateLink, createLink, deleteLink, setLinks } =
    useContext(LinksContext);
  const { accesToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (accesToken && links.length === 0) {
      setIsLoading(true);
      linkApi
        .getAll(accesToken)
        .then((res) => {
          setLinks(res);
          setIsLoading(false);
        })
        .catch((err) => setError(err));
    }
  }, [accesToken]);

  const addLink = (longLink: string) => {
    setIsLoading(true);
    linkApi
      .create(accesToken, longLink)
      .then((res) => createLink(res))
      .catch((err) => setError(err));
  };

  const renovateLink = (newLongLink: string, linkId: string) => {
    setIsLoading(true);
    linkApi
      .update(accesToken, linkId, newLongLink)
      .then(() => updateLink(newLongLink, linkId))
      .catch((err) => setError(err));
  };

  const removeLink = (linkId: string) => {
    linkApi
      .remove(accesToken, linkId)
      .then(() => deleteLink(linkId))
      .catch((err) => setError(err));
  };

  return { links, isLoading, error, removeLink, addLink, renovateLink };
}

export default useLinks;
