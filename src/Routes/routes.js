import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Icons from '../Components/ContainerIcons'

import Stopwatch from "../Pages/Stopwatch";
import Clock from "../Pages/Clock";
import ChooseTimer from "../Pages/ChooseTimer";
import Timer from '../Pages/Timer'

function MyRoutes() {

    return (
        <Router>
            <Routes>
                <Route index element={<Clock />} />
                <Route path="/stopwatch" element={<Stopwatch />} />
                <Route path="/choosetimer" element={<ChooseTimer />} />
                <Route path="/timer" element={<Timer />} />
            </ Routes>
            <Icons />
        </Router>
    )
}

export default MyRoutes