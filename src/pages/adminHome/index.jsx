import "./adminHome.css";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBin6Fill } from "react-icons/ri";
// import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { MdCloudUpload } from "react-icons/md";
import { AdminNews } from "../../components/addNews";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminHome = () => {
  
  return (
    <div className="admin-home">
      <div className="container">
        <ToastContainer />
        <div className="admin-home-inner">
          <h2 className="admin-home-title">Slider qo'shish</h2>
          <div className="admin-home-box">
            <Button
              component="label"
              variant="contained"
              className="admin-home-add"
              startIcon={<MdCloudUpload />}
             
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <button className="admin-home-add-btn">
              qo'shish
            </button>
          </div>
        </div>
        <TableContainer  className="admin-home-table">
          <h2 className="admin-home-title-bottom">Slidelarni boshqarish</h2>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className="admin-home-header" align="right">
                  Rasm
                </TableCell>
                <TableCell className="admin-home-header" align="right">
                  O'chirish
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
           
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                 
                    className="admin-contact-row"
                  >
                    <TableCell className="admin-home-body" align="right">
                      <img
                        src={item.img}
                        alt=""
                        className="slide-img"
                        width={60}
                        height={60}
                      />
                    </TableCell>
                    <TableCell className="admin-home-body" align="right">
                      <RiDeleteBin6Fill
                        className="admin-home-delete"
                     
                      />
                    </TableCell>
                  </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <AdminNews />
        <TableContainer component={Paper} className="admin-home-table">
          <h2 className="admin-home-title-bottom">Yangiliklarni boshqarish</h2>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className="admin-home-header" align="right">
                  Rasm
                </TableCell>
                <TableCell className="admin-home-header" align="right">
                  Sarlavha
                </TableCell>
                <TableCell className="admin-home-header" align="right">
                  Matn
                </TableCell>
                <TableCell className="admin-home-header" align="right">
                  O'chirish
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {post.length &&
                post.map((item, idx) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={idx}
                    className="admin-contact-row"
                  >
                    <TableCell
                      className="admin-home-body"
                      component="th"
                      scope="row"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="admin-home-img"
                        width={50}
                        height={50}
                      />
                    </TableCell>
                    <TableCell className="admin-home-body" align="right">
                      {item.title}
                    </TableCell>
                    <TableCell className="admin-home-body" align="right">
                      {item.text}
                    </TableCell>

                    <TableCell className="admin-home-body" align="right">
                      <RiDeleteBin6Fill
                        className="admin-home-delete"
                        onClick={() => postDelete(item.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
