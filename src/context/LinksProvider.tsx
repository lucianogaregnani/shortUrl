import { createContext } from "react";
import { LinkContextType } from "../types/LinksContext";
import useFetch from "../hooks/useFetch";
import { Link } from "../types/Link";

export const LinksContext = createContext<LinkContextType>({
  links: [],
  updateLink: () => {},
  deleteLink: () => {},
  createLink: () => {},
  isLoading: true,
  error: "",
});

function LinksProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading, error, changeData } = useFetch<Link[]>({
    method: "GET",
    url: "/link",
  });

  const updateLink = (longLink: string, linkId: string) => {
    const linkFinded = data?.find((link) => link._id === linkId);
    const filteredLinks = data?.filter((link) => link._id !== linkId);

    if (linkFinded) {
      linkFinded.longLink = longLink;
      changeData([...(filteredLinks || []), linkFinded]);
    }
  };

  const createLink = (link: Link) => {
    changeData([...(data || []), link]);
  };

  const deleteLink = (linkId: string) => {
    changeData(data?.filter((link) => link._id !== linkId));
  };

  return (
    <LinksContext.Provider
      value={{
        links: data || [],
        updateLink,
        deleteLink,
        createLink,
        isLoading,
        error,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
}

export default LinksProvider;
