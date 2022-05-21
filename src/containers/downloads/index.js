import { useState, useRef } from "react";
import "./styles.css";
const Downloads = () => {
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
          <div class="selectArea">
            <span>
              <input type="checkbox" />
            </span>
            <span class="cbLabel">Select</span>
          </div>
          <div class="flexRow">
            <span class="label">Name:</span>
            <span>smss.exe</span>
          </div>
          <div class="flexRow">
            <span class="label">Device:</span>
            <span>Stark</span>
          </div>
          <div class="flexRow">
            <span class="label">Path:</span>
            <span>\Device\Harddisk\Volume2\Windows\System32\smss.exe</span>
          </div>

          <div class="flexRow">
            <span class="label">Status:</span>
            <span class="flexRow">
              <span class="available">🟢&nbsp;&nbsp;</span>
              <span>Available</span>
            </span>
          </div>
          <div class="selectArea">
            <span>
              <input type="checkbox" />
            </span>
            <span class="cbLabel">Select</span>
          </div>
          <div class="flexRow">
            <span class="label">Name:</span>
            <span>smss.exe</span>
          </div>
          <div class="flexRow">
            <span class="label">Device:</span>
            <span>Stark</span>
          </div>
          <div class="flexRow">
            <span class="label">Path:</span>
            <span>\Device\Harddisk\Volume2\Windows\System32\smss.exe</span>
          </div>

          <div class="flexRow">
            <span class="label">Status:</span>
            <span class="flexRow">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scheduled</span>
            </span>
          </div>
          <div class="selectArea">
            <span>
              <input type="checkbox" />
            </span>
            <span class="cbLabel">Select</span>
          </div>
          <div class="flexRow">
            <span class="label">Name:</span>
            <span>smss.exe</span>
          </div>
          <div class="flexRow">
            <span class="label">Device:</span>
            <span>Stark</span>
          </div>
          <div class="flexRow">
            <span class="label">Path:</span>
            <span>\Device\Harddisk\Volume2\Windows\System32\smss.exe</span>
          </div>

          <div class="flexRow">
            <span class="label">Status:</span>
            <span class="flexRow">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scheduled</span>
            </span>
          </div>
          <div class="selectArea">
            <span>
              <input type="checkbox" />
            </span>
            <span class="cbLabel">Select</span>
          </div>
          <div class="flexRow">
            <span class="label">Name:</span>
            <span>smss.exe</span>
          </div>
          <div class="flexRow">
            <span class="label">Device:</span>
            <span>Stark</span>
          </div>
          <div class="flexRow">
            <span class="label">Path:</span>
            <span>\Device\Harddisk\Volume2\Windows\System32\smss.exe</span>
          </div>

          <div class="flexRow">
            <span class="label">Status:</span>
            <span class="flexRow">
              <span class="available">🟢&nbsp;&nbsp;</span>
              <span>Available</span>
            </span>
          </div>
          <div class="selectArea">
            <span>
              <input type="checkbox" />
            </span>
            <span class="cbLabel">Select</span>
          </div>
          <div class="flexRow">
            <span class="label">Name:</span>
            <span>smss.exe</span>
          </div>
          <div class="flexRow">
            <span class="label">Device:</span>
            <span>Stark</span>
          </div>
          <div class="flexRow">
            <span class="label">Path:</span>
            <span>\Device\Harddisk\Volume2\Windows\System32\smss.exe</span>
          </div>

          <div class="flexRow">
            <span class="label">Status:</span>
            <span class="flexRow">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scheduled</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Downloads;
