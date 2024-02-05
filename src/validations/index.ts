import * as Yup from "yup";

const createContributionSchema = Yup.object().shape({
  contributionName: Yup.string().required(),
  monthlyAmount: Yup.number().required(),
  startDate: Yup.string().required(),
  participants: Yup.number().required(),
  totalServer: Yup.number().required(" Total Saver is required"),
});

export { createContributionSchema };
