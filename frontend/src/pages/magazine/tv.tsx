import TvLayout from "Layout/TvLayout";
import React, { useState } from "react";
import styled from "styled-components";
import { Player } from "video-react";
export const handleVid = (e) => {
  const url = e.target.files[0];
  const newUrl = URL.createObjectURL(url);
};
const Tv = (): JSX.Element => {
  const [vid, setVideo] = useState(
    "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  );
  console.log(vid);

  return (
    <TvLayout>
      <Tvwrapper>
        <div className="container py-3">
          <input
            type="file"
            className="form-control mb-3"
            onChange={handleVid}
          />
          <Player>
            <source src={vid} />
          </Player>
        </div>
      </Tvwrapper>
    </TvLayout>
  );
};

export default Tv;

const Tvwrapper = styled.div`
  min-height: 100vh;
`;
// https://media.w3.org/2010/05/sintel/trailer_hd.mp4
