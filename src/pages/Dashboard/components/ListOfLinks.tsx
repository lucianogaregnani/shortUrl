import LoadingLayout from "../../../components/LoadingLayout";
import useFetch from "../../../hooks/useFetch";
import { Link } from "../../../types/Link";
import LinkCard from "./Link";

function ListOfLinks() {
  const { data, isLoading, error } = useFetch<Link[]>({
    method: "GET",
    url: "/link",
  });

  return (
    <LoadingLayout isLoading={isLoading}>
      <section>
        {error ? (
          <p>Hubo un error</p>
        ) : (
          <section className="flex flex-wrap justify-center gap-2">
            {data?.length === 0 ? (
              <p>No hay links para mostrar</p>
            ) : (
              data?.map((link) => (
                <LinkCard
                  key={link._id}
                  _id={link._id}
                  longLink={link.longLink}
                  shortLink={link.shortLink}
                />
              ))
            )}
          </section>
        )}
      </section>
    </LoadingLayout>
  );
}

export default ListOfLinks;
