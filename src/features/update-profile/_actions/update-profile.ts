"use server";
import { getAppSessionStrictServer } from "@/entities/user/get-app-session.server";
import { profileSchema } from "@/entities/user/profile";
import { updateProfileUseCase } from "@/entities/user/profile.server";
import { z } from "zod";

const propsSchema = z.object({
  userId: z.string(),
  data: profileSchema.partial(),
});

const resultSchema = z.object({
  profile: profileSchema,
});

export const updateProfileAction = async (props: z.infer<typeof propsSchema>) => {
  const { userId, data } = propsSchema.parse(props);

  const session = await getAppSessionStrictServer();

  const profile = await updateProfileUseCase.exec({ userId, data, session });

  return resultSchema.parseAsync({ profile: profile });
};
