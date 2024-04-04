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
    if (error) {
      const timeOut = setTimeout(() => {
        setError("");
      }, 3000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [error]);

  useEffect(() => {
    if (accesToken && links.length === 0) {
      setIsLoading(true);
      linkApi
        .getAll(accesToken)
        .then((res) => {
          setLinks(res);
          setIsLoading(false);
        })
        .catch((err) => setError(err.response.data.error));
    }
  }, [accesToken]);

  const addLink = (longLink: string) => {
    linkApi
      .create(accesToken, longLink)
      .then((res) => createLink(res))
      .catch((err) => setError(err.response.data.error));
  };

  const renovateLink = (newLongLink: string, linkId: string) => {
    const linkFinded = links.find((link) => link._id === linkId);

    if (linkFinded && linkFinded?.longLink !== newLongLink) {
      linkApi
        .update(accesToken, linkId, newLongLink)
        .then(() => {
          updateLink(newLongLink, linkId);
        })
        .catch((err) => {
          setError(err.response.data.error);
        });
    }
  };

  const removeLink = (linkId: string) => {
    linkApi
      .remove(accesToken, linkId)
      .then(() => deleteLink(linkId))
      .catch((err) => setError(err.response.data.error));
  };

  return { links, isLoading, error, removeLink, addLink, renovateLink };
}

export default useLinks;
