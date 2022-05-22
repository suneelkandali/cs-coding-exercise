import { useState, useRef, useEffect } from "react";
import "./styles.css";
import { downloadsData } from "../../data/downloads";
import { isClickableInput } from "@testing-library/user-event/dist/utils";
import { IndeterminateCheckbox } from "../../common/inderminatecheckbox";

export const Downloads = () => {
  const [downloads, setDownloads] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheckAllIndeterminate, setIsCheckAllIndeterminate] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  //const selectAllRef = useRef();

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

  const clickDownloadAll = () => {
    let message = "";
    if (isCheck.length > 0) {
      for (let i = 0; i < isCheck.length; i++) {
        let download = downloads.find((x) => x.id == isCheck[i]);
        if (download.status.toLowerCase() == "available")
          message =
            message +
            "\n" +
            "Path" +
            "\n" +
            download.path +
            "\n" +
            "Device" +
            "\n" +
            download.device;
      }
      if (message != "") alert(message);
      else alert("The selected items not available for download");
    } else {
      alert("None selected for download");
    }
  };

  console.log(isCheck);

  useEffect(() => {
    setDownloads([...downloadsData]);
    if (isCheckAll === false && isCheck.length > 0)
      setIsCheckAllIndeterminate(true);
    else
      setIsCheckAllIndeterminate(false);

  }, [downloadsData, isCheck, isCheckAll]);

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
            {/* <input
              type="checkbox"
              name="selectAll"
              id="selectAll"
              onClick={handleSelectAll}
              checked={isCheckAll}
              ref={selectAllRef}
  /> */}
            <IndeterminateCheckbox
              name="selectAll"
              id="selectAll"
              onClick={handleSelectAll}
              isChecked={isCheckAll}
              isIndeterminate={isCheckAllIndeterminate}
            />
          </span>
          <span onClick={clickDownloadAll}>
            {isCheck.length > 0
              ? "Selected " + isCheck.length
              : "None Selected"}{" "}
            | ⤓ Download Selected
          </span>
        </div>
        <div class="grid">
          <div class="gridLabel">
            {/*<Checkbox
              type="checkbox"
              name="selectAll"
              id="selectAll"
              handleClick={handleSelectAll}
              isChecked={isCheckAll}
            /> */}
            <IndeterminateCheckbox
              name="selectAll"
              id="selectAll"
              onClick={handleSelectAll}
              isChecked={isCheckAll}
              isIndeterminate={isCheckAllIndeterminate}
            />
          </div>
          <div class="gridLabel">
            {isCheck.length > 0
              ? "Selected " + isCheck.length
              : "None Selected"}
          </div>
          <div class="gridLabel" onClick={clickDownloadAll}>
            ⤓ Download Selected
          </div>
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
