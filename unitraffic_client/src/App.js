import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Map from './Map';
import Analytics from './Analytics';

function App() {


    return (
        <Router>
            <div style={{
                backgroundColor: "yellow",
                display: "flex",
                marginBottom: "19.2px",
            }}>
                <h2 style={{
                    margin: "0px",
                    padding: "15px"
                }}>UniTraffic</h2>
                <h3 style={{marginRight: "20px", marginLeft: "20px"}}><Link to={"/map"} style={{textDecoration: "none", color: "black"}}>Map</Link></h3>
                <h3><Link to={"/analytics"} style={{textDecoration: "none", color: "black"}}>Analytics</Link></h3>
            </div>
            <Routes>
                <Route path={"/map"} element={<Map/>}/>
                <Route path={"/analytics"} element={<Analytics/>}/>
            </Routes>

        </Router>
    );
}

export default App;
