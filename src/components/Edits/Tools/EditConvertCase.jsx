/**
 * FIT VUT 2020
 * @author Jakub Sadilek
 */

import React, { useState, forwardRef, useImperativeHandle } from "react";
import { makeStyles, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    opts: {
        width: "200px",
        marginRight: "10px",
    },
}));

const EditConvertCase = forwardRef((props, ref) => {
    const classes = useStyles();

    const [textCase, setTextCase] = useState(props.tool.textCase);

    useImperativeHandle(ref, () => ({
        handleUpdate () {
            props.updateTool({...props.tool, textCase: textCase});
            props.close();
        }
    }));

    return (
        <React.Fragment>
            <FormControl>
                <InputLabel id="edit-convert-case-case-label">Case</InputLabel>
                <Select
                  labelId="edit-convert-case-case-label"
                  id="edit-convert-case-case"
                  className={classes.opts}
                  value={textCase}
                  onChange={(event) => setTextCase(event.target.value)}
                >
                    <MenuItem id="edit-convert-case-case-uppercase" value={"uppercase"}>Upper case</MenuItem>
                    <MenuItem id="edit-convert-case-case-lowercase" value={"lowercase"}>Lower case</MenuItem>
                </Select>
            </FormControl>
        </React.Fragment>
    );
});

export default EditConvertCase;