import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    dropdown: {
        position: 'absolute',
        top: 28,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function LeadingClickAway() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={handleClickAway}
        >
            <div className={classes.root}>
                <Button size="small" onClick={handleClick} >
                    <strong style={{ color: "white" }}>
                        ADMIN
                    </strong>
                </Button>
                {open ? (
                    <div className={classes.dropdown}>
                        <strong>
                            <Link style={{color:"black"}} to="/cart" onClick={handleClick}>
                                CART
                            </Link>
                        </strong>
                    </div>
                ) : null}
            </div>
        </ClickAwayListener>
    );
}
