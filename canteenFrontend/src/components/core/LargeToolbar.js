import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
    root: {
        height: "72px",
    },
});

export default withStyles(styles)(Toolbar);
