import React from 'react';
import Typography from "@material-ui/core/Typography";

function SectionHeading({ children }) {
    return (
        <Typography
            variant='h6'
            align='center'
            color='#607D8B'
            padding='50px'
        >
            { children }
        </Typography>
    );
}

export default SectionHeading;
