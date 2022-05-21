import { useState, useRef, useEffect } from "react";
import "./styles.css";
import { downloadsData } from "../../data/downloads";

export const Downloads = () => {
  const [downloads, setDownloads] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(downloads.map((item) => item.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;

    if (!checked) {
      setIsCheckAll(false);
      setIsCheck(isCheck.filter((item) => item !== id));
    } else {
      setIsCheck([...isCheck, id]);
      if (downloads.length === isCheck.length + 1) {
        setIsCheckAll(true);
      }
    }
  };

  console.log(isCheck);


  useEffect(() => {
    setDownloads([...downloadsData]);
  }, [downloadsData]);

  const Checkbox = ({ id, type, name, handleClick, isChecked }) => {
    return (
      <input
        id={id}
        name={name}
        type={type}
        onChange={handleClick}
        checked={isChecked}
      />
    );
  };

  const Download = ({ download }) => {
    console.log(isCheck.includes(download.id));
    console.log(download.id);
    return (
      <>
        <div class="selectArea">
          <span>
            <Checkbox
              key={download.id}
              type="checkbox"
              name={download.name}
              id={download.id}
              handleClick={handleClick}
              isChecked={isCheck.includes(download.id)}
            />
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
            <Checkbox
              type="checkbox"
              name="selectAll"
              id="selectAll"
              handleClick={handleSelectAll}
              isChecked={isCheckAll}
            />
          </span>
          <span>Selected 0 | ⤓ Download Selected</span>
        </div>
        <div class="grid">
          <div class="gridLabel">
            <Checkbox
              type="checkbox"
              name="selectAll"
              id="selectAll"
              handleClick={handleSelectAll}
              isChecked={isCheckAll}
            />
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
