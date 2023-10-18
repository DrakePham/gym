import React, { useState } from "react";
import axios from "axios";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Select,
  MenuItem,
} from "@mui/material";
import { Add as AddIcon, Close as CloseIcon } from "@mui/icons-material";
import { number } from "prop-types";

export default function WorkoutModal({ isOpen, onShow }) {
  const [formData, setFormData] = useState({
    userID: "21",
    bodyPart: "",
    workoutType: "",
    reps: 0,
    sets: 0,
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(e.target.value);
    // console.log(formData);
  };

  const sendData = async (data) => {
    try {
      // const endPointURL = 'http://localhost::3003/api';
      console.log(data);
      const endPointURL = "http://localhost:3003/workout/workoutCreate";
      const response = await axios.post(endPointURL, data);
      console.log(response.data);
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send formData to the backend or handle it as per your requirements.
    const data = {
      bodyPart: formData.bodyPart,
      workoutType: formData.workoutType,
      reps: formData.reps,
      sets: formData.sets,
    };
    // console.log(data);
    sendData(formData);
  };

  return (
    <Dialog open={isOpen} onClose={onShow} maxWidth="sm" fullWidth>
      <DialogTitle>
        Add Workout
        <CloseIcon
          style={{ float: "right", cursor: "pointer" }}
          onClick={onShow}
        />
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <div style={{ marginBottom: "20px", marginTop: "20px" }}>
            <TextField
              fullWidth
              select
              label="Body Part"
              // defaultValue="Chest"
              variant="outlined"
              name="bodyPart"
              value={formData.bodyPart}
              onChange={handleChange}
            >
              <MenuItem value="Chest">Chest</MenuItem>
              <MenuItem value="Back">Back</MenuItem>
              <MenuItem value="Leg">Leg</MenuItem>
              <MenuItem value="Core">Core</MenuItem>
              {/* Add other options as needed */}
            </TextField>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              fullWidth
              label="Exercise"
              placeholder="Optional - Name your Exercise"
              variant="outlined"
              name="workoutType"
              value={formData.workoutType}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              id="outlined-number"
              label="Sets"
              type="number"
              fullWidth
              name="sets"
              value={formData.sets}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              fullWidth
              id="outlined-number"
              label="Reps"
              type="number"
              name="reps"
              value={formData.reps}
              onChange={handleChange}
            />
          </div>
          <div>
          <input type="date" id="start" name="date" value= {formData.date} onChange={handleChange} fullWidth />
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button variant="contained" color="primary" type="submit">
              Create
            </Button>
            <Button onClick={onShow}>Close</Button>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
