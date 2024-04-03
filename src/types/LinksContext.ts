import { Link } from "./Link";

export interface LinkContextType {
  links: Link[];
  updateLink: (longLink: string, linkId: string) => void;
  createLink: (newLink: Link) => void;
  deleteLink: (linkId: string) => void;
  isLoading: boolean;
  error: string;
}
