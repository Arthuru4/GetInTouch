import Axios from "axios";
export interface ISubmitData {
  name: string;
  email: string;
  msg: string;
}
export const submitRequest = (data: ISubmitData) => {
  return Axios({
    method: "POST",
    url: "http://localhost:3002/send",
    data
  });
};
