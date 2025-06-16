import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Title from "@/_BacktestingPage/components/Title";
import Notice from "@/_BacktestingPage/components/Notice";
import BacktestForm from "@/_BacktestingPage/components/BacktestForm";
import AssetAllocation from "@/_BacktestingPage/components/AssetAllocation";
import {
  backtestFormSchema,
  type BacktestFormSchema,
} from "@/_BacktestingPage/utils/backtestFormSchema";
import { useState } from "react";
import { mapToBacktestRequest } from "@/_BacktestingPage/utils/mapToRequest";
import { v4 as uuidv4 } from "uuid";

const BacktestingPage = () => {
  const form = useForm<BacktestFormSchema>({
    resolver: zodResolver(backtestFormSchema),
    defaultValues: {
      startDate: new Date(),
      endDate: new Date(),
      initialAmount: 1000,
      rebalanceFrequency: "매년",
    },
  });
  const [assets, setAssets] = useState([
    { id: uuidv4(), name: "", ticker: "", weight: 0 },
  ]);
  const handleSubmit = () => {
    console.log("cliked");
    const formData = form.getValues();
    const requestData = mapToBacktestRequest(formData, assets);
    console.log(requestData);
  };
  return (
    <div className="gap-2 px-18">
      <Title></Title>
      <Notice></Notice>
      <BacktestForm form={form}></BacktestForm>
      <AssetAllocation assets={assets} setAssets={setAssets}></AssetAllocation>
      <button onClick={handleSubmit}>제출</button>
    </div>
  );
};

export default BacktestingPage;
