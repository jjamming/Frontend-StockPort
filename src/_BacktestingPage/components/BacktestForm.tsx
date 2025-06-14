import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/datepicker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

import {
  backtestFormSchema,
  type BacktestFormSchema,
} from "../utils/backtestFormSchema";
import { mapToBacktestRequest } from "../utils/mapToRequest";

const BacktestForm = () => {
  const form = useForm<BacktestFormSchema>({
    resolver: zodResolver(backtestFormSchema),
    defaultValues: {
      startDate: new Date(),
      endDate: new Date(),
      initialAmount: 1000,
      rebalanceFrequency: "매년",
    },
  });

  const watchedStartDate = form.watch("startDate");
  console.log("현재 startDate 값:", watchedStartDate);
  const watchedEndDate = form.watch("endDate");
  console.log("현재 end", watchedEndDate);

  const onSubmit = (data: BacktestFormSchema) => {
    const mappedData = mapToBacktestRequest(data);
    console.log(mappedData);
  };
  return (
    <div className="flex flex-col py-10 border-white border-b">
      <Form {...form}>
        <form
          className="flex flex-col gap-13"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex mx-10">
            <div className="w-55 font-suit text-2xl">시작일</div>
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <DatePicker field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex mx-10">
            <div className="w-55 font-suit text-2xl">종료일</div>
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <DatePicker field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex mx-10">
            <div className="w-55 font-suit text-2xl">시작금</div>
            <input></input>
          </div>
          <div className="flex mx-10">
            <div className="w-55 font-suit text-2xl">리밸런싱 주기</div>
            <input></input>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BacktestForm;
