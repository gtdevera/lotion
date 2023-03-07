import { Outlet } from "react-router-dom";
import useToggle from './toggleFile';
import { useNavigate } from 'react-router-dom';

function BasicLayout() {
    const [toggle, setToggle] = useToggle();
    const navig = useNavigate();

    const addNote = () => {
        navig('/notes/' + 1);
    }
    return (
    <>
    <header>
        <div className = "leftNav">
            <button id = "menuSelect" onClick = {setToggle}>&#9776;</button>
        </div>
        <div className = "rightNav">
            <h1>
                Lotion
            </h1>
            <h2>
                Save us from this mess
            </h2>
        </div>
    </header>
    <div id="content">
        {toggle && (
        <section id = "noteSidebar">
        <div id="noteTracker">
            <p id="noteTitle">
                <strong>Notes</strong>
            </p>
            <button id= "Add" onClick = {addNote}>+</button>
        </div>
        <div>
            Put box 
        </div>
        </section>
        )}
        {/* child components get injected here and replace <Outlet /> */}
        <Outlet />
    </div>
    </>
    )
}

export default BasicLayout;