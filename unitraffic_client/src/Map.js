import {useEffect, useState} from "react";

export default function Map() {
    const [arrowPathArray, setArrowPathArray] = useState([]);
    const [arrowPath, setArrowPath] = useState([]);
    const [corridorsOverlay, setCorridorsOverlay] = useState([]);


    const corridors = {
        1: <div style={{
            position: "absolute",
            top: "280px",
            left: "435px",
            width: "838px",
            height: "60px",
            backgroundColor: "red",
            opacity: "28%",
        }}></div>,
        2: <div style={{
            position: "absolute",
            top: "340px",
            left: "435px",
            width: "60px",
            height: "774px",
            backgroundColor: "red",
            opacity: "28%",
        }}></div>,
        3: <div style={{
            position: "absolute",
            top: "340px",
            left: "710px",
            width: "47px",
            height: "341px",
            backgroundColor: "red",
            opacity: "28%",
        }}></div>,
        4: <div style={{
            position: "absolute",
            top: "340px",
            left: "1007px",
            width: "60px",
            height: "633px",
            backgroundColor: "red",
            opacity: "28%",
        }}></div>,
        5: <div style={{
            position: "absolute",
            top: "681px",
            left: "495px",
            width: "512px",
            height: "51px",
            backgroundColor: "red",
            opacity: "28%",
        }}></div>,
        6: <div style={{
            position: "absolute",
            top: "915px",
            left: "495px",
            width: "512px",
            height: "58px",
            backgroundColor: "red",
            opacity: "28%",
        }}></div>
    }
    const arrow0_1 = <div style={{
        width: "141px",
        height: "10px",
        backgroundColor: "red",
        position: "absolute",
        top: "304px",
        left: "1099px",
    }}></div>

    const arrow1_2 = <div style={{
        width: "266px",
        height: "10px",
        backgroundColor: "red",
        position: "absolute",
        top: "304px",
        left: "833px",
    }}></div>

    const arrow1_13 = <><div
        style={{
            width: "10px",
            height: "148px",
            backgroundColor: "red",
            position: "absolute",
            top: "304px",
            left: "1031px",
        }}></div><div
        style={{
            width: "68px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: "304px",
            left: "1031px",
        }}></div></>

    const arrow2_3 = <div style={{
        width: "181px",
        height: "10px",
        backgroundColor: "red",
        position: "absolute",
        top: "304px",
        left: "661px",
    }}></div>

    const arrow2_13 = <><div
        style={{
            width: "208px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: "304px",
            left: "833px",
        }}></div><div
        style={{
            width: "10px",
            height: "140px",
            backgroundColor: "red",
            position: "absolute",
            top: "305px",
            left: "1031px",
        }}></div></>

    const arrow2_18 = <><div
        style={{
            width: "10px",
            height: "96px",
            backgroundColor: "red",
            position: "absolute",
            top: "305px",
            left: "728px",
        }}></div><div
        style={{
            width: "115px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: "304px",
            left: "728px",
        }}></div></>

    const arrow3_4 = <><div
        style={{
            width: "205px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: "304px",
            left: "460px",
        }}></div><div
        style={{
            width: "10px",
            height: "62px",
            backgroundColor: "red",
            position: "absolute",
            top: "304px",
            left: "460px",
        }}></div>
    </>;

    const arrow3_18 = <><div
        style={{
            width: "77px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: "304px",
            left: "661px",
        }}></div><div
        style={{
            width: "10px",
            height: "91px",
            backgroundColor: "red",
            position: "absolute",
            top: "305px",
            left: "728px",
        }}></div></>

    const arrow4_5 = <div style={{
        width: "10px",
        height: "112px",
        backgroundColor: "red",
        position: "absolute",
        top: "363px",
        left: "460px",
    }}></div>

    const arrow5_6 = <div style={{
        width: "10px",
        height: "146px",
        backgroundColor: "red",
        position: "absolute",
        top: "473px",
        left: "460px",
    }}></div>

    const arrow6_7 = <div style={{
        width: "10px",
        height: "177px",
        backgroundColor: "red",
        position: "absolute",
        top: "608px",
        left: "460px",
    }}></div>

    const arrow6_15 = <><div
        style={{
            width: "93px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: "701px",
            left: "460px",
        }}></div><div
        style={{
            width: "10px",
            height: "103px",
            backgroundColor: "red",
            position: "absolute",
            top: "608px",
            left: "460px",
        }}></div></>

    const arrow7_8 = <div style={{
        width: "10px",
        height: "289px",
        backgroundColor: "red",
        position: "absolute",
        top: "775px",
        left: "460px",
    }}></div>

    const arrow7_9 = <><div
        style={{
            width: "10px",
            height: "174px",
            backgroundColor: "red",
            position: "absolute",
            top: "775px",
            left: "460px",
        }}></div><div
        style={{
            width: "207px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: "939px",
            left: "460px",
        }}></div></>

    const arrow7_15 = <><div
        style={{
            width: "93px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: "701px",
            left: "460px",
        }}></div><div
        style={{
            width: "10px",
            height: "77px",
            backgroundColor: "red",
            position: "absolute",
            top: "701px",
            left: "460px",
        }}></div></>

    const arrow8_9 = <><div
        style={{
            width: "10px",
            height: "122px",
            backgroundColor: "red",
            position: "absolute",
            top: "939px",
            left: "460px",
        }}></div><div
        style={{
            width: "207px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: "939px",
            left: "460px",
        }}></div></>

    const arrow9_10 = <div style={{
        width: "219px",
        height: "10px",
        backgroundColor: "red",
        position: "absolute",
        top: "939px",
        left: "661px",
    }}></div>

    const arrow10_11 = <><div
        style={{
            width: "161px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: "939px",
            left: "880px",
        }}></div><div
        style={{
            width: "10px",
            height: "78px",
            backgroundColor: "red",
            position: "absolute",
            top: "871px",
            left: "1031px",
        }}></div></>

    const arrow11_12 = <div style={{
        width: "10px",
        height: "181px",
        backgroundColor: "red",
        position: "absolute",
        top: "700px",
        left: "1031px",
    }}></div>

    const arrow11_14 = <><div
        style={{
            width: "10px",
            height: "181px",
            backgroundColor: "red",
            position: "absolute",
            top: "700px",
            left: "1031px",
        }}></div><div
        style={{
            width: "88px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: "700px",
            left: "953px",
        }}></div></>

    const arrow12_13 = <div style={{
        width: "10px",
        height: "263px",
        backgroundColor: "red",
        position: "absolute",
        top: "442px",
        left: "1031px",
    }}></div>

    const arrow12_14 = <div style={{
        width: "89px",
        height: "10px",
        backgroundColor: "red",
        position: "absolute",
        top: "701px",
        left: "952px",
    }}></div>

    const arrow14_15 = <div style={{
        width: "417px",
        height: "10px",
        backgroundColor: "red",
        position: "absolute",
        top: "701px",
        left: "546px",
    }}></div>

    const arrow16_17 = <div style={{
        width: "10px",
        height: "119px",
        backgroundColor: "red",
        position: "absolute",
        top: "481px",
        left: "728px",
    }}></div>

    const arrow14_17 = <><div
        style={{
            width: "10px",
            height: "227px",
            backgroundColor: "red",
            position: "absolute",
            top: "481px",
            left: "728px",
        }}></div><div
        style={{
            width: "234px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: "701px",
            left: "728px",
        }}></div></>

    const arrow15_17 = <><div
        style={{
            width: "10px",
            height: "227px",
            backgroundColor: "red",
            position: "absolute",
            top: "481px",
            left: "728px",
        }}></div><div
        style={{
            width: "192px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: "701px",
            left: "546px",
        }}></div></>

    const arrow16_18 = <div style={{
        width: "10px",
        height: "100px",
        backgroundColor: "red",
        position: "absolute",
        top: "390px",
        left: "728px",
    }}></div>

    const data = {
        'chodba1': ['A100', 'A101', 'A102'],
        'chodba2': ['A103', 'A104', 'A105', 'A106', 'A107'],
        'chodba3': ['A108', 'A109'],
        'chodba4': ['A110', 'A111', 'A112'],
        'chodba5': ['A113', 'A114'],
        'chodba6': ['A115', 'A116', 'A117']
    }

    const rooms = {
        0: {
            1: arrow0_1,
        },
        1: {
            2: arrow1_2,
            13: arrow1_13,
        },
        2: {
            1: arrow1_2,
            3: arrow2_3,
            13: arrow2_13,
            18: arrow2_18,
        },
        3: {
            2: arrow2_3,
            4: arrow3_4,
            18: arrow3_18,
        },
        4: {
            3: arrow3_4,
            5: arrow4_5,
        },
        5: {
            4: arrow4_5,
            6: arrow5_6,
        },
        6: {
            5: arrow5_6,
            7: arrow6_7,
            15: arrow6_15,
        },
        7: {
            6: arrow6_7,
            8: arrow7_8,
            9: arrow7_9,
            15: arrow7_15,
        },
        8: {
            7: arrow7_8,
            9: arrow8_9
        },
        9: {
            7: arrow7_9,
            8: arrow8_9,
            10: arrow9_10
        },
        10: {
            9: arrow9_10,
            11: arrow10_11,
        },
        11: {
            10: arrow10_11,
            12: arrow11_12,
            14: arrow11_14,
        },
        12: {
            11: arrow11_12,
            13: arrow12_13,
            14: arrow12_14,
        },
        13: {
            1: arrow1_13,
            2: arrow2_13,
            12: arrow12_13,
        },
        14: {
            12: arrow12_14,
            15: arrow14_15,
            17: arrow14_17,
        },
        15: {
            6: arrow6_15,
            7: arrow7_15,
            14: arrow14_15,
            17: arrow15_17,
        },
        16: {
            17: arrow16_17,
            18: arrow16_18,
        },
        17: {
            14: arrow14_17,
            15: arrow15_17,
            16: arrow16_17,
        },
        18: {
            2: arrow2_18,
            3: arrow3_18,
            16: arrow16_18,
        }
    }

    useEffect(() => {
        fetch('http://localhost:8080/api/records', {
            method: 'GET',
        })
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                setCorridorsOverlay([]);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].number_of_people > 10) {
                        setCorridorsOverlay((prevState) => {
                            return [...prevState, corridors[parseInt(data[i].place.substring(1))]]
                        });
                    }
                }
            })
    }, [])

    useEffect(() => {
        let paths = [];
        for (let i = 0; i < arrowPathArray.length - 1; i++) {
            paths.push(rooms[arrowPathArray[i]][arrowPathArray[i+1]]);
        }
        setArrowPath(paths);
    }, [arrowPathArray])

    function submitHandler(event) {
        let roomStart = document.getElementById('findRoomInputStart');
        let roomEnd = document.getElementById('findRoomInputEnd');

        console.dir(roomStart);
        console.dir(roomEnd);

        fetch('http://localhost:8080/api/dijkstra?startpoint=' + roomStart.value + '&endpoint=' + roomEnd.value)
            .then((resp) => resp.json())
            .then((road) => {
                setArrowPathArray(road)
                let paths = [];
                for (let i = 0; i < road.length - 1; i++) {
                    paths.push(rooms[road[i]][road[i+1]]);
                }
                setArrowPath(paths);

            });
    }

    function submitShortHandler(event) {
        let roomStart = document.getElementById('findRoomShortInputStart');
        let roomEnd = document.getElementById('findRoomShortInputEnd');

        fetch('http://localhost:8080/api/shortest-route?startpoint=' + roomStart.value + '&endpoint=' + roomEnd.value)
            .then((resp) => resp.json())
            .then((road) => {
                setArrowPathArray(road)
                let paths = [];
                for (let i = 0; i < road.length - 1; i++) {
                    paths.push(rooms[road[i]][road[i+1]]);
                }
                setArrowPath(paths);

            });
    }

    return (
        <>
            <div style={{marginBottom: "20px"}}>
                <img
                    id={"map"}
                    style={{
                        height: "1052px",
                        width: "1052px",
                        display: "table",
                        margin: "0 auto"
                    }}
                    src={require("./map.png")} alt="map"/>
                <div style={{
                    height: "1058.4px",
                    width: "1000px",
                    display: "table",
                    margin: "0px auto",
                    padding: "20px",
                }}>
                    <h3>Find fastest path: </h3>
                    <label>Starting point: </label>
                    <select id={"findRoomInputStart"} style={{marginRight: "10px"}}>
                        <option value={"0"}>Terminal</option>
                        <option value={"1"}>A100</option>
                        <option value={"2"}>A101</option>
                        <option value={"3"}>A102</option>
                        <option value={"4"}>A103</option>
                        <option value={"5"}>A104</option>
                        <option value={"6"}>A105</option>
                        <option value={"7"}>A106</option>
                        <option value={"8"}>A107</option>
                        <option value={"9"}>A108</option>
                        <option value={"10"}>A109</option>
                        <option value={"11"}>A110</option>
                        <option value={"12"}>A111</option>
                        <option value={"13"}>A112</option>
                        <option value={"14"}>A113</option>
                        <option value={"15"}>A114</option>
                        <option value={"16"}>A115</option>
                        <option value={"17"}>A116</option>
                        <option value={"18"}>A117</option>
                    </select>
                    <label>Ending point: </label>
                    <select id={"findRoomInputEnd"} style={{marginRight: "10px"}}>
                        <option value={"1"}>A100</option>
                        <option value={"2"}>A101</option>
                        <option value={"3"}>A102</option>
                        <option value={"4"}>A103</option>
                        <option value={"5"}>A104</option>
                        <option value={"6"}>A105</option>
                        <option value={"7"}>A106</option>
                        <option value={"8"}>A107</option>
                        <option value={"9"}>A108</option>
                        <option value={"10"}>A109</option>
                        <option value={"11"}>A110</option>
                        <option value={"12"}>A111</option>
                        <option value={"13"}>A112</option>
                        <option value={"14"}>A113</option>
                        <option value={"15"}>A114</option>
                        <option value={"16"}>A115</option>
                        <option value={"17"}>A116</option>
                        <option value={"18"}>A117</option>
                    </select>
                    <button onClick={(event) => submitHandler(event)}>Click to submit</button>

                    <h3>Find shortest path: </h3>
                    <label>Starting point: </label>
                    <select id={"findRoomShortInputStart"} style={{marginRight: "10px"}}>
                        <option value={"0"}>Terminal</option>
                        <option value={"1"}>A100</option>
                        <option value={"2"}>A101</option>
                        <option value={"3"}>A102</option>
                        <option value={"4"}>A103</option>
                        <option value={"5"}>A104</option>
                        <option value={"6"}>A105</option>
                        <option value={"7"}>A106</option>
                        <option value={"8"}>A107</option>
                        <option value={"9"}>A108</option>
                        <option value={"10"}>A109</option>
                        <option value={"11"}>A110</option>
                        <option value={"12"}>A111</option>
                        <option value={"13"}>A112</option>
                        <option value={"14"}>A113</option>
                        <option value={"15"}>A114</option>
                        <option value={"16"}>A115</option>
                        <option value={"17"}>A116</option>
                        <option value={"18"}>A117</option>
                    </select>
                    <label>Ending point: </label>
                    <select id={"findRoomShortInputEnd"} style={{marginRight: "10px"}}>
                        <option value={"1"}>A100</option>
                        <option value={"2"}>A101</option>
                        <option value={"3"}>A102</option>
                        <option value={"4"}>A103</option>
                        <option value={"5"}>A104</option>
                        <option value={"6"}>A105</option>
                        <option value={"7"}>A106</option>
                        <option value={"8"}>A107</option>
                        <option value={"9"}>A108</option>
                        <option value={"10"}>A109</option>
                        <option value={"11"}>A110</option>
                        <option value={"12"}>A111</option>
                        <option value={"13"}>A112</option>
                        <option value={"14"}>A113</option>
                        <option value={"15"}>A114</option>
                        <option value={"16"}>A115</option>
                        <option value={"17"}>A116</option>
                        <option value={"18"}>A117</option>
                    </select>
                    <button onClick={(event) => submitShortHandler(event)}>Click to submit</button>
                </div>
                <div style={{
                    marginTop: "10px",
                }}>
                    {arrowPath.map((path, i) => <div key={i}>{path}</div>)}
                    {corridorsOverlay.map((corridor, i) => <div key={i}>{corridor}</div>)}
                </div>
            </div>
        </>
    )
}