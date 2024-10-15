import React from "react";
import Layout from "../Components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ mr: 5, ml: 10,marginTop:10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit porro
          praesentium voluptatem possimus dolore, nostrum doloribus quaerat iste
          optio omnis perferendis provident atque ipsam accusantium eveniet quos
          cum quisquam quae!
        </p>
      </Box>
      <Box sx={{m:3, width:'600px', ml:10, '@media (max-width:600px)':{
        width:"300px",
        margin:5
      }}}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:"black", color:"white"}} align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 9764449711
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <MarkunreadIcon sx={{ color: "skyblue", pt: 1 }} /> help@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567998
                  (tollfree)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
