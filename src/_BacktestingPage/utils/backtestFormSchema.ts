import { z } from "zod";
const MIN_DATE = new Date("1900-01-01");
const TODAY = new Date();

export const backtestFormSchema = z
  .object({
    startDate: z.date().refine((date) => date >= MIN_DATE, {
      message: "시작일은 1900-01-01 이후여야 합니다.",
    }),
    endDate: z.date().refine((date) => date <= TODAY, {
      message: "종료일은 오늘 이전이어야 합니다.",
    }),
    initialAmount: z.number().min(1, { message: "1만원 이상 입력하세요." }),
    rebalanceFrequency: z.enum(["매년", "분기별", "매월"]),
  })
  .refine((data) => data.startDate <= data.endDate, {
    message: "시작일은 종료일보다 이전이어야 합니다.",
    path: ["startDate"],
  });
export type BacktestFormSchema = z.infer<typeof backtestFormSchema>;
