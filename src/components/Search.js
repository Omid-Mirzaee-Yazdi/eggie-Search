import React, { useState } from 'react';
import { useStateValue } from '../StateProvider';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
import { useHistory } from "react-router-dom";
import { actionTypes } from '../reducer';
function Search() {
    const [state, dispatch] = useStateValue();
    const [inp, setinp] = useState('');
    const history = useHistory();
    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: inp,
        })
        history.push('/Results');
    }

    return (

        <div className="search_component">
            <FormControl variant="outlined">
                <form className="search_form">
                    <InputLabel htmlFor="outlined-adornment">Search Query</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment"
                        type='text'
                        onChange={e => setinp(e.target.value)}
                        value={inp}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton

                                    aria-label="toggle"
                                    onClick={search}
                                    edge="end"
                                    type='submit'
                                >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={102}
                    />
                </form>
            </FormControl>

        </div>
    )
}

export default Search
