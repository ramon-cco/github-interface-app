import React from "react";
import * as S from './styled'


const Profile = () => {
    return <S.Wrapper>
         <S.WrapperImage 
         src="https://avatars.githubusercontent.com/u/77456126?v=4" alt="Avatar of user" />
        <S.WrapperInforUser>
          <div>
        <h1> Ramon Oliveira</h1>
        <S.WrapperUserName>
        <h3>Username:</h3>
        <a href="https://github.com/ramon-cco" target={"_blank"} rel="noreferrer">ramon-cco</a>
        </S.WrapperUserName>
        </div>  
        <S.WrapperStatusCount>
        <div>
            <h4>Followers</h4>
            <span>5</span>
        </div>
        <div>
            <h4>Starreds</h4>
            <span>5</span>
        </div>
        <div>
            <h4>Followings</h4>
            <span>5</span>
        </div>
        </S.WrapperStatusCount>
        </S.WrapperInforUser>
    </S.Wrapper>


};

export default Profile;
