import {styled, Table} from "@mui/material";
import {Box} from "@mui/system";


export const TitleWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ImageWrapper = styled(Box)`
  width: 100%;
  height: 600px;
  max-height: 40vh;
`;

export const Image = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled('h3')`

`;

export const StyledTable = styled(Table)`
  th {
    background: #000000;
    color: #ffffff;
  }
`;