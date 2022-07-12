import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    //이제 context 안에는 AuthContext에서 반환하는 state 값과 dispatch 함수 두가지가 들어 있습니다.
    return context;
};
