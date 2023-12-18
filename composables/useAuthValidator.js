import { z } from 'zod';

export default function useAuthValidator({ email, password }) {
  let body;
  try {
    const loginSchema = z.object({
      email: z.string().email(),
      password: z.string().min(6)
    });
    body = loginSchema.parse({ email, password });

    return {
      flag: true,
      ...body
    };
  } catch (err) {
    let errors = {
      flag: false
    };

    if (err instanceof z.ZodError) {
      const zodIssues = err.issues;

      for (let i = 0; i < zodIssues.length; i++) {
        errors[zodIssues[i].path[0]] = zodIssues[i].message;
      }
    }

    return errors;
  }
}
