import LoadingLayout from "../../../components/LoadingLayout";
import useFetch from "../../../hooks/useFetch";
import { Link } from "../../../types/Link";

function ListOfLinks() {
  const { data, isLoading, error } = useFetch<Link[]>({
    method: "GET",
    url: "/link",
  });

  return (
    <LoadingLayout isLoading={isLoading}>
      <section>
        {error && <p>Hubo un error</p>}
        <section>
          {data?.length === 0 ? (
            <p>No hay links para mostrar</p>
          ) : (
            data?.map((link) => (
              <article key={link._id}>{link.longLink}</article>
            ))
          )}
        </section>
      </section>
    </LoadingLayout>
  );
}

export default ListOfLinks;
