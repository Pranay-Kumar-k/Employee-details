import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { deleteEmployee, editEmployeeData, getEmployeesData } from '../Redux/actionCreator';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  delete:{
    marginLeft: 10
  },
  edit:{
    marginRight:10
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  closeButton: {
    position: 'relative',
    right: theme.spacing(1),
    left:theme.spacing(1),
    marginLeft:"90%"
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));

export const EmployeesTable = (employees) => {

  console.log(employees)
  const classes = useStyles();
  const [open,setOpen] = useState(false);
  const [status,setStatus] = useState("");
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")
  const [role,setRole] = useState("")
  const [location,setLocation] = useState("")
  const [payload,setPayload] = useState({})
  const dispatch = useDispatch()

  const handleClose = () => {
    setOpen(false);
  };
  const handleEdit = (item) => {
    setOpen(true);
    // console.log(item.status)
    // setFname(item.first_name)
    // setLname(item.last_name)
    // setRole(item.role)
    // setLocation(item.location)
    // setStatus(item.status)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      first_name:fname,
      last_name:lname,
      role:role,
      location:location,
      status:status
    }
    setPayload(data)
    console.log(payload)
    dispatch(editEmployeeData(payload))
  }

  const handleDelete = (item) => {
    console.log(item)
    dispatch(deleteEmployee(item.id))
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Role</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees && employees.employees.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.first_name+" "+item.last_name}
              </StyledTableCell>
              <StyledTableCell align="right">{item.role}</StyledTableCell>
              <StyledTableCell align="right">{item.location}</StyledTableCell>
              <StyledTableCell align="right">{item.status}</StyledTableCell>
              <StyledTableCell align="right">
              <Button variant="contained" color="primary" onClick={(e) => handleEdit(item)} className={classes.edit}>
                <EditIcon />
              </Button>
              <Modal
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <div className={classes.head}>
                      <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                          <CloseIcon />
                      </IconButton>
                    </div>
                    <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="fname"
                          name="firstName"
                          variant="outlined"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                          value={fname}
                          onChange={(e) => setFname(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          value={lname}
                          onChange={(e) => setLname(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="role"
                          label="Role"
                          name="role"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Location"
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                      <FormControl variant="outlined" fullWidth className={classes.formControl}>
                        <InputLabel htmlFor="filled-age-native-simple">Status</InputLabel>
                        <Select
                          native
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option aria-label="None" value="" />
                          <option value={true}>active</option>
                          <option value={false}>inactive</option>
                        </Select>
                      </FormControl>
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onSubmit={handleSubmit}
                    >
                      Submit
                    </Button>
                  </form>
                  </div>
                </Fade>
              </Modal>
               | 
              <Button variant="contained" color="secondary" className={classes.delete} onClick={(e) => handleDelete(item)}>
                <DeleteIcon />
              </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default EmployeesTable