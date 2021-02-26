import { CssBaseline, makeStyles, Paper } from '@material-ui/core';
import '../App/App.css';
import Employee from '../pages/Employee';



//Converting CSS to JSS
const useStyles = makeStyles((theme) => ({

  paperWrap: {
    backgroundColor: "#fff",
    margin: theme.spacing(2, 'auto'),
    width: theme.spacing(100),
    borderRadius: theme.spacing(2)
  }

}))

function App() {

  const classes = useStyles();

  return (
    <>
    <Paper className={classes.paperWrap}>
      <Employee />
    </Paper>
    <CssBaseline />
    </>
  );
}

export default App;
