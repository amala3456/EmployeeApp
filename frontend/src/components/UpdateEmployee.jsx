import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axiosInstance from '../axiosinterceptor';
import { useParams, useNavigate } from 'react-router-dom';


const UpdateEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    position:'',
    address: ''
  });

  const { id: employeeId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get(`http://localhost:3002/admin/employees/${employeeId}`)
      .then(response => {
        setEmployee(response.data);
      })
      .catch(error => {
        console.error(error.message);
      });
  }, [employeeId]);

  const inputHandler = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const updateData = () => {
    axiosInstance.put(`http://localhost:3002/admin/employees/${employeeId}`, employee)
      .then((res) => {
        alert(res.data.message);
        navigate('/employees');
      })
      .catch(error => {
        console.error('Error updating employee:', error);
      });
  };

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "calc(100vh - 64px)", 
      backgroundColor:'skyblue',
      padding: "20px",
    }}
  >
    <div
      style={{
        borderRadius: "20px",
        background: "rgba(255, 255, 255, 0.6)",
        padding: "20px",
        textAlign: "center",
        width: "80%",
        maxWidth: "600px",
      }}
    >
        <h1>UPDATE</h1>
        <div style={{ margin: "5%" }}>
          <TextField
            fullWidth
            variant='outlined'
            label="Name"
            name="name"
            value={employee.name || ''}
            onChange={inputHandler}
          />
          <br /><br />
          <TextField
            fullWidth
            variant='outlined'
            label="Email "
            name="email"
            value={employee.email || ''}
            onChange={inputHandler}
          />
          <br /><br />
          <TextField
            fullWidth
            variant='outlined'
            label="Position"
            name="position"
            value={employee.position || ''}
            onChange={inputHandler}
          />
          
          <br /><br />
          <TextField
            fullWidth
            variant='outlined'
            label="Address"
            name="address"
            value={employee.address || ''}
            onChange={inputHandler}
            multiline 
            rows={4}   
          />
          <br /><br />
          <Button
            variant='contained'
            color='primary'
            onClick={updateData}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
