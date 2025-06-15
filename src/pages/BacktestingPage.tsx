import Title from "@/_BacktestingPage/components/Title";
import Notice from "@/_BacktestingPage/components/Notice";
import BacktestForm from "@/_BacktestingPage/components/BacktestForm";

const BacktestingPage = () => {
  return (
    <div className="gap-2 px-18">
      <Title></Title>
      <Notice></Notice>
      <BacktestForm></BacktestForm>
    </div>
  );
};

export default BacktestingPage;
