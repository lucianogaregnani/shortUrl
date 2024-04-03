import LoadingLayout from "../../../components/LoadingLayout";
import useLinks from "../../../hooks/useLinks";
import LinkCard from "./Link";

function ListOfLinks() {
  const { links, isLoading, error } = useLinks();

  return (
    <LoadingLayout isLoading={isLoading}>
      <section>
        {error ? (
          <p>Hubo un error</p>
        ) : (
          <section className="flex flex-wrap justify-center gap-2">
            {links?.length === 0 ? (
              <p>No hay links para mostrar</p>
            ) : (
              links?.map((link) => (
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
