export const PORT: number = !!process.env["PORT"]
  ? parseInt(process.env["PORT"] as string)
  : 8080;
