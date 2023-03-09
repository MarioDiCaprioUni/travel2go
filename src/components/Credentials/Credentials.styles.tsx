import {styled} from "@mui/material";


export const Context = styled('div')`
  width: 100%;
  margin-top: 75px;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${api => api.theme.palette.background.paper};
`;

export const Developer = styled('span')`
  color: ${api => api.theme.palette.text.secondary};
`;

export const Link = styled('a')`
  color: ${api => api.theme.palette.primary.main};
  text-decoration: none;
  cursor: pointer;
`;