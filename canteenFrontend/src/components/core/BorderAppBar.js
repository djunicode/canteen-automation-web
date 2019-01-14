import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const styles = theme => ({
    root: {
        borderBottom: "3px solid #0477BD",
    }
});

export default withStyles(styles)(AppBar);
