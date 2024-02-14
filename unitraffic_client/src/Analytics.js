export default function Analytics() {
    return (
        <>
            <div style={{display: "table", margin: "0 auto"}}>
                <h1 style={{textAlign: "center"}}>Corridors crowd density</h1>
                <img src={require("./corridor.png")} alt={"corridor"} style={{display: "table", margin: "0 auto"}}/>
                <img src={require("./map_corridor.png")} alt={"map_corridor"} style={{width: "75%", height: "75%", display: "table", margin: "0 auto"}}/>
            </div>

            <div style={{display: "table", margin: "0 auto"}}>
                <h1 style={{textAlign: "center"}}>Rooms crowd density</h1>
                <img src={require("./rooms.png")} alt={"corridor"} style={{display: "table", margin: "0 auto"}}/>
                <img src={require("./map_rooms.png")} alt={"map_corridor"} style={{width: "75%", height: "75%", display: "table", margin: "0 auto"}}/>
            </div>
        </>
    )
}