import React from 'react';
import * as S from "./styled";

const Repositories = () => {
  return <S.WrapperTabs
                selectedTabClassName='is-selected'
                selectedTabPanelClassName='is-selected'
         >
             <S.WrapperTablist>
                <S.WrapperTab>Repositores</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
             </S.WrapperTablist>
             <S.WrapperTabPanel>panel Repositories</S.WrapperTabPanel>
             <S.WrapperTabPanel>panel Starred</S.WrapperTabPanel>
      </S.WrapperTabs>;
}

export default Repositories;