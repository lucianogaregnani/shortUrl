/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  return (
    error && (
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold text-red-500">Not found :(</h1>
      </section>
    )
  );
}

export default RedirectLink;
