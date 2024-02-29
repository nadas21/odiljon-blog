import "./adminImg.css";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { MdCloudUpload } from "react-icons/md";
import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { FaWindowClose } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminImg = () => {
 
  return (
    <div className="admin-img">
        <ToastContainer />
      <div className="container">
        <div className="admin-img-inner">
          <h2 className="admin-img-title">Rasm qo'shish</h2>
          <div className="admin-img-box">
            <Button
              component="label"
              variant="contained"
              className="admin-img-add"
              startIcon={<MdCloudUpload />}
   
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <button className="admin-img-add-btn" >
              qo'shish
            </button>
          </div>
        </div>
        <TableContainer  className="admin-img-table">
          <h2 className="admin-img-title-bottom">Rasmlarni boshqarish</h2>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className="admin-img-header" align="right">
                  Rasm
                </TableCell>
                <TableCell className="admin-home-header" align="right">
                  Yangilash
                </TableCell>
                <TableCell className="admin-img-header" align="right">
                  O'chirish
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  
                    className="admin-contact-row"
                  >
                    <TableCell className="admin-img-body" align="right">
                      <img
                        src={""}
                        alt="img"
                        className="admin-img-photo"
                        width={50}
                        height={50}
                      />
                    </TableCell>
                    <TableCell className="admin-home-body" align="right">
                      <BasePopup
                      
                     
                        className="admin-home-add-box-bottom"
                      >
                        <PopupBody>
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
                          <FaWindowClose
                            className="admin-home-add-btn-close"
                            aria-describedby={ides}
                          
                          />
                        </PopupBody>
                      </BasePopup>
                      <FaEdit
                        className="admin-home-delete"
                        aria-describedby={ides}
                      
                      />
                    </TableCell>
                    <TableCell className="admin-img-body" align="right">
                      <RiDeleteBin6Fill
                        className="admin-img-delete"
                      
                      />
                    </TableCell>
                  </TableRow>
  
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
