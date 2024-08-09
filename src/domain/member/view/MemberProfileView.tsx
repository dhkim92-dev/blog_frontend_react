import { useEffect } from "react"
import useAuthentication from "../../../common/hooks/useAuthenticated"
import { revokeOAuth2Accesstoken } from "../../authentication/api/api"


export default function MemberProfileView() {

    const {member} = useAuthentication()

    const onClickRevoke = (platform: string) => {
        if(!member) {
            console.error("member 정보가 없습니다")
        } else {
            revokeOAuth2Accesstoken(member.id, platform)
            .then(()=>{
                alert(`${platform} revoked`)
            })
        }
    }

    useEffect(()=>{

    }, [])

    return (
        <>
            <div style = {{marginTop: "100px"}}>
            <button onClick = {()=>{onClickRevoke("GITHUB")}}> Github 연동 해제 </button>
            </div>
        </>
    )
}