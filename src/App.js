import React, { useState, useEffect, useRef } from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import Display from "./components/Display";
import Startstop from "./components/Startstop";
import Reset from "./components/Reset";

function App() {
  const [br, setBr] = useState(5);
  const [session, setSession] = useState(25);
  const [time, setTime] = useState(25 * 60);
  const [on, setOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [inter, setInter] = useState();
  const [text, setText] = useState("Session");
  const myRef = useRef();

  useEffect(() => {
    if (time <= 0) {
      setOnBreak(true);
      alarm();
    } else if (!on && time === br) {
      setOnBreak(false);
      alarm();
    }
  }, [time, onBreak, on]);

  const timeFormater = (time) => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    return (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
  };

  const changeTime = (num, type, real) => {
    if (!on) {
      if ((real <= 1 && num < 0) || (real >= 60 && num > 0)) {
        return;
      } else {
        type((pre) => pre + num);
      }
    }
    if (!on && real === session) {
      setTime((session + num) * 60);
    }
  };

  const resetTime = () => {
    resAlarm();
    clearInterval(inter);
    setBr(5);
    setSession(25);
    setTime(25 * 60);
  };

  const resAlarm = () => {
    myRef.current.pause();
    myRef.current.currenTime = 0;
  };

  const alarm = () => {
    myRef.current.play();
  };

  const startTime = () => {
    const sec = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + sec;
    let onBreakVariable = onBreak;
    if (!on) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setTime((pre) => {
            if (pre <= 0 && !onBreakVariable) {
              onBreakVariable = true;
              setText("Break");
              return br * 60;
            } else if (pre <= 0 && onBreakVariable) {
              onBreakVariable = false;
              setOnBreak(false);
              setText("Session");
              return session * 60;
            }
            return pre - 1;
          });
          nextDate += sec;
        }
      }, 10);
      setInter(interval);
    }
    if (on) {
      clearInterval(inter);
    }
    setOn(!on);
  };

  return (
    <div className="wrapper">
      <div className="line">
        <Break
          br={br}
          timeFormater={timeFormater}
          changeTime={changeTime}
          setBr={setBr}
        />
        <Session
          session={session}
          timeFormater={timeFormater}
          changeTime={changeTime}
          setSession={setSession}
        />
      </div>
      <div className="line">
        <Display time={timeFormater(time)} dis={text} />
      </div>
      <div className="line">
        <Startstop startTime={startTime} />
        <Reset resetTime={resetTime} />
      </div>
      <audio
        id="beep"
        preload="auto"
        ref={myRef}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
}

export default App;
