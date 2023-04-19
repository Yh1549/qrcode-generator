import { defineStore } from "pinia";
export const useStore = defineStore({
  id: "Store",
  state: () => ({
    qrcode_text: {
      url: "https://example.ubt.com.tw/",
      account: "",
      money: ""
    },
    qrcode_value: "default",
  })
})