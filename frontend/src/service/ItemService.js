import axios from "axios";
import { HOST_ENDPOINT as host } from "./config";

class ItemService {
  async loadAllItems() {
    try {
      const result = await axios.get(host + "getAllItems");
      console.log("Result: " + result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      console.log(error.message + ` while accessing /getAllItems`);
      window.alert(error.message + ` while accessing /getAllItems`);
    }
  }

  async deleteItem(id) {
    try {
      await axios.delete(host + `item/${id}`);
    } catch (error) {
      console.log(error);
      console.log(error.message + ` while accessing /item/${id}`);
      // window.alert(error.message + ` while accessing /item/${id}`);
    }
  }
}

export default new ItemService();
