import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import "../style/dashboard.scss";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOffIcon from "@mui/icons-material/EditOff";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddQuestion from "../component/AddQuestion";

const foodItem = [
  {
    user_question: "Little interest or pleasure in doing things?",
  },
  {
    user_question: "Little interest or pleasure in doing things?",
  },
  {
    user_question:
      "Moving or speaking so slowly that other people could have noticed.Or, the opposite -being so fidgety or restless that you have been moving around a lot more than usaual?",
  },
  {
    user_question:
      "Moving or speaking so slowly that other people could have noticed. or, the opposite .being so fidgety or restless that you have been moving arond a lot more then usual?",
  },
  {
    user_question:
      "Thoughts that you would be better off dead or of hurting yourself?",
  },
];
const UsersAssesment = () => {
  const [_open, setOpen] = useState(false);
  const _handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #bafffc",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };
  return (
    <div
      style={{
        background: "#fff",
        marginBottom: "40px",
        borderRadius: "4px",
      }}
    >
      <div className="order_head">
        <Typography variant="h6" component="div" gutterBottom>
          User's Assesment
        </Typography>

        <Button
          variant="contained"
          onClick={handleOpen}
          style={{
            float: "right",
            margin: "10px",
            color: "black",
            backgroundColor: "#bafffc",
          }}
        >
          Add Question
        </Button>
        <Modal
          open={_open}
          onClose={_handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddQuestion />
          </Box>
        </Modal>
      </div>
      <Divider />

      <div style={{ padding: "25px" }}>
        <Typography variant="h6" component="div" gutterBottom>
          Questions
        </Typography>

        {foodItem.map((item,index) => {
          return (
            <div key={item.index}>
              <Divider className="food_detail" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  component="div"
                  gutterBottom
                  style={{ marginLeft: "5px" }}
                >
                  {item.user_question}
                </Typography>
                <div style={{ display: "flex" }}>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    sx={{ padding: "0px 25px" }}
                  >
                    <EditOffIcon
                      fontSize="inherit"
                      style={{ color: "#1860a3" }}
                    />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    sx={{ padding: "0px" }}
                  >
                    <DeleteIcon
                      fontSize="inherit"
                      style={{ color: "#e0496c" }}
                    />
                  </IconButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UsersAssesment;
