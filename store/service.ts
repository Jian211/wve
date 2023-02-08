import { makeVar } from "@apollo/client";


const allPost = "전체를 보여죠요";
const serviceCtgVar = [makeVar(allPost)];

export const getSelectedCtgPost = (ctg) => {
    const result = ctg + "왔습니다."
    serviceCtgVar.push(makeVar(result));
    return result;
}

export default serviceCtgVar;