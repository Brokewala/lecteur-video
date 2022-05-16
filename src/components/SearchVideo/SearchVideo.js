import { Search } from '@material-ui/icons';
import React from 'react';
import "./SearchVideo.scss";

const Searchvideo = () => {
    return (
        <div className="Searchvideo">
            <form>
                <input 
                    placeholder='Search ...'
                    type="text" />
                <button><Search/></button>
            </form>
        </div>
    );
}

export default Searchvideo;
