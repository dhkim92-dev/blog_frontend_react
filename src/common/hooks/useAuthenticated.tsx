import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/root";
import { access } from "fs";

export type Authentication = ReturnType<typeof useAuthentication>

const useAuthentication = () => {
    const accessToken =  useSelector((state : RootState) => state.authenticationInfo.accessToken)
    const role = useSelector((state : RootState) => state.authenticationInfo.member?.role)
    const member = useSelector((state : RootState) => state.authenticationInfo.member)

    const isAdmin = () => {
        return role == 'ROLE_ADMIN'
    } 

    const isAuthenticated = () => {
        return (accessToken != null) && (member != null)
    }

    const getMemberInfo = () => {
        return member
    }

    return {
        isAdmin :  isAdmin,
        isAuthenticated : isAuthenticated,
        getMemberInfo : getMemberInfo,
        member : member,
        accessToken : accessToken,
        role : role
    }
}

export default useAuthentication