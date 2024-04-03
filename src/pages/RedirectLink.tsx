/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { linkApi } from "../services/linksApi";
import { Link } from "../types/Link";

function RedirectLink() {
  const { shortLink } = useParams();
  const [error, setError] = useState("");

  useEffect(() => {
    linkApi
      .getByShortLink(shortLink || "")
      .then((res: Link) => window.location.replace(res.longLink))
      .catch((err) => setError(err));
  }, []);

  return error && <Navigate to={"/"} />;
}

export default RedirectLink;
