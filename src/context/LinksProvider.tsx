import { createContext, useState } from "react";
import { LinkContextType } from "../types/LinksContext";
import { Link } from "../types/Link";

export const LinksContext = createContext<LinkContextType>({
  links: [],
  updateLink: () => {},
  deleteLink: () => {},
  createLink: () => {},
  setLinks: () => {},
});

function LinksProvider({ children }: { children: React.ReactNode }) {
  const [links, setLinks] = useState<Link[]>([]);

  const updateLink = (longLink: string, linkId: string) => {
    const linksAux = links;

    linksAux.forEach((link) => {
      if (link._id === linkId) link.longLink = longLink;
    });

    setLinks(linksAux);
  };

  const createLink = (link: Link) => {
    setLinks([...links, link]);
  };

  const deleteLink = (linkId: string) => {
    setLinks(links.filter((link) => link._id !== linkId));
  };

  return (
    <LinksContext.Provider
      value={{
        links,
        updateLink,
        deleteLink,
        createLink,
        setLinks,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
}

export default LinksProvider;
