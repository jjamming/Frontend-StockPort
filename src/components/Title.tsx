type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return <div className="mb-4 font-suit font-bold text-[2rem] text-white">{title}</div>;
};

export default Title;
