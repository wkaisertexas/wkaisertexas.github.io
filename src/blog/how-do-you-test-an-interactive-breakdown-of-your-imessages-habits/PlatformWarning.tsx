import React from "react";

const PlatformWarning = () => {
  const hasPlatform = () : boolean => {
    if(!navigator) return true;
    if(navigator.platform) return navigator.platform.includes("Mac");
    if(navigator.userAgentData){
      if (navigator.userAgentData.platform){
        return navigator.userAgentData.platform.includes("Mac");
      } else {
        return navigator.userAgentData.brands.some(brand => brand.brand.includes("Mac"));
      }
    }
    
    return true; // by default, assume it's a Mac
  }

  return (<>{
    hasPlatform() && false ? (
      <></>
    ) : (
      <div className="platform-warning border-black border-2 rounded-lg border-dashed p-10">
        <h1>Only on Macos</h1>
        <p>
          This breakdown of iMessages habits is <b>only available on Mac</b>. This is a limitation of the iMessage app which is only available on MacOS.
        </p>
        <p>If you would like to see how to send iMessages cross-platform, check out <a arial-label="changing-macos" href="https://www.wired.com/story/iphone-android-apple-imessage-beeper/">Wired's Piece on Beeper Mini</a></p>
      </div>
    )
  }</>);
};

export default PlatformWarning;
