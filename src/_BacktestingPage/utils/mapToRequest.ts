// 백엔드측 전송 양식을 맞추기 위해 formDataSchema -> formDataValues 변한

import type { BacktestFormSchema } from "./backtestFormSchema";
import type { BacktestFormValues } from "../types/backtestFormType";

export function mapToBacktestRequest(
  values: BacktestFormSchema,
): BacktestFormValues {
  return {
    start_date: values.startDate.toISOString().slice(0, 10),
    end_date: values.endDate.toISOString().slice(0, 10),
    initial_amount: values.initialAmount,
    rebalance_frequency: values.rebalanceFrequency,
  };
}
