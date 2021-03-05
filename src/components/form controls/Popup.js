import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';

export default function Popup(props) {

    return (
        <>
        
            <Dialog
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Info"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Changes Successfully Saved
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Okay
                </Button>
                </DialogActions>
            </Dialog>
        
        </>

    )
}
