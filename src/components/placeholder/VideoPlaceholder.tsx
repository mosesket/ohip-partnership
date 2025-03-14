import videoSrc from "../../assets/images/video.png";
function VideoPlaceholder() {
  return (
    <div className="w-full bg-amber-50 rounded-2xl h-[30rem] flex justify-center items-center">
      <img src={videoSrc} alt="" />
    </div>
  );
}

export default VideoPlaceholder;
