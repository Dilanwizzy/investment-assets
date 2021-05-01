import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Asset = new Schema(
  {
    id: {
      type: String
    },
    name: {
      type: String
    },
    assetType: {
      type: String
    },
    amount: {
      type: Number
    },
    totalInvested: Number
  },
  { collection: "Asset" }
);

Asset = mongoose.model("Asset", Asset);
export default Asset