import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    root: {
        color: theme.palette.primary,
        margin: theme.spacing.unit,
    },
});

export default withStyles(styles)(Button);
