import React, { memo, useEffect, useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

function DecTime(currentTime) {
  let newTime = "";
  const times = currentTime.split(":");

  if (times[1] === "00" || times[1] === "0") {
    newTime = `${times[0] - 1}:59`;
  } else {
    newTime = `${times[0]}:${times[1] - 1}`;
  }

  return newTime;
}

function Timer({ timeLength, onFinishedTime }) {
  const [time, setTime] = useState(`${timeLength}:00`);

  useEffect(() => {
    if (time === "0:0") {
      setTimeout(() => {
        onFinishedTime();
      }, 2000);
      return;
    }
    const id = setInterval(() => {
      setTime(DecTime(time));
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [time, onFinishedTime]);

  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-alarm-fill"
        viewBox="0 0 16 16"
      >
        <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
      </svg>
      {time === "0:0" ? " Your Time Finished " : time}
    </Wrapper>
  );
}

export default memo(Timer);
