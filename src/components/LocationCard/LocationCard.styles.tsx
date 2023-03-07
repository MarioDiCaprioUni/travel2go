import {Card, CardActions, styled, Table} from "@mui/material";


export const Context = styled(Card)`
  width: 300px;
  position: relative;
`;

export const Title = styled('h3')`

`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const OverviewTable = styled(Table)`
  width: 100%;
`;

export const Actions = styled(CardActions)`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;