import React from 'react';

function ReportPhotoMenu(props) {
  return (
    <div style={props.style} className="reportContainer">
      <h4 className="report-header">Report a photo problem</h4>
      <button className="btn-report unrelated" onClick={() => props.clickFlag()} type="button">Unrelated to restaurant</button>
      <button className="btn-report inappropriate" onClick={() => props.clickFlag()} type="button">Inappropriate content</button>
      <button className="btn-report dislike" onClick={() => props.clickFlag()} type="button">I don't like this photo</button>
      <button className="btn-cancel" onClick={() => props.clickFlag()} type="button">Cancel</button>
    </div>
  );
}

export default ReportPhotoMenu;