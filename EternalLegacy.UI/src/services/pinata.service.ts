import axios from "axios";
import { DateType } from "../models/dateType";
import { ILegacyContent } from "../models/legacyContent";
import { addLegacyContent } from "./legacy.service";
import { ContentType } from "../models/contentType";

const PinataJWTKey = "123ef777de5f0b716390";
const PinataJWTSecret =
  "e7a8cee36bf2bf202bbdc96562898e688d767165c2373eadd8db1c379f685fcc";
//const PinataJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxODc2YWFkMC0wOTgwLTQ4NGQtODY1Yy01MDQ3YjQwYjQxZWMiLCJlbWFpbCI6Imp1c3Rpbi5tb3Jyb3dAa2lld2l0LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIxMjNlZjc3N2RlNWYwYjcxNjM5MCIsInNjb3BlZEtleVNlY3JldCI6ImU3YThjZWUzNmJmMmJmMjAyYmJkYzk2NTYyODk4ZTY4OGQ3NjcxNjVjMjM3M2VhZGQ4ZGIxYzM3OWY2ODVmY2MiLCJpYXQiOjE2OTQ1NTU3Nzd9.KOKrT62tGD9epXCb5WH2gGxdQKI5Zws-B6PqR0G_IzE";

export const uploadLegacyContent = async (
  legacyContentFile: File | null | undefined,
  contentCaption: string = "",
  contentDate: Date,
  contentType: ContentType,
  legacyId: number,
  order: number
) => {
  if (legacyContentFile) {
    try {
      const formData = new FormData();
      formData.append("file", legacyContentFile);

      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: `${PinataJWTKey}`,
          pinata_secret_api_key: `${PinataJWTSecret}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const legacyContentHash = `${resFile.data.IpfsHash}`;
      console.log(legacyContentHash);
      //Take a look at your Pinata Pinned section, you will see a new file added to you list.
      const newContent: ILegacyContent = {
        legacyContentId: 0,
        legacyId: legacyId,
        order: order,
        contentId: legacyContentHash,
        caption: contentCaption,
        date: contentDate,
        contentType: contentType,
      };
      await addLegacyContent(newContent);
    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
    }
  }
};
