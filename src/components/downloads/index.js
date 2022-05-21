import { useState, useRef, useEffect } from "react";
import "./styles.css";
import { downloadsData } from "../../data/downloads";

export const Downloads = () => {
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    setDownloads([...downloadsData]);
  }, [downloadsData]);

  const Download = ({ download }) => {
    return (
      <>
        <div class="selectArea">
          <span>
            <input type="checkbox" />
          </span>
          <span class="cbLabel">Select</span>
        </div>
        <div class="flexRow">
          <span class="label">Name:</span>
          <span>{download.name}</span>
        </div>
        <div class="flexRow">
          <span class="label">Device:</span>
          <span>{download.device}</span>
        </div>
        <div class="flexRow">
          <span class="label">Path:</span>
          <span>{download.path}</span>
        </div>

        <div class="flexRow">
          <span class="label">Status:</span>
          <span class="flexRow">
            {download.status === "available" && (
              <>
                <span class="available">🟢&nbsp;&nbsp;</span>
                <span>{download.status}</span>
              </>
            )}
            {download.status === "scheduled" && (
              <>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scheduled</span>
              </>
            )}
          </span>
        </div>
      </>
    );
  };

  return (
    <>
      <div class="container">
        <div class="mobile">
          <span>
            <input type="checkbox" />
          </span>
          <span>Selected 0 | ⤓ Download Selected</span>
        </div>
        <div class="grid">
          <div class="gridLabel">
            <input type="checkbox" />
          </div>
          <div class="gridLabel">Selected 0</div>
          <div class="gridLabel">⤓ Download Selected</div>
          <div class="gridLabel">&nbsp;</div>
          <div class="gridLabel">&nbsp;</div>

          <div class="gridLabel">&nbsp;</div>
          <div class="gridLabel">Name</div>
          <div class="gridLabel">Device</div>
          <div class="gridLabel">Path</div>
          <div class="gridLabel">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status</div>
          {downloads.map((download) => (
            <Download download={download} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Downloads;
