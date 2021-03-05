import { Grid, Typography, Tooltip } from '@material-ui/core';
import React from 'react';
import {useForm, Form} from '../components/useForm';
import ControlButton from '../components/form controls/ControlButton'
import Input from '../components/form controls/Input';
import Select from '../components/form controls/Select';
import * as employeeService from '../services/employeeService';
import DatePicker from '../components/form controls/DatePicker';
import ProfileImage from '../components/ProfileImage';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import WorkIcon from '@material-ui/icons/Work';
import InfoIcon from '@material-ui/icons/Info';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HomeIcon from '@material-ui/icons/Home';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import EditIcon from '@material-ui/icons/Edit';
import Popup from '../components/form controls/Popup';


//Set default values for fields
const initialFieldValues = {

    id: 0,
    firstName: 'John Mario',
    middleName: 'Makiling',
    lastName: 'Dela Cruz',
    headLine: 'A self-proclaimed full-stack developer :)',
    employmentStatus: employeeService.getEmploymentStatusCollection()[0].title,
    hireDate: new Date(),
    role: employeeService.getRoleCollection()[0].title,
    birthDate: "01/01/1990",
    bloodType: employeeService.getBloodTypesCollection()[7].title,
    contactNumber: "09334811200",
    emailAddress: "john.mario@gmail.com",
    emergencyContact: "Clara Maria Dela Cruz",
    relationship: "Spouse",
    emergencyContactNumber: "09335822300",
    addressLine: "Unit 404, Ceres Towers",
    barangay: "Canduman",
    city: "Cebu City",
    province: "Cebu",
    country: "Philippines",
}




export default function EmployeeForm() {
   
//Calling useState function
   const{
        values,
        handleInputChange,
        changeState,
        editMode,
        resetForms,
        open,
        handleClickOpen,
        handleClose
    } = useForm(initialFieldValues);

    


   const fullName = 
                    <Typography variant="h4">
                        {values.firstName} {values.middleName} {values.lastName}
                    </Typography>

   const status = <Typography>
                        {values.headLine}
                </Typography>
   
   const completeAddress = <Typography>
                        {values.addressLine} {values.barangay}, {values.city}, {values.province}, {values.country}
                </Typography>           
 


    return (
    <>
        <Form>
        <Grid 
        justify="space-between" 
        container 
        
        alignItems="center"
        >
            <Grid container item xs={4}>
            
            <Typography variant="h6">
            <PersonOutlineIcon />
            Profile Information
            </Typography>               
                          
            </Grid>
            <Grid item xs={4}></Grid>
           
              
        <div>      
            <Grid item xs={4}>        
                {!editMode ?
              <Tooltip title="Edit">    
                    <ControlButton
                    variant="contained"
                    color="primary"
                    size="small"
                    text="Edit"
                    onClick={changeState}
                    startIcon={<EditIcon />}
                    />
                    </Tooltip> 
               : <div></div> }   
            </Grid>     
         </div>
          


        </Grid>
        <Grid container>
            <Grid item xs={3}>
                <ProfileImage 
                type="file"/>

            </Grid>

            <Grid container item xs={9}>
                
                {fullName}
                {status}
                {completeAddress}
                
            </Grid>

            

        </Grid>
                                    
                <Grid>
                <Typography variant="h6">
                <RecentActorsIcon />
                Full Name
                </Typography>
                    <Grid item>
                    
                    <Input 
                    label={"First Name"}
                    name={"firstName"}
                    value={values.firstName}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                    />

                    <Input
                    label={"Middle Name"}
                    name={"middleName"}
                    value={values.middleName}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                    />

                    <Input                   
                    label={"Last Name"}
                    name="lastName"
                    value={values.lastName}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                    />
                        
                    </Grid>
                </Grid>
        
        {editMode?     
        <Grid>
            <Typography variant="h6">
                <FormatQuoteIcon />
            Headline
            </Typography>
            <Grid item>
                <Input 
                label={"Say Something About Yourself"}
                name={"headLine"}
                value={values.headLine}
                onChange = {handleInputChange}
                disabled = {!editMode}
                readOnly = {!editMode}
                />
            </Grid>

        </Grid>        
        :<div>
        </div>}

        <Typography variant="h6">
            <WorkIcon />
                Employment
                </Typography>
            <Grid container>
                
                <Grid item xs={6}>
                <Select
                name={"employmentStatus"}
                label={"Status"}
                value={values.employmentStatus}
                onChange = {handleInputChange}
                options={employeeService.getEmploymentStatusCollection()}
                disabled = {!editMode}
                readOnly = {!editMode}
                />

                </Grid>

                <Grid item xs={6}>                   
                        <DatePicker 
                        name={"hireDate"}
                        label={"Date Started"}
                        value={values.hireDate}
                        onChange = {handleInputChange}
                        disabled = {!editMode}
                        readOnly = {!editMode}
                        />
                </Grid>
            </Grid>

        <Grid>
            <Select
            name={"role"}
            label={"Role"}
            value={values.role}
            onChange = {handleInputChange}
            options={employeeService.getRoleCollection()}
            disabled = {!editMode}
            readOnly = {!editMode}
            
            />
        </Grid>
            
        <Typography variant="h6">
        <InfoIcon />
                    Other Info
                </Typography>
            <Grid container>
                

                <Grid item xs={6}>
                    <DatePicker
                    name={"birthDate"}
                    label={"Birth Date"}
                    value={values.birthDate}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                    />

                </Grid>

                <Grid item xs={6}>
                <Select
                    name={"bloodType"}
                    label={"Blood Type"}
                    value={values.bloodType}
                    onChange = {handleInputChange}
                    options={employeeService.getBloodTypesCollection()}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                 />   
                 </Grid>   
            </Grid>
               
            <Typography variant="h6">
            <ContactPhoneIcon />
                    Contact Info
                </Typography>
            <Grid container>
            
            
                <Grid item xs={6}>
                    
                    <Input
                    name={"contactNumber"}
                    label={"Contact Number"}
                    value={values.contactNumber}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                    />

                </Grid>

                <Grid item xs={6}>
                <Input
                    name={"emailAddress"}
                    label={"Email Address"}
                    value={values.emailAddress}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                 />   
                 </Grid>   
            </Grid>
        

        
        <Typography variant="h6">
            <ContactPhoneIcon />
                    Emergency Contact
                </Typography>

            <Grid>
            <Input
                    name={"emergencyContact"}
                    label={"Contact Person"}
                    value={values.emergencyContact}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                    />
            </Grid>   
            <Grid container>
                <Grid item xs={6}>
                    <Input
                    name={"relationship"}
                    label={"Relationship"}
                    value={values.relationship}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                    />
                </Grid>
                <Grid item xs={6}>
                <Input
                    name={"emergencyContactNumber"}
                    label={"Contact Number"}
                    value={values.emergencyContactNumber}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                 />   
                 </Grid>   
            </Grid>
            
            <Typography variant="h6">
            <HomeIcon />
                Home Address
            </Typography>
            <Grid container>
            <Input
                    name={"addressLine"}
                    label={"Address Line"}
                    value={values.addressLine}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                    />
            </Grid>
            <Grid container>
            <Input
                    name={"barangay"}
                    label={"Barangay"}
                    value={values.barangay}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                    />
            </Grid>
            <Grid>
            <Input
                    name={"city"}
                    label={"City"}
                    value={values.city}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                    />
            </Grid>
            <Grid>
            <Input
                    name={"province"}
                    label={"Province"}
                    value={values.province}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                    />
            </Grid>
            <Grid>
            <Input
                    name={"country"}
                    label={"Country"}
                    value={values.country}
                    onChange = {handleInputChange}
                    disabled = {!editMode}
                    readOnly = {!editMode}
                    />
            </Grid>
        
    {editMode ?
   
   <Grid container >
       <Grid item xs={4}></Grid>

       <Grid item xs={4}>           
       <ControlButton
       variant="contained"
       color="default"
       size="large"
       text="Cancel"
       onClick={resetForms}
       />
       <ControlButton
       variant="contained"
       color="primary"
       size="large"
       text="Save"
       onClick={handleClickOpen}       
       /> 
       </Grid>

       <Grid item xs={4}></Grid>
       
        </Grid>
    
        :<div>
        </div>
         }               
        
        <Popup
        open={open}
        onClose={handleClose}
        onClick={handleClose}
       />
    </Form>      
     </>  
    )
}
