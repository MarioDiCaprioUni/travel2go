import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const Content = styled('div')`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const CardPanel = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;