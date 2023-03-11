import {styled} from "@mui/material";
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