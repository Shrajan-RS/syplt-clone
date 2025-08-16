const ClipPathTitle = ({
  title,
  className,
  color,
  background,
  borderColor,
  initialClipPath,
}) => {
  return (
    <div className="general-title">
      <div
        style={{
          clipPath: initialClipPath,
          borderColor: borderColor,
        }}
        className={`${className} border-[0.5vw] text-nowrap animation-box`}
      >
        <div
          className="pb-5 md:px-14 px-3 md:pt-0 pt-3 "
          style={{ backgroundColor: background }}
        >
          <h2
            style={{
              color: color,
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
