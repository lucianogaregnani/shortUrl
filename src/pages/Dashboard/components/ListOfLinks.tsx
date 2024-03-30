import { useEffect, useState } from "react";
import { linkApi } from "../../../services/linksApi";
import useAuth from "../../../hooks/useAuth";
import { Link } from "../../../types/Link";

function ListOfLinks() {
  const [links, setLinks] = useState<Link[]>([]);
  const { accesToken, error } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (accesToken) {
      linkApi.getAll(accesToken).then((res) => {
        setIsLoading(false);
        setLinks(res);
      });
    }
  }, [accesToken]);

  return isLoading ? (
    <div>Cargando...</div>
  ) : (
    <div>
      {error && <p>Hubo un error</p>}
      <div>
        {links?.length === 0 ? (
          <p>No hay links para mostrar</p>
        ) : (
          links.map((link) => <div key={link._id}>{link.longLink}</div>)
        )}
      </div>
    </div>
  );
}

export default ListOfLinks;
