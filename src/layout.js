import { Outlet } from "react-router-dom";

function BasicLayout() {
    return (
    <>
    <header>
        <div className = "leftNav">
            <p id = "menuSelect">&#9776;</p>
        </div>
        <div className = "rightNav">
            <h1>
                Lotion
            </h1>
            <h2>
                Like Notion but worse
            </h2>
        </div>
    </header>
    <div id="content">
        {/* child components get injected here and replace <Outlet /> */}
        <Outlet />
    </div>
    <footer>DELETE ME LATER THIS IS TEMP</footer>
    </>
    )
}

export default BasicLayout;