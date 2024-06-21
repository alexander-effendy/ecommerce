import { createUploadthing } from "uploadthing/next";
import { z } from 'zod';

const f = createUploadthing();
  
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
  .input(z.object({ configId: z.string().optional() }))
  .middleware(async ({ input }) => {
    return { input }
  })
  .onUploadComplete(async ({ metadata, file }) => {
    const { configId } = metadata.input;
    return { configId }
  }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;