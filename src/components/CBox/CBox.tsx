interface CBoxProps {
  bg: string;
  title: string | JSX.Element;
  content: string;
}

const CBox = ({ bg, title, content }: CBoxProps) => {
  return (
    <div
      className="text-RoyalPurple flex flex-col justify-center h-[306px] w-[363px] px-[22px] rounded-[14px]"
      style={{ backgroundColor: bg }}
    >
      <h2 className="text-[44px] mb-[18px] leading-[49px]">{title}</h2>
      <p className="text-[22px] leading-[24px]">{content}</p>
    </div>
  );
};

export default CBox;
