import { Outlet } from "react-router-dom";
import useToggle from './toggleFile'

function BasicLayout() {
    const [toggle, setToggle] = useToggle();

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
        <div id="noteTracker">
            <p id="noteTitle">
                Body contento
            </p>
            <button id= "Add">+</button>
        </div>
        )}
        {/* child components get injected here and replace <Outlet /> */}
        <Outlet />
    </div>
    </>
    )
}

export default BasicLayout;