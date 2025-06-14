// 주가 상승/하락 렌더링용 삼각형 svg

type TriangleProps = {
  direction?: "up" | "down";
  size?: number;
};

const Triangle = ({ direction, size }: TriangleProps) => {
  const path =
    direction === "up"
      ? "M6.5 0L12.9952 11.25H0.00480938L6.5 0Z"
      : "M6.5 12L0.00480938 0.75H12.9952L6.5 12Z";
  const color = direction === "up" ? "#fb2c36" : "#155dfc";
  return (
    <div className="relative flex justify-end items-end mr-1 mb-1.25 ml-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 13 12"
        fill="none"
      >
        <path d={path} fill={color} />
      </svg>
    </div>
  );
};

export default Triangle;
